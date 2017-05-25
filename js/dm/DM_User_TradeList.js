// 用户的美购记录
var DM_User_TradeList = function(){
	MessageMachine.call(this);

	// url
	this.url = url_host+"/user/records/list.json";

	// template
    this._template= 
	    '<div class="tab1"> '+
	    '    <div class="uinn" ontouchstart="dfh_touch()" onclick="openTradeInfo({{tradeno}})"> '+
	    '      <div class="ub ub-fh"> '+
	    '        <div class="ub-img1 img-cover" style="background-image:url({{coverImgUrl}})"></div> '+
	    '        <div class="ub-f1 umar-l"> '+
	    '            <p class="txt14">{{commoName}}</p> '+
	    '            <p class="umar-t txt12"><span>参与期号：</span><span>{{tradeno}}</span></p> '+
	    '            <p class="txt12"><span class="fl">本期参与：{{joinCount}}人次</span><span class="fr lanse" ontouchstart="dfh_touch()" onclick="userTCode({{tradeno}})">参与详情</span></p> '+
	    '        </div> '+
	    '      </div> '+	    
	    '    </div> '+
	    '    <div class="tab1_bottom"> '+
	    '      {{if status == "trading"}} '+
	    '        <p class="txt12" style="line-height:.275rem;"> '+
	    '            <span>总需</span> '+
	    '            <span>{{totalCount}}</span> '+
	    '            &nbsp;&nbsp; '+
	    '            <span style="color:#ff435d">剩余</span> '+
	    '            <span style="color:#ff435d">{{remainCount}}</span> '+
	    '        </p> '+
	    '        <div class="progress"> '+
	    '            <div class="completed" style="width:{{progress}}%"></div> '+
	    '        </div> '+
	    '      {{else if status == "calculate"}} '+
		'		<p class="txt12" style="line-height:.275rem;"> '+
		'		    <span>即将揭晓正在计算，请稍候...</span> '+
		'		</p> '+
	    '      {{else if status == "close"}} '+
		'		<p class="txt12" style="line-height:.275rem;"> '+
		'		    <span>获得者：</span> '+
		'		    <span class="lanse">{{winUser.nickName}}</span> '+
		'		    &nbsp;&nbsp; '+
		'		    <span style="color:#ff435d">{{winCount}}</span> '+
		'		    <span style="color:#4e4e4e">人次</span> '+
		'		</p> '+
	    '      {{/if}} '+
	    '    </div> '+
	    '</div> ';

	// set Render
	this.setRender(this._template);

	
	// 数据格式转换
	this.transfer = function(data){
		if (data) {
			var progress = 0;
			var remainCount = data.remainCount;
			var totalCount = data.totalCount;

			if(totalCount > 0)
			{
				progress = (totalCount - remainCount) * 100 / totalCount;
			}
			
			data.progress = parseInt(progress);
		}
		
		return data;
	}
	
	
	// 测试数据
	this.getTestData = function(){
		var response = '{}';

		return JSON.parse(response);
	}
}
