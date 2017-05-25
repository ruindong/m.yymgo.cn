// 查询用户购买记录
var DM_UserTradeIssueRecord = function(){
	MessageMachine.call(this);

	// url
	this.url = url_host+"/user/trade-records/";

	// template
    this._template= 
        '<div class="umar-ts bd-b-dashed"> '+
        '  <div class="ub ub-fh"> '+
        '     <div class="ub-f2 c-left" >{{createTime}}</div> '+
        '     <div class="ub-f1 c-center c-important" >{{count}}</div> '+
        '     <div class="ub-f1 c-right c-link" onclick="fold(this);">查看</div> '+
        '  </div> '+
        '  <div class="menu_body_2 uinn bc-gray f-small uhide"> '+
		'    {{each codes as code i }} '+
        '      <span>{{code}}</span> '+
        '    {{/each}} '+
        '  </div> '+
        '</div> ';   

	// set Render
	this.setRender(this._template);

	
	// 数据格式转换
	this.transfer = function(data){
		if (data) {
			data.createTime = getSmpFormatDateByLong(data.createTime);
		}
		
		return data;
	}
	
	
	// 测试数据
	this.getTestData = function(){
		var response = '';

		return JSON.parse(response);
	}
}
