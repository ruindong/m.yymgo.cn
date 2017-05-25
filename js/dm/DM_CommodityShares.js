// 某个商品的晒单记录
var DM_CommodityShares = function(){
	MessageMachine.call(this);

	// url
	this.url = url_host+"/comm/shares/";

	// template
    this._template= 
        '<div class="umar-b uinn bc-white" ontouchstart="dfh_touch()" onclick="openShareInfo({{id}});"> '+
        //'  <div class="ub ub-as"> '+
        //'    <div class="ub-img umwh-2" style="background-image:url({{user.headImg}})"></div> '+
        '    <div class="ub-f1"> '+
        '      <div class="ub ub-fh"> '+
        '          <div class="c-link ub-f1">{{user.nickName}}</div> '+
        '          <div class="c-gray">{{createTime}}</div> '+
        '      </div> '+
        '      <div class="umar-t">{{shareText}}</div> '+
        '      <div class="ub umar-t"> '+
		'         {{if ImgUrls && ImgUrls.length>0}}'+
		'           {{each ImgUrls as img i }} '+
		'              <div class="ub-img1 img-cover umar-t umar-r" style="background-image:url({{img}})"></div> '+
		'           {{/each}} '+
		'         {{/if}}'+   
        '      </div> '+
        '      <div class="umar-t c-gray f-small">{{commName}}</div> '+     
        '    </div> '+
        //'  </div>'+
        '</div>';

	// set Render
	this.setRender(this._template);

	
	// 数据格式转换
	this.transfer = function(data){
		if (data) {
			// 日期格式
			data.createTime = getSmpFormatDateByLong(data.createTime, false);

			// 图片分解
			if (data.imgUrls && data.imgUrls != "") {
				var aryImgUrls = data.imgUrls.split(",");
				if (aryImgUrls && aryImgUrls.length > 0) {
				    data.ImgUrls = aryImgUrls;
				}
			}
		}
		
		return data;
	}
	
	
	// 测试数据
	this.getTestData = function(){
		var response = '{"code":0,"message":"success","version":"1.1","data":'+
		  '[{"tradeNo":13421234,"commodityId":234324324,"coverImgUrl":"/ssssssss","ecoupon":234324324,"totalCount":99,"remainCount":6,"status":"trading","startTime":null,"closeTime":null,"targetUser":null}]'+
	      '}';

		return JSON.parse(response);
	}
}
