// 号码计算规则
var DM_CodeRule = function(){
	MessageMachine.call(this);

	// url
	this.url = url_host + "/trade/100records.json";

	// template
    this._template= 
        '<div class="ub ub-fh bd-b-dashed"> '+
        '    <div class="umar-r">{{showTime}}<em class="umar-t c-important">→{{hmsm}}</em></div> '+
        '    <div class="ub-f1 c-right" style="overflow:hidden" onclick="openUserspace({{userId}})">{{nickName}}</div> '+
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
