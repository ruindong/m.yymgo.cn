// 发送验证码
var Post_SendCode = function(){
	MessagePostWithoutRsp.call(this);

	// url
	this.url = url_host+"sms/verify.json";

	
	// 测试数据
	this.getTestData = function(){
		var response = '{} ';

		return JSON.parse(response);
	}
}