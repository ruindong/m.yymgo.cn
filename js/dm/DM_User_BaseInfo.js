// 用户的基本信息
var DM_User_BaseInfo = function(){
	MessageMachine.call(this);

	// url
	this.url = url_host+"/user/info.json";

	// template
    this._template= 
        '<div class="user"> '+
        '	<img class="user_l" src="{{headImg}}">  '+
        '    <div class="user_r">  '+
        '        <p class="txt14">Hi, <em class="f-big c-link">{{nickName}}</em>恭候多时了</p>  '+
        '        <p class="txt12"><span>ID:</span><span>{{id}}</span></p>  '+
        '    </div>  '+
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
