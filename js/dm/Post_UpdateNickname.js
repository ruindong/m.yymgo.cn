// 修改昵称
var Post_UpdateNickname= function(){
	MessagePostWithoutRsp.call(this);
	// url
	this.url = url_host+"/user/update-name.json";

	
	// 测试数据
	this.getTestData = function(){
		var response = '{}';

		return JSON.parse(response);
	}
}
