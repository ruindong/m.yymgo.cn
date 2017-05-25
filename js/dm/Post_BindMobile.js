// 绑定手机号码
var Post_BindMobile = function(){
	MessagePostWithoutRsp.call(this);

	// url
	this.url = url_host+"user/update-mobile.json";

	
	// 测试数据
	this.getTestData = function(){
		var response = '{} ';

		return JSON.parse(response);
	}
}