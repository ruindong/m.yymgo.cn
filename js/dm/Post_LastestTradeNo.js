// 获得最新一期的信息
var POST_LastestTradeNo = function(){
	MessagePostWithoutRsp.call(this);

	// url
	this.url = url_host+"/comm/";
	
	// 测试数据
	this.getTestData = function(){
		var response = '';

		return JSON.parse(response);
	}
}
