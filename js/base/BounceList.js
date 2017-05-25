/**
 *  弹动式数据处理类
 */

var that; // json回调函数会丢失this指针，暂且用这么low的办法处理

function BounceListMgr(mainId)
{
	this.machine;
	this.mainId; // 容器id
	this.showId; // 滚动列表显示的id
	this.iScrollPlug;
	this.pageIndex = 0;
	this.pageCount = 1;

	this.maxPageSize = 30; // 最多允许缓存30个页面

	that = this;
	// 初始化弹动控件
    this.iScrollPlug = new ScrollPlug($$(mainId));
    // 上拉和下拉执行函数
    this.iScrollPlug.init(_pdfn, _pufn);

    // 防止重入
    this.isWorking = false;
	
	// 初始化
	BounceListMgr.prototype.init=function(showId, machine)
	{
		this.machine = machine;
		this.showId = showId;

        // 下拉获取数据
        this.pullDown();
	}

	// 下拉处理
	BounceListMgr.prototype.pullDown=function()		
	{
		if(this.isWorking)
		{
			return;
		}
		this.isWorking = true;

		this.pageIndex = 0;
	    this.refreshPage(this.pageIndex + 1);		
	}

	// 上拉处理
	BounceListMgr.prototype.pullUp=function()
	{
		if(this.pageIndex >= this.pageCount)
		{
			// 已经是最后一页了
			$toast("没有更多数据了~");

		    // 弹动恢复
		    this.iScrollPlug.reset();
		}
		else
		{
			this.refreshPage(this.pageIndex + 1);
		}
	}	
	
	// 获取某一页数据
	BounceListMgr.prototype.refreshPage=function(pg)
	{
		this.machine.addParam("pageIndex", pg);
		//this.machine.addParam("pageSize", 5); // 翻页测试
        DataCenter.getDataAnsyc(this.showId, this.machine, _afterS, _afterF);
	}

	// 数据后续处理
	BounceListMgr.prototype.afterSuccess=function(response, showId, machine)		
	{
		if(!response || !response.data || (response.code != 0) || !(response.data instanceof Array))
		{
		    // 弹动恢复
		    this.iScrollPlug.reset();

			return;
		}

		var data = response.data;
		var curHtml = DataCenter.getHTML_DataList(machine, data, machine.transfer);
		

		this.pageIndex = this.pageIndex + 1;

		curHtml = '<div id="page' + this.pageIndex + '" name="PAGE">' + curHtml + '</div>';		

		var div = $("#" + this.showId);

		// 如果是第一页
		if(this.pageIndex == 1)
		{
			// 没有数据
			if(data.length == 0)
			{
				div.html('<div class="kong"><img src="/image/kong.png" alt="" /></div>');
			}
			else
			{
	            div.html(curHtml);
			}
		}
		else
		{
			if(this.pageIndex > this.maxPageSize)
			{
				// 删除第一个节点
				var node = document.getElementsByName('PAGE')[0];
				if(node)
				{
					node.parentNode.removeChild(node);
				}
			}

			var innerHtml = div.html();
			innerHtml = innerHtml.concat(curHtml);

	        div.html(innerHtml);
	    }

		// 更新page和pageCount
		if(response.pageIndex && typeof(response.pageIndex) != "undefined")
		{
			this.pageIndex = response.pageIndex;
		}

		if(response.pageCount && typeof(response.pageCount) != "undefined")
		{
			this.pageCount = response.pageCount;
		}

		// 弹动恢复
		this.iScrollPlug.reset();
		this.isWorking = false;		
	}	

	// 数据后续处理
	BounceListMgr.prototype.afterFailed=function(err)
	{
		JsonEx.afterFailedDefault(err);

		// 弹动恢复
		this.iScrollPlug.reset();
		this.isWorking = false;
	}	
}


// 几个回调函数，注意that指针
function _pdfn()
{
	that.pullDown();
}

function _pufn()
{
	that.pullUp();
}

function _afterS(response, showId, machine)
{
	that.afterSuccess(response, showId, machine);
}
function _afterF(err)
{
	that.afterFailed(err);
}


