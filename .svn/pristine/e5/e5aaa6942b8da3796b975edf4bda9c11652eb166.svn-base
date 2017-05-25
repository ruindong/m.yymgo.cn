// 开奖状态，仅在开奖倒计时结束后调用
var DM_Commodity_Status = function(){
	MessageMachine.call(this);

	// url
	this.url = url_host+"/trade/";

	// template
    this._template=       
        '  {{if trade.status == "close"}} '+   
        '   <div class="qh_p_yjx">期号：{{trade.tradeNo}}</div> '+
        '   <div class="umar-t uinn bc-red"> '+
        '     <div class="ub ub-fh ub-ac f-big c-white"> '+        
        '         <div>幸运号码：</div> '+
        '         <div class="f-big2 ub-f1">{{trade.targetCode}}</div> '+
        '         <div class="c-white" ontouchstart="dfh_touch()" onclick="openWindow(\'code_rule.html?tradeno={{trade.tradeNo}}\')">计算规则</div> '+
        '      </div> '+
        '   </div> '+
        '   <div class="umar-t ub ub-fh ub-as"> '+
        '     <div class="ub-img1 img-head" style="background-image:url({{trade.targetUser.headImg}})" ontouchstart="dfh_touch()" onclick="openUserspace({{trade.targetUser.id}})"></div> '+
        '     <div class="ub-f1 umar-l uinn-r c-gray"> '+
        '       <div ontouchstart="dfh_touch()" onclick="openUserspace({{trade.targetUser.id}})"><span class="c-special">{{trade.targetUser.nickName}}</span></div> '+
        '       <div>用户ID：{{trade.targetUser.id}}</div> '+
        '       <div>参与IP：{{ip}}（城市：{{city}}） </div>'+
        '       <div>揭晓时间：{{trade.closeTime}}</div> '+
        '       <div class="ur ub-fh"><div class="ur ub-f1">本期参与<em class="c-important">{{trade.orderCount}}</em>人次</div><div class="c-link" onclick="openUserTradeCodes({{trade.targetUser.id}}, {{trade.tradeNo}});">参与详情</div></div> '+
        '     </div> '+
        '   </div> '+

        '  {{else if trade.status == "calculate"}} '+
        '   <div class="qh_p_djs">期号：{{trade.tradeNo}}</div> '+
        '   <div class="umar-t uinn bc-red"> '+
        '     <div class="ub ub-fh ub-ac f-big c-white"> '+
        '       <div>敬请等候：</div> '+
        '       <div id="timeCountDown" class="ub-f1"><em class="hour">00</em>:<em class="min">00</em>:<em class="sec">00</em>.<em class="ms">000</em></em></div> '+
        '       <div class="c-white" ontouchstart="dfh_touch()" onclick="openWindow(\'code_rule.html?tradeno={{trade.tradeNo}}\')">计算规则</div> '+
        '     </div> '+  
        '   </div> '+
        '   <div class="umar-t"> '+
        '     <div class="c-gray">等待老时时彩开奖数据...</div> '+
        '   </div> '+

        '  {{else}} '+
        '   <div> '+
        '     <div class="qh_p">期号：{{trade.tradeNo}}</div> '+        
        '     <div class="progress"><div class="completed" style="width:{{trade.progress}}%"></div></div> '+
        '     <div class="ub ub-fh"> '+
        '        <div class="ub-f1">总需{{trade.totalCount}}</div> '+
        '        <div>剩余<span class="c-important">{{trade.remainCount}}</span></div> '+
        '     </div> '+
        '   </div> '+
        '  {{/if}} ';


	// set Render
	this.setRender(this._template);

	
	// 数据格式转换
	this.transfer = function(data){
        if (data && data.trade) {
            var progress = 0;
            var remainCount = data.trade.remainCount;
            var totalCount = data.trade.totalCount;

            if(totalCount > 0)
            {
                progress = (totalCount - remainCount) * 100 / totalCount;
            }
            
            data.trade.progress = parseInt(progress);
        }
        
        return data;
	}
	
	
	// 测试数据
	this.getTestData = function(){
		var response = '{}';

		return JSON.parse(response);
	}
}
