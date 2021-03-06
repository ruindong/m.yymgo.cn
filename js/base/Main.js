// *******************************************************
// *  
// * 所有页面必须加载Main.js
// *   包含全局变量和函数
// *
// *******************************************************

// 全局变量
// 生产环境
//var url_weixin_signin = "http://api.yymgo.cn/wechat/code/accredit";
//var url_host = "http://api.yymgo.cn/";
//var url_card = "http://card.dfhon.cn/";
//var url_dfhapi = "http://api.dfhon.cn/";

// 测试环境
var url_weixin_signin = "http://api2.yymgo.cn/wechat/code/accredit";
var url_host = "http://api2.yymgo.cn/";
var url_card = "http://card2.dfhon.cn/";
var url_dfhapi = "http://api3.dfhon.cn/";
//var url_weixin_signin = "http://121.41.106.239:8080/wechat/code/accredit";
//var url_host = "http://121.41.106.239:8080/";

var ua = navigator.userAgent;
var isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1; //android终端
var isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
var isWeixin = ua.toLowerCase().match(/MicroMessenger/i)=="micromessenger"; // 是否微信

// 屏幕宽度自适应
$(function () {
    adapteClientWidth();
});
var iGetClientWidth = 0;
var deviceWidth = 0; // 屏幕宽度
function adapteClientWidth()
{
    deviceWidth = document.documentElement.clientWidth;

    // 没取到则循环，同时会锁定onload延迟加载，某些机型安卓内嵌版本有这个鸟问题
    if(deviceWidth == 0 && iGetClientWidth++ <= 10)
    {
        setTimeout(adapteClientWidth, 50);
    }
    else
    {
        //$toast(iGetClientWidth + "次取到值：" + deviceWidth);
        // 如果还是没取到，则设置一个缺省值
        if(deviceWidth == 0)
        {
            deviceWidth = 360;
        }
        if(deviceWidth <= 1200)
        {
            document.documentElement.style.fontSize = (deviceWidth / 3.75) + 'px';            
        }
        else
        {
            document.documentElement.style.fontSize = (deviceWidth / 3.75 /4) + "px";
        }
    }
}

// ************Part 1. 东方虹APP专属代码 BEGIN****************
var _IOS_LOCKED = false; // IOS获取Account数据锁
initDfhonApp();
function initDfhonApp()
{
    // 东方虹APP标识
    var app_terminal = getQueryString("app_terminal");
    if(app_terminal)
    {
        // 保存标识，该页面跳转过去的其他页面登录判断要用到，仅仅是入口页面需要判断
        saveAppTerminal(app_terminal);
    }

    // 读取account并存储，后续跳转页面无法直接读取app_termainal，通过sotrage中的数据判断
    saveAccountFromApp();
}

// 从APP获取东方虹账号
function saveAccountFromApp()
{
    var dfhMark = getAppTerminal();
    if(dfhMark == "apple")
    {
        _IOS_LOCKED = true;
        setupWebViewJavascriptBridge(function(bridge) {
            // 异步获取Account，大约有100+ms的延时
            bridge.callHandler('app_verifytoken', {}, function(response) {
                saveDFHAccount(response);
                _IOS_LOCKED = false;
            });
        })
    }
    else if(dfhMark == "android")
    {
        try
        {
            var response = control.app_verifytoken();
            saveDFHAccount(response);
        }
        catch(err)
        {
        }
    }
}

// 东方虹APP账号格式存储到本地缓存
function saveDFHAccount(strAccount)
{
	// 如果是空串，则清除，这样能与APP保持一致
    if((strAccount == "") || (strAccount == "{}"))
    {
        removeUserId();
    }

    try
    {
        var dfhAccount = JSON.parse(strAccount);
        if(dfhAccount.UserId)
        {
            // 格式转换
            var userInfo = new Object();
            userInfo.userId = dfhAccount.UserId;
            userInfo.token = dfhAccount.Token;
            userInfo.expiresTime = dfhAccount.ExpiresTime;

            saveLocalAccount(userInfo);
        }
        else
        {
        	removeUserId();  // 返回数据为空
        }
    }
    catch(err)
    {
    	removeUserId();
    }
}

// 东方虹APP标识存储到缓存中，非本页面登录时需要用到
function saveAppTerminal(appTerminal)
{
    if(appTerminal)
    {
        var storage = window.localStorage;
        setItem(storage, "app_terminal", appTerminal);    
    }
}
function getAppTerminal()
{
    var storage = window.localStorage;
    return storage.getItem("app_terminal");    
}

