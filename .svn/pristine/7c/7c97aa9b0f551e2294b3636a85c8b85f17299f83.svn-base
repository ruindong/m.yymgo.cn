// 我的待晒单美购记录
var DM_MyTradeListWaitShare = function(){
	MessageMachine.call(this);

	// url
	this.url = url_host+"/my/unshared.json";

	// template
    this._template= 
	    '<div class="tab1"> '+
	    '    <div class="uinn"> '+
	    '      <div class="ub ub-fh"> '+
	    '        <div class="ub-img umw-4" style="background-image:url({{coverImgUrl}})"></div> '+
	    '        <div class="ub-f1 umar-l"> '+
	    '            <p class="txt14" onclick="openTradeInfo({{tradeno}})">{{commoName}}</p> '+
	    '            <p class="umar-t txt12"><span>参与期号：</span><span>{{tradeno}}</span></p> '+
	    '            <p class="txt12"><span class="fl">本期参与：{{joinCount}}人次</span><span class="fr lanse" onclick="addShare({{tradeno}})">立即晒单</span></p> '+
	    '        </div> '+
	    '      </div> '+	    
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
