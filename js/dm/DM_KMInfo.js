// 卡密信息
var DM_KMInfo = function(){
	MessageMachine.call(this);

	// url
	this.url = url_host+"/my/wined/";

	// template
    this._template= '\
        <div class="ub ub-fh">\
            <div class="ub-f1">序列号及密码</div>\
            <div id="showIt" class="c-link" ontouchstart="dfh_touch()" onclick="queryKM()">查看</div>\
        </div>\
        <div id="div_km" class="uinn bc-gray bd c-center uhide">\
            {{if key}}\
              <div class="unselect">序列号：</div>\
              <div id="km_key" class="f-big2 ub-f1"><div class="km-inner">{{key}}</div></div>\
              <div class="umar-t unselect">密　码：</div>\
              <div id="km_value" class="f-big2 ub-f1"><div class="km-inner">{{value}}</div></div>\
            {{else}}\
              <div>卡密数据暂未生成，请稍后再试...</div>\
            {{/if}}\
        </div>\
        <div class="umar-t uinn-t c-gray f-small bd-t unselect">\
            <p>提示：获得序列号密码后请尽快使用</p>\
            <p>请不要将卡密截图进行晒单分享，避免被他人使用</p>\
        </div>\
        {{if key}}\
        <div class="umar-t">\
            {{if isExchange == "true"}}\
                {{if isUsed == "true"}}\
                    <div class="c-important">该密码已兑换</div>\
                {{else}}\
                    <div class="btn-red-b" ontouchstart="dfh_touch()" onclick="exchange({{kmtypeId}}, \'{{key}}\', \'{{value}}\', \'{{openId}}\');">立即兑换</div>\
                {{/if}}\
            {{else}}\
                {{if isUsed == "true"}}\
                    <div class="c-important">该密码已使用</div>\
                {{else}}\
                    <div class="btn-red-b" ontouchstart="dfh_touch()" onclick="exchange({{kmtypeId}}, \'{{key}}\', \'{{value}}\', \'{{openId}}\');">使用说明</div>\
                {{/if}}\
            {{/if}}\
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