// 跳转到APP原生页面
// 1、往期揭晓--入口点击详情应该跳转原生详情 control.jumpTradeDetail(String tradeNo)
// 2、个人主页美购记录和中奖记录跳转原生详情 control.jumpTradeDetail(String tradeNo)
// 3、个人主页晒单记录跳转原生详情 control.jumpShareDetail(String shareId)  
// 美购详情
function lanchTradeInfo(tradeNo)
{
    url = "/index/trade_info.html?tradeno=" + tradeNo;

    var dfhMark = getAppTerminal();
    if(dfhMark == "apple")
    {
        try
        {
            setupWebViewJavascriptBridge(function(bridge) {
                bridge.callHandler('jumpTradeDetail', {"tradeNo": tradeNo}, function(response) {
                });
            });          
        }
        catch(err)
        {
            openWindow(url);
        }
    }
    else if(dfhMark == "android")
    {
        try
        {
            control.jumpTradeDetail(tradeNo + "");     
        }
        catch(err)
        {
            openWindow(url);
        } 
    }
    else
    {
        openWindow(url);
    }
}
// 晒单详情
function lanchShareInfo(shareId)
{
    var url = "/index/sdxq.html?shareId=" + shareId;

    var dfhMark = getAppTerminal();
    if(dfhMark == "apple")
    { 
        try
        {
            setupWebViewJavascriptBridge(function(bridge) {
                bridge.callHandler('jumpShareDetail', {"shareId": shareId}, function(response) {
                });
            })             
        }
        catch(err)
        {
            openWindow(url); 
        }
    }        
    else if(dfhMark == "android")
    {
        try
        {
            control.jumpShareDetail(shareId);               
        }
        catch(err)
        {
            openWindow(url); 
        }
    }
    else
    {
        openWindow(url);         
    }
}

//----------------------------------------
// IOS相关
// 固定方法，用于H5与IOS通信
function setupWebViewJavascriptBridge(callback) {
    if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge); }
    if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
    window.WVJBCallbacks = [callback];
    var WVJBIframe = document.createElement('iframe');
    WVJBIframe.style.display = 'none';
    WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
}
// ************东方虹APP专属代码 END****************

// ************Part 2. 拦截器 BEGIN***************
// 1) 判断是否需要登录
// 2) 东方虹APP IOS内嵌版延时加载
var AOP = {  
    before: function(name)
    {
        var orign;
        try
        {
            orign = eval(name);
        }
        catch(err)
        {
            return;
        }
        
        if(typeof orign != 'function') 
        {
            return;
        }

        var thisObj = this;

        var i = 0;
        var func = function () {
            // 屏幕宽度没取到，安卓有这毛病
            if(deviceWidth == 0)
            {
                setTimeout(function(){eval(name).apply(thisObj, arguments);}, 100);
            }
            // 等待IOS获取account数据返回
            else if(_IOS_LOCKED && i++ <= 10)
            {
                setTimeout(function(){eval(name).apply(thisObj, arguments);}, 100);
            }
            else
            {
                // 如果需要登录
                if(needSignIn() && !isSignIn())
                {
                    saveBackUrl(window.location.href);

                    // 用这个方法，会有提示框
                    getUserId();
                }
                else
                {
                    return orign.apply(thisObj, arguments);                    
                }
            }
        }

        eval(name + " = func;");  // 劫持
    }
};
$(function () {
    AOP.before("load");  // 监控页面中的load()方法
});
// ************拦截器 END***************

// *********Part 3. 本地存储 BEGIN**************
// 存储变量，有封装提示
function setItem(storage, key, value)
{
    if(storage == null)
    {
        return false;
    }

    try
    {
        storage.setItem(key, value);
        return true;
    }
    catch(err)
    {
        openWindow("/err/no_cache.html");
    }

    return false;
}

// 存储登录账号
function saveLocalAccount(userInfo)
{
    var storage = window.localStorage;
    if(setItem(storage, "userId", userInfo.userId))
    {
        setItem(storage, "token", userInfo.token);
        setItem(storage, "expiresTime", userInfo.expiresTime);        
    }
}

// 获取用户ID
function getUserId()
{
    try{
        var storage = window.localStorage;
        var userId = storage.getItem("userId");
        var token = storage.getItem("token");
        var now = new Date(); // 当前
        if(!userId || !token || (token < now.getTime()))
        {
            if(!userId)
            {
                $toastMask("请先登录！");                
            }
            else
            {
                $toastMask("身份信息过期，请重新登录！");
            }
            window.setTimeout(function(){
                // 登录
                login();
            }, 1500);
        }
        return userId;
    }
    catch(err)
    {
        return null;
    }
}

