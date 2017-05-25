// 设置支付密码开关
var Post_PayPwd_SetStatus = function(){
	MessagePostWithoutRsp.call(this);

	// url
	this.url = url_host+"my/setPayPwdStatus.json";

	
	// 测试数据
	this.getTestData = function(){
		var response = '{} ';

		return JSON.parse(response);
	}
}