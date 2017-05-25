// 晒单分享
var Post_Share = function(){
	MessagePostWithoutRsp.call(this);

	// url
	this.url = url_host + "my/add-share.json";

	
	// 测试数据
	this.getTestData = function(){
		var response = '{}';

		return JSON.parse(response);
	}
}