// 获取token
function getToken()
{
    try
    {
        var storage = window.localStorage;
        return storage.getItem("token");    
    }
    catch(err)
    {
        return null;
    }
}
function removeUserId()
{
    try
    {
        var storage = window.localStorage;
        storage.removeItem("token");
        storage.removeItem("userId");    
        storage.removeItem("expiresTime");
    }
    catch(err)
    {
    }
}

function saveMobile(mobile)
{
    if(mobile)
    {
        var storage = window.localStorage;        
        setItem(storage, "mobile", mobile)
    }
    else
    {
        removeMobile();
    }
}

function removeMobile()
{
    try
    {
        var storage = window.localStorage;
        storage.removeItem("mobile");            
    }
    catch(err)
    {
    }
}


// 获取Mobile
function getMobile()
{
    try
    {
        var storage = window.localStorage;
        return storage.getItem("mobile");    
    }
    catch(err)
    {
        return null;
    }
}

// 支付订单对象
function saveOrderInfo(orderInfo)
{
    var storage = window.localStorage;
    var str = JSON.stringify(orderInfo);
    setItem(storage, "OrderInfo", str);
}

function getOrderInfo()
{
    var storage = window.localStorage;
    var str = storage.getItem("OrderInfo");
    return JSON.parse(str);
}
function clearOrderInfo()
{
    var storage = window.localStorage;
    storage.removeItem("OrderInfo");
}

// 登录backurl
function saveBackUrl(backurl)
{
    var storage = window.localStorage;
    setItem(storage, "BackUrl", backurl);
}
function getBackUrl()
{
    var storage = window.localStorage;
    var backUrl = storage.getItem("BackUrl");
    if(!backUrl)
    {
        backUrl = "/index.html";
    }

    return backUrl;
}
function removeBackUrl()
{
    var storage = window.localStorage;
    storage.removeItem("BackUrl");
}

// 支付url
function savePayUrl(payUrl)
{
    var storage = window.localStorage;
    setItem(storage, "PayUrl", payUrl);    
}
function getPayUrl()
{
    var storage = window.localStorage;
    return storage.getItem("PayUrl");    
}
function removePayUrl()
{
    var storage = window.localStorage;
    storage.removeItem("PayUrl");    
}

// 首页底部广告条
function openIndexAdBannerStatus()
{
    var storage = window.localStorage;
    setItem(storage, "IndexAdBannerStatus", "ON");     
}
function closeIndexAdBannerStatus()
{
    var storage = window.localStorage;
    setItem(storage, "IndexAdBannerStatus", "OFF");        
}
function getIndexAdBannerStatus()
{
    var storage = window.localStorage;
    return storage.getItem("IndexAdBannerStatus");        
}


// 保存数据有过期时间的：以天为单位
function saveDataWithExpires(key, value, expiresDay)
{
    var storage = window.localStorage;
    var obj = {
        "value": value,
        "expiresTime": new Date().getTime() + 24 * 3600 * 1000 * expiresDay
    };

    var str = JSON.stringify(obj); 

    var storage = window.localStorage;
    setItem(storage, key, str);
}
function getDataWithExpires(key)
{
    try
    {
        var storage = window.localStorage;
        var str = storage.getItem(key);
        if(str)
        {
            var obj = JSON.parse(str);
            var expiresTime = obj.expiresTime;
            var dt = new Date().getTime();
            if(dt <= expiresTime)
            {
                return obj.value;
            }
        }
    }
    catch(err)
    {
    }

    return null;
}

// 渠道标识
function saveChannelId(channelId)
{
    saveDataWithExpires("channelId", channelId, 14);
}
function getChannelId()
{
    return getDataWithExpires("channelId");
}

// 推荐人标识
function saveReferee(referee)
{
    saveDataWithExpires("referee", referee, 14);
}
function getReferee()
{
    return getDataWithExpires("referee");
}

// 读取渠道标识
function recordChannelId()
{
    var channelId = getQueryString("src");
    if(channelId)
    {
        // 已经登记过了，就不用理会了，只记录该设备第一次的渠道来源
        if(!getChannelId())
        {
            saveChannelId(channelId);
        }
    }
}

// 读取推荐人标识
function recordReferee()
{
    var referee = getQueryString("referee");
    if(referee)
    {
        // 已经登记过了，就不用理会了，只记录该设备第一个推荐人
        if(!getReferee())
        {
            saveReferee(referee);
        }
    }
}
// ************本地存储 END**************

