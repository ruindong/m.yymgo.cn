// 首页轮播广告
var DM_Index_Slider = function(){
	MessageMachine.call(this);

	// url
	this.url = url_host+"/index/slider.json?site=index";

	// template
    this._template= '\
          <div class="swiper-container bc-white">\
              <div class="swiper-wrapper">\
                  {{each slider as sd i}}\
                      {{if sd.targetType == 1}}\
                          <div class="swiper-slide"><a href="{{sd.targetUrl}}"><img src="{{sd.imgUrl}}" /></a></div>\
                      {{else if sd.targetType == 2}}\
                          <div class="swiper-slide" ontouchstart="dfh_touch()" onclick="openTradeInfo({{sd.targetId}})"><img src="{{sd.imgUrl}}"/></div>\
                      {{/if}}\
                  {{/each}}\
              </div>\
              <div class="swiper-pagination"></div>\
          </div>\
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


