// 商品详情
var DM_Commodity = function(){
	MessageMachine.call(this);

	// url
	this.url = url_host+"/trade/";

	// template
    this._template= 
      '<div id="scroll_zone"> '+ 
        // 轮播图
        '<div class="swiper-container bc-white">'+
        '  <div class="swiper-wrapper">'+
        '      {{each commodity.commodityImages as sd i}}'+
        '          <div class="swiper-slide"><img src="{{sd.bigImageUrl}}" /></div>'+
        '      {{/each}}'+
        '  </div>'+
        '  <div class="swiper-pagination"></div>'+
        '</div>'+

        '<input id="commodityname" type="hidden" value="{{commodity.name}}" /> '+       
        '<input id="targetcode" type="hidden" value="{{trade.targetCode}}" /> '+         
        '<input id="count" type="hidden" value="{{trade.orderCount}}" /> '+     
        '<input id="closetime" type="hidden" value="{{trade.closeTime}}" /> '+  

        '<div class="cp_info"> '+ 
        '  <h3>{{commodity.name}}</h3> '+    
        '  <div class="umar-ts c-gray">{{commodity.intro}}</div>'+    
        '  <div id="cp_status">'+       
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
        '       <div>即将揭晓：</div> '+
        '       <div id="timeCountDown" class="ub-f1"><em class="hour">00</em>:<em class="min">00</em>:<em class="sec">00</em>.<em class="ms">000</em></em></div> '+
        '       <div class="c-white" ontouchstart="dfh_touch()" onclick="openWindow(\'code_rule.html?tradeno={{trade.tradeNo}}\')">计算规则</div> '+
        '     </div> '+  
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
        '  {{/if}} '+

        '  </div>'+
        '  <div id="join_status"></div> '+          
        '</div> '+        

        '<div class="umar-t uinn bc-white"> '+
        '  <div class="ub ub-fh ub-ac" onclick="openWqjx({{commodity.id}});"> '+
        '    <div class="ub-img umwh" style="background-image:url(../image/con_1.png)"></div> '+
        '    <div class="umar-l">往期揭晓</div> '+
        '  </div> '+
        '  <div class="umar-t ub ub-fh ub-ac" onclick="openSpxq({{commodity.descriptionUrl}});"> '+
        '    <div class="ub-img umwh" style="background-image:url(../image/con_2.png)"></div> '+
        '    <div class="umar-l ub ub-f1" onclick="openWindow(\'{{commodity.descriptionUrl}}\');"><div class="ub-f1">商品详情</div><div class="f-small c-gray">建议在wifi下查看</div></div> '+
        '  </div> '+
        '  <div class="umar-t ub ub-fh ub-ac" onclick="openSdfx({{commodity.id}});"> '+
        '    <div class="ub-img umwh" style="background-image:url(../image/con_3.png)"></div> '+
        '    <div class="umar-l">晒单分享</div> '+
        '  </div> '+
        '</div> ' +
        '<div class="umar-t uinn bc-white"> ' +
        '  <div class="ub ub-fh uinn-b bd-b ub-ac"> '+
        '    <div class="f-big ub-f1">本期参与者</div> '+
        '    <div class="f-small c-gray">开始时间：{{trade.startTime}}</div> ' +
        '  </div> '+
        '  <div id="join_lb" class="umar-ts"></div> '+
        '</div> ' +
      '</div> '+

      '{{if trade.status == "trading"}} '+   
        '<div id="index-foot" onclick="popOrder({{trade.tradeNo}}, \'{{commodity.name}}\', \'{{commodity.coverImgUrl}}\', {{trade.ecoupon}}, {{trade.remainCount}});" class="banner-bottom"> ' +
        '      <div class="btn-red-b">立即参与</div> ' +
        '</div>'+ 
      '{{else if lastestTradeno != null}} '+
        '<div id="index-foot" onclick="openLastestTrade({{lastestTradeno}});" class="banner-bottom"> ' +
        '      <div class="btn-red-b">新一期正在火热进行中，立即前往</div> ' +
        '</div>'+
      '{{/if}}';  


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
