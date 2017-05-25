// 我的夺宝成功记录
var DM_MyWinnedList = function(){
	MessageMachine.call(this);

	// url
	this.url = url_host+"/my/wined.json";

	// template
    this._template= 
        '<div class="uinn bc-white umar-t"> '+
        '	<div class="ub" ontouchstart="dfh_touch()" onclick="openTradeInfo({{tradeno}})"> '+
        '        <div class="ub-img1 img-cover" style="background-image:url({{coverImgUrl}})"></div> '+
        '        <div class="umar-l ub-f1"> '+
        '            <p class="txt14">{{commoName}}</p> '+
        '            <p class="txt12 umar-t"><span>参与期号：</span><span>{{tradeno}}</span></p> '+
        '            <p class="txt12"><span>幸运号码：</span><span>{{targetCode}}</span></p> '+
        '            <p class="txt12"><span>我已参与：</span><span>{{winCount}}人次</span></p> '+
        '            <p class="txt12"><span>揭晓时间：</span><span>{{closeTime}}</span></p> '+
        '        </div> '+
        '    </div> '+
        '    <div class="umar-t bd-t uinn-t ub ub-fh"> '+
        '            <div class="ub-f1"></div> '+
        '            {{if shareId}} '+
        '                <div class="wsdz huise">已晒单</div> '+
        '            {{else}} '+
        '                <div class="wsdz" ontouchstart="dfh_touch()" onclick="addShare({{tradeno}})">评价晒单</div> '+    
        '            {{/if}} '+    
        '            {{if postType == "b2c"}} '+
        '              {{if addressId}} '+
        '                  <div class="wsdz" ontouchstart="dfh_touch()" onclick="queryLogistics({{tradeno}})">查看物流</div> '+   
        '              {{else}} '+      
        '                  <div class="wsdz" ontouchstart="dfh_touch()" onclick="queryAddress({{tradeno}})">填写地址</div> '+
        '              {{/if}} '+ 
        '            {{else if postType=="virtual"}} '+
        '              <div class="wsdz" ontouchstart="dfh_touch()" onclick="queryKM({{tradeno}})">查看卡密</div> '+
        '            {{else if postType=="c2b"}} '+
        '              <div class="wsdz" ontouchstart="dfh_touch()" onclick="queryKM({{tradeno}})">提货说明</div> '+    
        '            {{/if}} '+
        '    </div> '+
        '</div>';

	// set Render
	this.setRender(this._template);

	
	// 数据格式转换
	this.transfer = function(data){
		if (data) {
			// 日期格式
			data.closeTime = getSmpFormatDateByLong(data.closeTime);
		}
		
		return data;
	}
	
	
	// 测试数据
	this.getTestData = function(){
		var response = '{}';

		return JSON.parse(response);
	}
}
