// 本期参与者
var DM_Commodity_PartInRecord = function(){
	MessageMachine.call(this);

	// url
	this.url = url_host+"/trade/records/";

	// template
    this._template= 
        '  <div class="ub ub-fh umar-ts bd-b-dashed" ontouchstart="dfh_touch()" onclick="openUserspace({{user.id}})"> '+
        '    <div class="ub-img1 img-head" style="background-image:url({{user.headImg}})"></div> '+
        '    <div class="umar-l ub-f1"> '+
        '      <div><em onclick="openUserspace({{user.id}})">{{user.nickName}}</em></div> '+
        '      <div class="ub ub-fh c-gray umar-ts f-small">IP：{{ip}}（城市：{{city}}）</div> '+            
        '      <div class="ub ub-fh c-gray f-small"> '+    
        '        <div class="ub-f1">{{createTime}}</div> '+
        '        <div class="umar-l"><span class="c-important">{{count}}</span>人次</div> '+      
        '      </div> '+  
        '    </div> '+
        '  </div>';

	// set Render
	this.setRender(this._template);

	
	// 数据格式转换
	this.transfer = function(data){
		if (data) {
			// 日期格式
			data.createTime = getFormatDateByLong(data.createTime, "yyyy-MM-dd hh:mm:ss.S");
		}
		
		return data;
	}
	
	
	// 测试数据
	this.getTestData = function(){
		var response = '{}';

		return JSON.parse(response);
	}
}
