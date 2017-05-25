// 查看参与列表头部的基本信息
var DM_UserTradeInfo = function(){
	MessageMachine.call(this);

	// url
	this.url = url_host+"/trade/";

	// template
    this._template=       
        '<div class="txt14" id="commodityname">{{commodity.name}}</div> '+
        '<div class="txt12 c-gray umar-tb"><span>期号：</span><span id="tradeno">{{trade.tradeNo}}</span></div> '+
        '{{if trade.targetCode}}'+
        '  <div class="txt12 c-gray umar-ts"><span>本期幸运号码：</span><span id="targetcode">{{trade.targetCode}}</span></div> '+
        '{{/if}}';

	// set Render
	this.setRender(this._template);

	
	// 数据格式转换
	this.transfer = function(data){
		if (data) {
		}
		
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
