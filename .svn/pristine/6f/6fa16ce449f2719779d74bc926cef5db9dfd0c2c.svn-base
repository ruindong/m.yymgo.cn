// 我的充值记录
var DM_MyEcouponRecords = function(){
	MessageMachine.call(this);

	// url
	this.url = url_host+"/my/recharge.json";

	// template
    this._template= 
        '            <li class="wei cur bd-b"> '+
        '                  <span></span> '+
        '                  <h2 class="title">{{payType}}</h2> '+
        '                  <p>{{createTime}}</p> '+
        '                  <div class="wei_img">+￥{{amount}}</div> '+
        '            </li> ';

	// set Render
	this.setRender(this._template);

	
	// 数据格式转换
	this.transfer = function(data){
		if (data) {
            if(data.createTime)
            {
                data.createTime = getSmpFormatDateByLong(data.createTime);

                if(data.payType == "weixin")
                {
                	data.payType == "微信";
                }
                else if(data.payType == "alipay")
                {
                	data.payType == "支付宝";
                }
                else
                {
                	data.payType == "其他支付方式";
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
