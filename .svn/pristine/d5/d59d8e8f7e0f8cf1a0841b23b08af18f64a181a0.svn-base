// 充值状态查询
var DM_PayResultRecharge = function(){
	MessageMachine.call(this);

	// url
	this.url = url_host+"/pay/resultRecharge";

	// template
    this._template= 
    '<div class="uinn bc-white"> '+
    '  <div class="c-center f-big2 c-important">恭喜您，充值成功！</div> '+      
    '  <div class="umar-t">{{createTime}}到账￥{{totalPrice}}！</div> '+
    '  <div class="umar-tb ub ub-pc">'+
    '    <div class="btn-red-2" onclick="location.replace(\'/my/my.html\');">查看明细</div>'+    
    '    <div class="umar-l btn-red-2" onclick="location.replace(\'/index.html\');">回到首页</div>'+
    '  </div>'+    
    '</div>';

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
