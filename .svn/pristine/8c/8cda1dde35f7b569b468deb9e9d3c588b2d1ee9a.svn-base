// 查询我购买某期夺宝的人次数
var DM_MyTradeBuyCount = function(){
	MessageMachine.call(this);

	// url
	this.url = url_host+"/user/trade-count/";

	// template
    this._template=
        '<div class="umar-t uinn bc-gray"> '+
        '{{if totalCount > 0}} '+
        '   <div class="ub ub-fh"> '+
        '      <div class="ub-f1">您本期参与<em id="mycount" class="c-important">{{totalCount}}</em>人次</div> '+
        '      <div onclick="queryMyTradeCodes();">查看美购号</div></div> '+   
        '   </div> '+ 
        '{{else}} '+
        '   <div>您没有参与本期美购哦</div>'+
        '{{/if}}'+
        '</div>';   

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
