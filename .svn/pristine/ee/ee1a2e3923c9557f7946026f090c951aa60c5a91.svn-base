// 我的账户明细
var DM_MyAccountDetail = function(){
	MessageMachine.call(this);

	// url
	this.url = url_host+"/my/accountDetail.json";

	// template
    this._template= 
        '<div class="uinn umar-b bc-white">'+
        '    <div class="f-small">{{createTime}}<span class="umar-l">{{memo}}</span></div>'+
        '    <div class="ub ub-fh umar-t">'+
        '        <div class="ub-f1">增减：<span class="c-important">{{amount}}</span></div>'+
        '        <div class="c-gray">余额：{{remain}}</div>'+
        '    </div>'+
        '</div>';
        /*
        '<div class="ub ub-fh uinn-b uinn-t bd-b bc-white c-center">'+
        '    <div style="width:1.5rem"></div>'+
        '    <div style="width:0.5rem"></div>'+
        '    <div class="ub-f1"></div>'+
        '    <div style="width:0.2rem"></div>'+                        
        '</div> ';
        */

	// set Render
	this.setRender(this._template);

	
	// 数据格式转换
	this.transfer = function(data){
		if (data) {
			// 日期格式
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
