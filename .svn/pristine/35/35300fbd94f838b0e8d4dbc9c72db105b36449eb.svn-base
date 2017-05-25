// 我的待支付订单
var DM_MyOrderListWaitPay = function(){
	MessageMachine.call(this);

	// url
	this.url = url_host+"/my/no_order.json";

	// template
    this._template= 
	    '<div class="tab1"> '+
	    '    <div class="uinn"> '+
	    '      <div class="ub ub-fh" onclick="openTradeInfo({{tradeIssue.tradeNo}})"> '+
	    '        <div class="ub-img umw-4" style="background-image:url({{tradeIssue.commodityModel.coverImgUrl}})"></div> '+
	    '        <div class="ub-f1 umar-l"> '+
	    '            <p class="txt14">{{tradeIssue.commodityModel.name}}</p> '+
	    '            <p class="umar-t txt12"><span>参与期号：</span><span>{{tradeIssue.tradeNo}}</span></p> '+
	    '            <p class="txt12"><span>下单时间：</span><span>{{createTime}}</span></p> '+
	    '        </div> '+
	    '      </div> '+
	    '      <div class="uinn-t umar-t bd-t"> '+
	    '        <div class="ub ub-fh ub-ac"> '+
	    '         <div class="ub-f1 txt12 c-normal"> '+
	    '           <span>拟购{{count}}人次，￥{{tradeIssue.ecoupon}}元/人次</span> '+
	    '           <span class="umar-l">总价：<em class="c-important f-big">￥{{totalPrice}}</em></span> '+
	    '         </div> '+
	    '         {{if tradeIssue.status == "close"}} '+
	    '           <div class="c-gray">已揭晓</div> '+	    
	    '         {{else if tradeIssue.status == "calculate"}} '+
	    '           <div class="c-gray">待揭晓</div> '+	    	    
	    '         {{else if tradeIssue.status == "trading"}} '+	    
	    '           <div class="c-link" onclick="payOrder({{id}}, {{totalPrice}}, {{tradeIssue.tradeNo}}, \'{{tradeIssue.commodityModel.name}}\')">立即支付</div> '+
	    '         {{/if}} '+
	    '        </div> '+
	    '      </div> '+   
	    '    </div> '+
	    '</div> ';

	// set Render
	this.setRender(this._template);

	
	// 数据格式转换
	this.transfer = function(data){
		if (data) {
			data.createTime = getSmpFormatDateByLong(data.createTime);
		}
		
		return data;
	}
	
	
	// 测试数据
	this.getTestData = function(){
		var response = '{}';

		return JSON.parse(response);
	}
}
