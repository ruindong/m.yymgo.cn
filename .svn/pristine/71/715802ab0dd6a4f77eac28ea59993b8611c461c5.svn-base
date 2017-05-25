// 根据addressId获取地址信息
var DM_Address = function(){
	MessageMachine.call(this);

	// url
	this.url = url_host+"/my/address/get.json";

	// template
    this._template = 
        '<div class="uinn bc-gray f-small"> '+
        '  <div>收货地址：{{province}}{{city}}{{county}}{{jiedao}}</div> '+
        '  <div class="umar-t f-small">　收件人：{{consignee}}</div> '+
        '  <div class="f-small">　　手机：{{mobile}}</div> '+
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
