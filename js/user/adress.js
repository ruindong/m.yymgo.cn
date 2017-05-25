	var blMgr;

	window.onload = function(){load();} 

    // 初始化加载数据
    function load()
    {
        var dm = new DM_AddressList();

        // 弹动列表
        blMgr = new BounceListMgr("scroll_zone");
        blMgr.init("address_list", dm);	

        // 回退需要刷新
        goBackRefresh(function(){
          // 重新加载地址信息
          blMgr.pullDown();
        });
    }

    //********功能按钮********
    // 添加新地址
    function addAddress()
    {
    	openWindow("address_add.html");
    }   
     
    // 修改地址
    function modifyAddress(id)
    {
    	openWindow("address_modify.html?id=" + id);
    }

    // 删除地址
    var _id;
    function deleteAddress(event, id)
    {
    	_id = id;

    	// 删除确认
    	Popup.confirm(event, "确定要删除该收货地址？", delIt);
    }
    function delIt()
    {
        var msgPost = new Post_AddressDel(); 

        var params = {
        	"id": _id
        }

        // 删除地址
        DataCenter.post(msgPost, params, cbAddressDel);    	
    }
    // 删除回调函数
    function cbAddressDel(result, machine)
    {
        if(result) 
        {
            if (result.code == 0) {
            	$toast("删除成功！");

            	// 从列表中删除该条数据（客户端删除）。。。
            	// 直接刷新来得简单
            	blMgr.pullDown();
            }
            else
            {
            	$toast(result.message);
            }
        }
    }