// *********Part 4. 登录相关 BEGIN**************
// 当前页面是否需要登录
function needSignIn()
{
    // 页面过滤
    var pages = [
      '/my/'
    ];

    // 当前页面
    var curPage = window.location.href;

    // 去掉http://xxx.com开头
    var pstr = ".*://.*?(/.*)";
    var patt1 = new RegExp(pstr);
    var ary = patt1.exec(curPage);
    if(ary && ary.length == 2)
    {
        curPage = ary[1];
    }

    var bRet = false;
    if(pages && pages.length > 0)
    {
        for(var i = 0; i < pages.length; i++)
        {
            if(curPage.indexOf(pages[i]) == 0)
            {
                bRet = true;
                break;
            }
        }
    }

    return bRet;
}

// 是否登录
function isSignIn()
{
    try{
        var storage = window.localStorage;
        var userId = storage.getItem("userId");    
        var token = storage.getItem("token");
        var now = new Date(); // 当前时间

        if(!userId || !token || (token < now.getTime()))
        {
            return false;
        }        
        else
        {
            return true;
        }
    }
    catch(err)
    {
        return false;
    }    
}

// 登录
function login()
{
    var dfhMark = getAppTerminal();
    // 东方虹安卓
    if(dfhMark == "android")
    {
        alert("进入安卓登录")
        try
        {
            control.signIn();
        }
        catch(err)
        {
            $toast(err + "请关闭该页面，登录后再试！");
        }
    }
    // 东方虹IOS
    else if(dfhMark == "apple")
    {
        try
        {
            setupWebViewJavascriptBridge(function(bridge) {            
                // 登录
                bridge.callHandler('app_signin', {}, function(response) {
                });
            })
        }
        catch(err)
        {
            $toast("请关闭该页面，登录后再试！");
        }
    }
    // 其他
    else
    {
        var backUrl = window.location.href;
        saveBackUrl(backUrl);

        // 用replace藏匿当前页面，防止用户不登录回退，死循环
        if(isWeixin)
        {
            location.replace(url_weixin_signin);
        }
        else
        {
            gotoLogin();
        }
    }
}
// 跳转到登录页
function gotoLogin()
{
    // 当前页面
    var curPage = window.location.href;

    // 去掉http://xxx.com开头
    var pstr = ".*://.*?(/.*)";
    var patt1 = new RegExp(pstr);
    var ary = patt1.exec(curPage);
    if(ary && ary.length == 2)
    {
        curPage = ary[1];
    }

    // 首页不用replace
    if((curPage == "/") || (curPage.indexOf("/?") == 0) || (curPage.indexOf("/index.html") == 0))
    {
        location.href = "/login/dl.html";
    }
    else
    {
        location.replace("/login/dl.html");
    }
}
// ************登录相关 END**************


//----------------------------------Others----------------------------------------
function $$(id) {
    return !id ? null : document.getElementById(id);
}

function $toast(s,t){
    if(s == null)
    {
        return;
    }
    if(t == null || t < 2500)
    {
        t = 2500;
    }

    var html = 
    '<div id="DFH_toast" class="needFadeIn ub ub-fh ub-pc" style="left:0;bottom:1rem;position:absolute;z-index:50;width:3.75rem">'+
    '  <div style="background:#43C6DB;padding:0.1rem 0.3rem;margin:0.1rem;border-radius:.08rem;font-size:0.12rem;color:#fff;text-align:center;line-height:146%;">'+ s + '</div>'+
    '</div>';    

    $("body").append(html);    
    setTimeout(function(){
        $("#DFH_toast").remove();
    },t);
}
// 带遮罩的，仅用于登录判断
function $toastMask(s,t){
    if(s == null)
    {
        return;
    }
    if(t == null || t < 2500)
    {
        t = 2500;
    }

    var html=
    ' <div id="mask" class="mask" style="display: none;"></div> '+
    ' <div id="DFH_toast_MASK" class="needFadeIn"> '+
    '     <div class="uinn ub bd-b ub-ac">'+
    '        <div class="ub-img img-cover" style="background-image:url(/image/tips2.gif)"></div>'+
    '        <div class="ub-f1 umar-l">{Title}</div>'+
    '     </div>'+
    '     <div class="uinn c-center c-gray f-small">即将自动前往...</div>'+
    ' </div>';

    html = html.replace('{Title}', s);
    $("body").append(html);
    $("#mask").addClass("mask").fadeIn("slow");
    $("#DFH_toast_MASK").show();

    setTimeout(function(){
        $("#mask").hide();        
        $("#DFH_toast_MASK").hide();
    },t);      
}

