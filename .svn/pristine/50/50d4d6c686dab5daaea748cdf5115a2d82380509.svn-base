// 已揭晓美购记录状态变化专用
var DM_ClosedTradeList_Status = function(){
	MessageMachine.call(this);

	// url
	this.url = url_host+"/trade/";

	// template
    this._template=    
        '{{if status == "calculate"}} '+    
        '  <div class="ub-img1 image" style="background-image:url({{coverImgUrl}})"></div> '+
        '  <div class="info c-gray"> '+
        '    <div> '+
	    '     <p class="c-normal">{{commName}}</p> '+
	    '     <p>期号：{{tradeNo}}</p> '+
	    '    </div> '+
	    '    <div class="ub-fh tcd c-important"> '+	    
	    '     <div class="umar-ts">等待老时时彩开奖数据</div> '+
	    '     <div id="{{tradeNo}}" class="time-count-down umar-ts"> '+
	    '        <span class="hour">00</span><em>:</em><span class="min">00</span><em>:</em><span class="sec">00</span><em>.</em><span class="ms">000</span> '+
	    '     </div> '+   
        '  </div> '+

	    '{{else}} '+
        '  <div class="ub-img1 image" style="background-image:url({{coverImgUrl}})"></div> '+
        '  <div class="info c-gray"> '+
	    '     <p class="c-normal">{{commName}}</p> '+
	    '     <p>期号：{{tradeNo}}</p> '+
	    '     <p ontouchstart="dfh_touch()" onclick="openUserspace({{targetUser.id}})">获奖者：<span class="lan">{{targetUser.nickName}}</span></p> '+
	    '     <p>本期参与：{{orderCount}}人次</p> '+
	    '     <p>幸运号码：<span class="c-important">{{targetCode}}</span></p> '+
	    '     <p>{{closeTime}}揭晓</p> '+        
        '  </div> '+   
	    '{{/if}} ';

	// set Render
	this.setRender(this._template);

	// 数据格式转换
	this.transfer = function(data){
		if (data) {
			data = data.trade;
		}
		
		return data;
	}
	
	
	// 测试数据
	this.getTestData = function(){
		var response = '{}';

		return JSON.parse(response);
	}
}
