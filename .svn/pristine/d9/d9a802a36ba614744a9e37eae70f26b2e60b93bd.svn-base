// 账户余额支付
var DM_PayByEcoupon = function(){
	MessageMachine.call(this);

	// url
	this.url = url_host+"/pay/pay4OrderByEcoupon";

	// template
    this._template= 
    '<div class="uinn"> '+
    '  <div class="kong"><img src="../image/wanhuatong.png" alt=""></div> '+
    '  <div class="c-center f-big2 c-important">恭喜您，参与成功！</div> '+      
    '  <div class="umar-tb uinn bc-gray bd"> '+
    '    <div class="f-big2 c-special">{{commName}}</div> '+
    '    <div class="umar-ts">期号：{{tradeNo}}</div> '+
    '    <div class="umar-t">您已成功购买<em class="c-important f-big">{{count}}</em>人次，总金额<em class="c-important f-big">￥{{totalPrice}}</em></div> '+
    '  </div> '+  
    '  {{if buyStatus > 0}} '+
    '  <div class="umar-t"> '+
    '    <div class="c-important">{{_buyStatusText}}</div> '+
    '  </div>  '+
    '  {{/if}} '+
    '  <div class="umar-t">敬请等待开奖，祝您好运！</div> '+
    '</div>';

	// set Render
	this.setRender(this._template);

	
	// 数据格式转换
	this.transfer = function(data){
		return data;
	}
	
	
	// 测试数据
	this.getTestData = function(){
		var response = '{}';
		return JSON.parse(response);
	}
}