// 获取页面请求参数
function getQueryString(name) { 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) return decodeURI(r[2]); return null; 
}

// 打开窗口
function openWindow(url)
{
    location.href = encodeURI(encodeURI(url));    
}

// 查看用户个人主页
function openUserspace(userId)
{
    if(!userId)
    {
        return;
    }

    if(isSignIn())
    {
        var myself = getUserId();
        if(myself == userId)
        {
            return;
        }
    }

    openWindow("/index/user_space.html?userId=" + userId);
}

// 手机号码校验
function validatePhoneNum(PhoneNum) {
    var reg = /^((13)|(14)|(15)|(17)|(18))\d{9}$/;
    return reg.test(PhoneNum);
}


// 仅仅针对部分页面，回退时需要强制刷新的处理，不同浏览器的处理方法不一样
function goBackRefresh(cbRefresh)
{
    if(!(typeof(cbRefresh) === "function"))
    {
        return;
    }

    var browser = userBrowser();
    // 通过onpageshow，不触发onload，但会触发onpageshow
    if((browser == "Safari") || (browser == "UC"))
    {
        window.onpageshow = cbRefresh;
    }
    // 通过visibilitychange，不触发onload，又不触发onpageshow的 -- QQ某些浏览器会触发onload
    else if(browser == "QQ" || browser == "Miui")
    {
        if (typeof document.hidden !== "undefined") 
        {
            document.addEventListener("visibilitychange", function(){vStateChanged(cbRefresh);}); 
        } 
        else if (typeof document.msHidden !== "undefined") 
        { 
            document.addEventListener("msvisibilitychange", function(){vStateChanged(cbRefresh);}); 
        } 
        else if (typeof document.webkitHidden !== "undefined") 
        { 
            document.addEventListener("webkitvisibilitychange", function(){vStateChanged(cbRefresh);});  
        }
        else
        {
            // ...
        }
    }
    // 其他大多数浏览器，回退会自动触发onload
}

// 胡汉三又回来了？
function vStateChanged(cbRefresh)
{              
     if(document.hidden || document.webkitHidden || document.msHidden){    
        //new tab or window minimized  
     }    
     else {
        cbRefresh(); 
     }
}

// 返回上一页
function goBack()
{
    var browser = userBrowser();
    // 华为手机腾讯浏览器，这般处理以后，再回退就会自动刷新了。。。
    if(browser == "QQ")
    {
        var stateObj = { from: "history" };
        var url = document.referrer;  // 简单处理
        if(!url)
        {
            url = "/index.html";
        }

        history.replaceState(stateObj, "", url);          
    }

    history.back();
}

// 浏览器识别，真没法识别。。。
function userBrowser(){
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串

    if ((userAgent.indexOf("Opera") > -1) || (userAgent.indexOf("OPR") > -1)) {
        return "Opera"
    } //Opera浏览器  
    else if ((userAgent.indexOf("QQBrowser") > -1) || (userAgent.indexOf("TencentTraveler") > -1)) {
        return "QQ";
    } //腾讯或QQ浏览器
    else if (userAgent.indexOf("MiuiBrowser") > -1) {
        return "Miui";
    } //小米浏览器
    else if (userAgent.indexOf("UCBrowser") > -1) {
        return "UC";
    } //UC浏览器           
    else if (userAgent.indexOf("MicroMessenger") > -1) {
        return "WX";
    } //微信内置浏览器      
    else if (userAgent.indexOf("Firefox") > -1) {
        return "FF";
    } //Firefox浏览器
    else if (userAgent.indexOf("Chrome") > -1){
        return "Chrome";
    }
    else if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    } //Safari浏览器
    else if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
        return "IE";
    }//IE浏览器
    else{
        return "Unknow";
    }
}

// 阻止冒泡
function stopPropagationEx()
{
    var event = getEvent();
    if(event == null)
    {
        return;
    }

    if(event.stopPropagation)
    {
        event.stopPropagation();
    }
    else
    {
        event.cancelBubble = true;
    }
}
// 获得event，兼容ie和ff
function getEvent() 
{  
    try
    {
        if(document.all)  return window.event;    
        func=getEvent.caller;

        while(func!=null)
        {
            var arg0=func.arguments[0]; 
            if(arg0) 
            { 
              if((arg0.constructor==Event || arg0.constructor ==MouseEvent) || (typeof(arg0)=="object" && arg0.preventDefault && arg0.stopPropagation))
              {
                return arg0; 
              } 
            } 
            func=func.caller; 
        }         
    }
    catch(err)
    {
    }

    return null; 
}