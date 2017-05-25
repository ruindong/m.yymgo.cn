// 设置支付密码
var Post_PayPwd_Set = function(){
	MessagePostWithoutRsp.call(this);

	// url
	this.url = url_host+"my/setPayPwd.json";

	
	// 测试数据
	this.getTestData = function(){
		var response = '{} ';

		return JSON.parse(response);
	}
}