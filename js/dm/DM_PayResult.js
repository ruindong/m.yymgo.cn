// 支付订单状态查询
var DM_PayResult = function(){
	MessageMachine.call(this);

	// url
	this.url = url_host+"/pay/result";

	// template
    this._template= 
    '<div class="uinn bc-white"> '+
    '  <div class="c-center f-big2 c-important">恭喜您，参与成功！</div> '+      

    '  <div class="umar-t uinn bc-gray bd"> '+
    '    <div class="f-big2 c-special">{{commName}}</div> '+
    '    <div class="umar-ts">期号：{{tradeNo}}</div> '+
    '    <div class="umar-t">为您购买<em class="c-important f-big">{{count}}</em>人次，总金额<em class="c-important f-big">￥{{totalPrice}}</em></div> '+
    '  </div> '+  
    '  {{if buyStatus > 0}} '+
    '  <div class="umar-t"> '+
    '    <div class="c-important">{{_buyStatusText}}</div> '+
    '    <div class="umar-t">由于上述原因，可能会导致您的支付金额与购买金额不一致，剩余金额留存在您的账户余额中，详情可查询<a class="c-link" href="/my/account_detail.html">账户明细</a></div> '+
    '  </div>  '+
    '  {{/if}} '+
    '  <div class="umar-t">敬请等待开奖，祝您好运！</div> '+ 
    '  <div class="umar-tb ub ub-pc">'+
    '    <div class="btn-red-2" onclick="openTradeInfo(\'{{tradeNo}}\');">继续购买</div>'+
    '    <div class="umar-l btn-red-2" onclick="location.replace(\'/index.html\');">回到首页</div>'+
    '  </div>'+
    '</div>';

	// set Render
	this.setRender(this._template);

	
	// 数据格式转换
	this.transfer = function(data){
		if(data)
		{
			if(data.buyStatus == 1)
			{
				data._buyStatusText = "本期美购已售完或已关闭";
			}
			else if(data.buyStatus == 2)
			{
				data._buyStatusText = "账户余额不足无法购买";
			}
			else if(data.buyStatus == 3)
			{
				data._buyStatusText = "账户余额不足，部分购买";
			}
			else if(data.buyStatus == 4)
			{
				data._buyStatusText = "剩余人次不足，部分购买";
			}
		}
		return data;
	}
	
	
	// 测试数据
	this.getTestData = function(){
		var response = '{}';
		return JSON.parse(response);
	}
}