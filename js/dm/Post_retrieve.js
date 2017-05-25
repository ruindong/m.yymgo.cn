// 手机号码登录
var Post_retrieve = function(){
	MessagePostWithoutRsp.call(this);

	// url
	this.url = url_host+"sms/retrieve.json";

	
	// 测试数据
	this.getTestData = function(){
		var response = '{} ';

		return JSON.parse(response);
	}
}
