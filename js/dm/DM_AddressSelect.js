// 地址选择
var DM_AddressSelect = function(){
	MessageMachine.call(this);
	
	// url
	this.url = url_host+"/my/address.json";
	
	// template
    this._template= 
        '<div class="uinn bc-white bd-b-dashed adr" id="{{id}}"> '+
        '    <div class="ub ub-ac ub-fh f-small"> '+
        '         <div class="ub-f1">{{consignee}}</div> '+    
        '         <div class="umar-l">{{mobile}}</div> '+
        '         <div class="umar-l cbximg umwh"></div> '+
        '    </div> '+          
        '    <div class="umar-ts f-big">{{province}}{{city}}{{county}}{{jiedao}}</div> '+
        '</div> ';

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
