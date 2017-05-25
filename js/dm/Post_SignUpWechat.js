// 微信登录绑定手机号码
var Post_SignUpWechat = function(){
	MessagePostWithoutRsp.call(this);

	// url
	this.url = url_host+"/user/wechatSignUp.json";

	
	// 测试数据
	this.getTestData = function(){
		var response = '{}';

		return JSON.parse(response);
	}
}
