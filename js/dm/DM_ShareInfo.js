// 晒单详情：某个商品某一期的晒单详情
var DM_ShareInfo = function(){
	MessageMachine.call(this);

	// url
	this.url = url_host+"/comm/share/";

	// template
    this._template= 
        '   <div class="ub ub-fh" onclick="openUserspace({{tradeDetail.targetUser.id}})"> '+
        '    <div class="ub-img1 img-head" style="background-image:url({{tradeDetail.targetUser.headImg}})"></div> '+
        '    <div class="umar-l ub-f1 c-link">{{tradeDetail.targetUser.nickName}}</div> '+
        '    <div class="umar-l c-gray">{{shareDetail.createTime}}</div> '+
        '   </div> '+
        '   <div class="umar-t uinn bd bc-gray"> '+
        '     <p class="f-big">{{commName}}</p> '+
        '     <p class="umar-t">中奖期号：{{tradeDetail.tradeNo}}</p> '+
        '     <p>本期参与：{{tradeDetail.orderCount}}</p> '+
        '     <p>幸运号码：{{tradeDetail.targetCode}}</p> '+
        '     <p class="qing"> '+
        '       <span class="fl">揭晓时间：{{tradeDetail.closeTime}}</span> '+
        '       <span class="fr lan" onclick="openUserTradeCodes({{tradeDetail.targetUser.id}}, {{tradeDetail.tradeNo}});">参与详情</a></p> '+
        '   </div> '+
        '   <div class="umar-tb c-gray">{{shareDetail.shareText}}</div> '+
        '   <div class="umar-t"> '+
		'         {{if ImgUrls && ImgUrls.length>0}}'+
		'           {{each ImgUrls as img i }} '+
		'              <div><img src="{{img}}" alt=""></div> '+
		'           {{/each}} '+
		'         {{/if}}'+
        '   </div> ';
	// set Render
	this.setRender(this._template);

	
	// 数据格式转换
	this.transfer = function(data){
		if (data) {
			// 日期格式
			data.closeTime = getSmpFormatDateByLong(data.closeTime);
			data.shareDetail.createTime = getSmpFormatDateByLong(data.shareDetail.createTime);			

			// 图片分解
			if (data.shareDetail && data.shareDetail.imgUrls && data.shareDetail.imgUrls != "") {
				var aryImgUrls = data.shareDetail.imgUrls.split(",");
				if (aryImgUrls && aryImgUrls.length > 0) {
				    data.ImgUrls = aryImgUrls;
				}
			}
		}
		
		return data;
	}
	
	
	// 测试数据
	this.getTestData = function(){
		var response = '{}';

		return JSON.parse(response);
	}
}
