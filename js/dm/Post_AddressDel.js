// 删除地址
var Post_AddressDel = function(){
	MessagePostWithoutRsp.call(this);

	// url
	this.url = url_host + "user/delect-address.json";

	
	// 测试数据
	this.getTestData = function(){
		var response = '{}';

		return JSON.parse(response);
	}
}
