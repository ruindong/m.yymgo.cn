// 我的晒单记录
var DM_MyShareList = function(){
	MessageMachine.call(this);
	
	// url
	this.url = url_host+"/my/share-list.json";
	// template
    this._template= 
		'<div>'+
			'<div class="umar-b uinn bc-white"> '+
			'    <div class="ub-f1" ontouchstart="dfh_touch()" onclick="openShareInfo({{id}});"> '+
			'      <div class="ub ub-fh"> '+
			'          <div class="c-link ub-f1">{{user.nickName}}</div> '+
			'          <div class="c-gray">{{createTime}}</div> '+
			'      </div> '+
			'      <div class="umar-t">{{shareText}}</div> '+
			'      <div class="ub umar-t"> '+
			'         {{if ImgUrls && ImgUrls.length>0}}'+
			'           {{each ImgUrls as img i }} '+
			'              <div class="ub-img1 img-cover umar-t umar-r" style="background-image:url({{img}})"></div> '+
			'           {{/each}} '+
			'         {{/if}}'+   
			'      </div> '+
			'      <div class="umar-t c-gray f-small">{{commName}}'+
			'	   </div> '+
			'    </div> '+

			'    <div class="umar-ts uinn-t bd-t ub ub-fh c-link">'+
			'      <div class="ub-f1"></div>'+
			'	   <div class="ub ub-ac umar-l" ontouchstart="dfh_touch()" onclick="deleteShare({{id}}, {{allowDelete}})"> '+
			'         <div class="ub-img img-icon1" style="background-image:url(../image/del.png)"></div> '+
			'         <div class="umar-l">删除</div>'+
			'      </div>'+
			'    </div>'+
			'</div>'+
		'</div>';

	// set Render
	this.setRender(this._template);

	
	// 数据格式转换
	this.transfer = function(data){
		if (data) {
			// 是否允许删除
			var now = new Date();
			var current = now.getTime();

			if((current - data.createTime) >= 30 * 60 * 1000) // 30分钟后不允许删除
			{
				data.allowDelete = "false";
			}
			else
			{
				data.allowDelete = "true";
			}

			// 日期格式
			data.createTime = getSmpFormatDateByLong(data.createTime);

			// 图片分解
			if (data.imgUrls) {
				var aryImgUrls = data.imgUrls.split(",");
				if (aryImgUrls && aryImgUrls.length > 0) {
				    data.ImgUrls = aryImgUrls;
				}
			}
		}
		
		return data;
	}
	
	
	// 测试数据
	this.getTestData = function(){
		var response = '{}';

		return JSON.parse(response);
	}
}
