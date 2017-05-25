// 可用支付方式
var DM_PayTypeList = function(){
	MessageMachine.call(this);

	// url
	this.url = url_host+"/pay/paymentType.json";

	// template
    this._template= '\
      {{if status == 1}}\
        <div id="{{payType}}" onclick="changeTab(id);">\
          <div class="ub ub-fh ub-ac">\
            <div class="ub-img umwh-1 umar-r" style="background-image:url({{logo}})"></div>\
            <div class="ub-f1 umar-l f-big2">{{name}}</div>\
            <div class="cbximg umwh"></div>\
          </div>\
        </div>\
      {{/if}}\
        ';

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
