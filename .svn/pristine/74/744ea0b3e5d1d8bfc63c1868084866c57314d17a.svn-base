// 我的中奖附加信息：地址等，此接口不展示
var DM_MyWinnedAttr = function(){
	MessageMachine.call(this);

	// url
	this.url = url_host+"/my/wined/";

	// template
    this._template= 
        '';

	// set Render
	this.setRender(this._template);

	
	// 数据格式转换
	this.transfer = function(data){
		return data;
	}
	
	
	// 测试数据
	this.getTestData = function(){
		var response = '{"code":0,"message":"success","version":"1.1","data":'+
		  '[{"tradeNo":13421234,"commodityId":234324324,"coverImgUrl":"/ssssssss","ecoupon":234324324,"totalCount":99,"remainCount":6,"status":"trading","startTime":null,"closeTime":null,"targetUser":null}]'+
	      '}';

		return JSON.parse(response);
	}
}
