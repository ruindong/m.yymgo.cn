
var aop = {  
    before: function(name)
    {  	
        var thisObj = this;
        var orign = eval(name);  
        var func = function () {
            stopPropagationEx();           	
            // 是否登录
            if(!isSignIn())
            {
                saveBackUrl(window.location.href);

                // 用这个方法，会有提示框
                getUserId();
            }
            else
            {
                if(orign)
                {
                    return orign.apply(thisObj, arguments);              
                }
            }
        }
        eval(name + " = func;");
    }  
};

// 添加过滤函数名
$(function () {  
    aop.before("popOrder");
})  