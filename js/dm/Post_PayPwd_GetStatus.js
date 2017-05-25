// 获取支付密码状态
var Post_PayPwd_GetStatus = function(){
	MessagePostWithoutRsp.call(this);

	// url
	this.url = url_host+"my/getPayPwd.json";

	
	// 测试数据
	this.getTestData = function(){
		var response = '{} ';

		return JSON.parse(response);
	}
}