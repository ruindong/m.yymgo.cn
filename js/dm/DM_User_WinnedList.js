// 用户的中奖记录
var DM_User_WinnedList = function(){
    MessageMachine.call(this);

    // url
    this.url = url_host+"/user/records/wined.json";

    // template
    this._template= 
        '<div class="uinn bc-white umar-b tab1"> '+    
        '    <div class="ub ub-fh" ontouchstart="dfh_touch()" onclick="openTradeInfo({{tradeno}})"> '+
        '        <div class="ub-img1 img-cover" style="background-image:url({{coverImgUrl}})"></div> '+
        '        <div class="umar-l ub-f1"> '+
        '            <p class="txt14">{{commoName}}</p> '+
        '            <p class="txt12 umar-t"><span>参与期号：</span><span>{{tradeno}}</span></p> '+
        '            <p class="txt12"><span>幸运号码：</span><span>{{targetCode}}</span></p> '+
        '            <p class="txt12"><span>本期参与：</span><span>{{winCount}}人次</span></p> '+
        '            <p class="txt12"><span>揭晓时间：</span><span>{{closeTime}}</span></p> '+
        '        </div> '+
        '    </div> '+
        '</div>';

    // set Render
    this.setRender(this._template);

    
    // 数据格式转换
    this.transfer = function(data){
        // 日期格式
        data.closeTime = getSmpFormatDateByLong(data.closeTime);        
        return data;
    }
    
    
    // 测试数据
    this.getTestData = function(){
        var response = '{}';

        return JSON.parse(response);
    }
}
