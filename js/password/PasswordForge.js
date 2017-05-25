/**
 * 仿微信支付密码, Written by CFei, 2016/10/08
 */
var PasswordForge = function()
{
    // 密码
    this.check_pass_word='';

    // 指针
    this.index = 0;

    // 回调函数
    this.cbFunc;

    // 密码输入panel的html
    this.htmlPassword = '\
    <div id="mask" class="mask" style="display: none;"></div>\
    <div id="password_panel">\
        <div style="text-align:center; padding-top:0.1rem;"><span id="_text" style="font-size: 0.16rem;">{title}</span></div>\
        <div>{dynamicHtml}</div>\
        <div id="passwords" class="umar-ts ub ub-pc">\
            <div class="pass"></div><input value="" type="hidden"/>\
            <div class="pass"></div><input value="" type="hidden"/>\
            <div class="pass"></div><input value="" type="hidden"/>\
            <div class="pass"></div><input value="" type="hidden"/>\
            <div class="pass"></div><input value="" type="hidden"/>\
            <div class="pass pass_right"></div><input value="" type="hidden"/>\
        </div>\
        <div style="font-size: 0.12rem; text-align:center; margin-top:0.1rem; color:#fe0000;">{message}</div>\
    </div>\
    ';

    // 键盘
    this.htmlKeyboard = '\
    <div id="key" style="position:fixed;background-color:#A8A8A8;width:99.5%;bottom:0;z-index:10001">\
        <ul id="keyboard" style="font-size:0.3rem; margin:0.1rem 0.05rem">\
            <li class="symbol"><span class="off">1</span></li>\
            <li class="symbol"><span class="off">2</span></li>\
            <li class="symbol btn_number_"><span class="off">3</span></li>\
            <li class="tab"><span class="off">4</span></li>\
            <li class="symbol"><span class="off">5</span></li>\
            <li class="symbol btn_number_"><span class="off">6</span></li>\
            <li class="tab"><span class="off">7</span></li>\
            <li class="symbol"><span class="off">8</span></li>\
            <li class="symbol btn_number_"><span class="off">9</span></li>\
            <li class="delete lastitem button">←退格</li>\
            <li class="symbol"><span class="off">0</span></li>\
            <li class="cancle btn_number_ button">取消</li>\
        </ul>\
    </div>\
    ';
}

//-------------------------------------------------
// 供内部使用的方法
//-------------------------------------------------
// 弹框代码
PasswordForge.prototype.inputPassword = function(cbFunc, title, message, dynamicHtml)
{
    this.cbFunc = cbFunc;

    this.showPasswordPanel(title, message, dynamicHtml);
    this.showKeyboardPanel();
}

// 密码输入面板
PasswordForge.prototype.showPasswordPanel = function(title, message, dynamicHtml)
{
    if(!title)
    {
        title = "";
    }    
    if(!message)
    {
        message = "";
    }
    if(!dynamicHtml)
    {
        dynamicHtml = "";
    }

    var html = this.htmlPassword.replace("{title}", title);
    html = html.replace("{message}", message);
    html = html.replace("{dynamicHtml}", dynamicHtml);  // 自定义html

    $("body").append(html);    
    $("#mask").addClass("mask").fadeIn("slow");
    $("#password_panel").show();

    //$("input.pass").attr("disabled", true);
    //$("#passwords").attr("disabled", true);
}

// 键盘面板
PasswordForge.prototype.showKeyboardPanel = function()
{
    $("body").append(this.htmlKeyboard);

    $("#keyboard li").bind("click", {"self": this}, this.myClickHandler);
    $("#keyboard li").bind("touchstart", {"self": this}, this.myClickHandler);    

    // touchstart处理
    $('#keyboard li').on('touchstart',function(e) {
        // 禁止click事件执行
        $(this).unbind("click");
        // 禁止冒泡
        e.stopPropagation();
        // 样式设置
        $(this).addClass("ontouch");
    });
    $('#keyboard li').on('touchend',function(e) {  
        $(this).removeClass("ontouch");
    });      
}

PasswordForge.prototype.myClickHandler = function(parms)
{
    // 类对象自身
    var self = parms.data.self;

    if ($(this).hasClass('delete'))
    {
        if(self.index == 0)
        {
            return;
        }

        $("#passwords input").eq(--self.index).val('').prev(".pass").html("");
    }
    else if ($(this).hasClass('cancle')) 
    {
        // 延迟关闭，由于ontouchstart太快了，可能会触发下一层的按钮
        window.setTimeout(function(){
            self.cancel();
        }, 500);
    }
    else if ($(this).hasClass('symbol') || $(this).hasClass('tab'))
    {
        var character = $(this).text();
        $("#passwords input").eq(self.index++).val(character).prev(".pass").html("●");
        
        if(self.index == 6)
        {
            self.index = 0;
            var temp_rePass_word = '';
            for (var i = 0; i < 6; i++) 
            {
                temp_rePass_word += $("#passwords input").eq(i).val();
            }
            
            self.check_pass_word = temp_rePass_word;

            // 延迟结束，最后一个密码的展示事件要能显示出来
            window.setTimeout(function(){
                self.fireComplete();
            }, 500);
        }
    }    
}

// 输入完毕
PasswordForge.prototype.fireComplete = function()
{
    // 这里关闭了，如果希望在主调方法中关闭，可以注释掉该行
    this.cancel();

    // 交给回调函数处理
    if(this.cbFunc)
    {
        this.cbFunc(this.check_pass_word);
    }
}

// 取消
PasswordForge.prototype.cancel = function()
{
    this.index = 0;
    //$("#mask").addClass("mask").fadeOut("slow");
    $("#mask").remove();
    $("#password_panel").remove();
    $("#key").remove();
}

// Singleton
var _simulator;
PasswordForge.getInstance=function()
{
    if(!_simulator)
    {
        _simulator = new PasswordForge();
    }
    return _simulator;
}


//-------------------------------------------------
// 供外部调用的2个静态方法
//-------------------------------------------------
// **** 校验密码
PasswordForge.verifyPassword = function(cbFunc, message)
{
    var pwdForge = PasswordForge.getInstance();
    pwdForge.inputPassword(cbFunc, "请输入支付密码", message);
}

// **** 设置密码
var _cbFuncSetPassword;
PasswordForge.setPassword=function(cbFunc, message)
{
    _cbFuncSetPassword = cbFunc;  // 回调函数最后一步才用

    var pwdForge = PasswordForge.getInstance();      
    pwdForge.inputPassword(PasswordForge.cbPwd1, "请输入支付密码", message);
}

/**以下为setpassword服务*/
var _pwd1;
PasswordForge.cbPwd1=function(password)
{
    _pwd1 = password;
    
    var pwdForge = PasswordForge.getInstance();       
    pwdForge.inputPassword(PasswordForge.cbPwd2, "请再次输入支付密码");
}
PasswordForge.cbPwd2=function(password)
{
    var _pwd2 = password;
    if(_pwd2 != _pwd1)
    {
        // try again
        PasswordForge.setPassword(_cbFuncSetPassword, "两次输入密码不一致！");
    }
    else
    {
        if(_cbFuncSetPassword)
        {
            _cbFuncSetPassword(password);
        }
    }
}