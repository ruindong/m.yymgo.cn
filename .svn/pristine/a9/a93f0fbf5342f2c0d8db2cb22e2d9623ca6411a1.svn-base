// 地址列表
var DM_AddressList = function(){
	MessageMachine.call(this);

	// url
	this.url = url_host + "/my/address.json";

	// template
    this._template = 
		'<div class="uinn bc-white umar-b" id="list">'+
		'	<div class="ub ub-fh f-small c-gray">'+
		'		<div class="ub-f1">{{consignee}}</div>'+
		'		<div>{{mobile}}</div>'+
		'	</div>'+
		'   <div class="umar-t">{{province}}{{city}}{{county}}{{jiedao}}</div>'+

		'	<div class="umar-ts uinn-t bd-t ub ub-fh c-link">'+
		'		<div class="ub-f1"></div>'+
		'		<div class="ub ub-ac umar-r" ontouchstart="dfh_touch()" onclick="modifyAddress({{id}})"> '+
		'           <div class="ub-img img-icon1" style="background-image:url(../image/adred_ediotr.png)"></div> '+
		'           <div class="umar-l">修改</div>'+
		'       </div>'+
		'		<div class="ub ub-ac umar-l" ontouchstart="dfh_touch()" onclick="deleteAddress(event, {{id}})"> '+
		'           <div class="ub-img img-icon1" style="background-image:url(../image/del.png)"></div> '+
		'           <div class="umar-l">删除</div>'+
		'       </div>'+
		'	</div>'+
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
