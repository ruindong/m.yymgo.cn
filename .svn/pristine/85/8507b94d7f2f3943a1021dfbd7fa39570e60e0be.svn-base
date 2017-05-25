// 用户的晒单记录
var DM_User_ShareList = function(){
    MessageMachine.call(this);

    // url
    this.url = url_host+"/user/records/share.json";

    // template
    this._template= 
        '<div class="uinn bc-white umar-t tab1"> '+    
        '  <div class="ub ub-fh ub-as" ontouchstart="dfh_touch()" onclick="openShareInfo({{id}});"> '+
        '    <div class="ub-img1 img-head" style="background-image:url({{user.headImg}})"></div> '+
        '    <div class="ub-f1 umar-l"> '+
        '      <div class="ub ub-fh"> '+
        '         <div class="c-link ub-f1">{{user.nickName}}</div> '+
        '         <div class="c-gray">{{createTime}}</div> '+
        '      </div>'+
        '      <div class="umar-t c-important">获奖商品：{{commName}}</div> '+
        '      <div>{{shareText}}</div> '+
        '      <div class="ub umar-t"> '+
        '         {{if ImgUrls && ImgUrls.length>0}}'+
        '           {{each ImgUrls as img i }} '+
        '              <div class="ub-img1 img-cover umar-t umar-r" style="background-image:url({{img}})"></div> '+
        '           {{/each}} '+
        '         {{/if}}'+   
        '      </div> '+
        '    </div> '+
        '  </div>'+
        '</div>';

    // set Render
    this.setRender(this._template);

    
    // 数据格式转换
    this.transfer = function(data){
        // 图片分解
        if (data.imgUrls) {
            var aryImgUrls = data.imgUrls.split(",");
            if (aryImgUrls && aryImgUrls.length > 0) {
                data.ImgUrls = aryImgUrls;
            }
        }        

        // 日期格式
        data.createTime = getSmpFormatDateByLong(data.createTime);          
        return data;
    }
    
    
    // 测试数据
    this.getTestData = function(){
        var response = '{}';

        return JSON.parse(response);
    }
}
