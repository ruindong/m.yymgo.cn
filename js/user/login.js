var mobile;
var code;

function validate()
{
    mobile = $("#PhoneNum").val();
    code = $("#Code").val();

    if (!validatePhoneNum(mobile)) {
        $toast("请输入正确的手机号");
        return false;
    }

    if (code == "") {
        $toast("请输入验证码");
        return false;
    }

    return true;
}

// 手机号码登录
function signIn() 
{
    if(!validate())
    {
        return;
    }

    var msgPost = new Post_SignIn();
    
    var params = {
        "mobile": mobile,
        "code": code
    };

    // 渠道标识
    var channelId = getChannelId();
    if(channelId){params.channelId = channelId;}

     // 推荐人标识
    var referee = getReferee();  
    if(referee){params.referee = referee;}     
    
    DataCenter.post(msgPost, params, cbSignIn);
}

// 手机号码登录回调函数
function cbSignIn(result, machine)
{
    if (result) 
    {
        if (result.code == 0) {
            var signInfo = result.data;

            // 本地存储登录账号
            var storage = window.localStorage;
            saveLocalAccount(signInfo);
            storage.setItem("moblie",mobile);

            // backurl的处理
            var backurl = getBackUrl();
            removeBackUrl();
            location.replace(backurl);          
        }
        else
        {
            $toast(result.message);
        }
    }
}

// 发送验证码
function sendIt()
{
    var mobile = $("#PhoneNum").val();
    sendCode(mobile, "send_btn");
}