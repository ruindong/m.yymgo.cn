// 添加地址
var Post_UpdateAddress= function(){
	MessagePostWithoutRsp.call(this);
	// url
	this.url = url_host+"user/add-address.json";

	
	// 测试数据
	this.getTestData = function(){
		var response = '{"success":"true", "errcode":"错误码",  "msg":"返回的通知", "pagecount":"总页数", "recordcount" :"记录总数", ' +
		' "data":{"list":[' +
        ' {"id":"定制服务ID", "name":"作品名称",'+
        '}} ';

		return JSON.parse(response);
	}
}
