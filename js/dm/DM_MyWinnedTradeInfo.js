// 我获奖的商品信息：诸多地方共用
var DM_MyWinnedTradeInfo = function(){
    MessageMachine.call(this);

	// url
	this.url = url_host+"/trade/";

	// template
    this._template= 
    '<div class="uinn bc-white bd-b"> '+
    '  <div class="ub ub-ps"> '+
    '    <div class="ub-img umwh-3" style="background-image:url({{commodity.coverImgUrl}})"></div> '+
    '    <div class="umar-l ub-f1"> '+
    '       <p class="txt14">{{commodity.name}}</p> '+
    '       <p class="txt12 umar-t"><span>参与期号：</span><span class="umar-l">{{trade.tradeNo}}</span></p> '+
    '       <p class="txt12"><span>幸运号码：</span><span class="umar-l c-important">{{trade.targetCode}}</span></p> '+
    '       <p class="txt12"><span>本期参与：</span><span class="umar-l">{{trade.orderCount}}人次</span></p> '+
    '       <p class="txt12"><span>揭晓时间：</span><span class="umar-l">{{trade.closeTime}}</span></p> '+
    '    </div> '+
    '  </div> '+
    '</div> ';

	// set Render
	this.setRender(this._template);

	
	// 数据格式转换
	this.transfer = function(data){
        if (data && data.trade) {
        }
        
        return data;
	}
	
	
	// 测试数据
	this.getTestData = function(){
		var response = '{}';

		return JSON.parse(response);
	}
}
