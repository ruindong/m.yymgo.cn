// 倒计时控件，需依赖jquery.min.js
$.fn.extend({
    fnTimeCountDown:function(serverTime, d, cbTimeOver){
        if(!d)
        {
            return;
        }

        // 截止时间
        // 注：修正d格式，手机上不认识此格式：******
        d = d.replace(RegExp("-","gm"), "/");
        var endTime = new Date(d).getTime();

        this._fnTimeCountDown(serverTime, endTime, cbTimeOver);              
    },

    // 当前时间开始倒计时, conSeconds为持续时间
    fnTimeCountDownFromNow:function(conSeconds, cbTimeOver){
        var dt = new Date();
        var serverTime = dt.getTime();
        var endTime = serverTime + conSeconds * 1000;

        this._fnTimeCountDown(serverTime, endTime, cbTimeOver);
    },

    _fnTimeCountDown:function(serverTime, endTime, cbTimeOver){   
        // 本地时间与服务器时间差
        var gap = 0;        
        if(serverTime)
        {
            // 服务器时间与本地时间差
            var now = new Date();
            var localTime = now.getTime();

            gap = serverTime - localTime;
        } 

        this.each(function(){
        	var timeOut;
            var $this = $(this);
            var o = {
                ms: $this.find(".ms"),
                sec: $this.find(".sec"),
                min: $this.find(".min"),
                hour: $this.find(".hour")               
            };
            var f = {
            	// 取几位数字，最多取3位
                zero: function(number, digit){
                	// 缺省取2位
                	if(digit == null)
                	{
                		digit = 2;
                	}

                	if(number < 0)
                	{
                		number = 0;
                	}

                	number = Math.floor(number);

                	var _n = "000" + number;
                	_n = _n.substr(_n.length - digit, digit);

                	return _n;
                },
                dv: function(){
                    var now = new Date();
                    var nowTime = now.getTime() + gap;

                    var dur = (endTime - nowTime) / 1000;
                    var mss = endTime - nowTime;
                    var pms = {
                        ms: "000",
                        sec: "00",
                        min: "00",
                        hour: "00"
                    };

                    if(mss > 0){
                        pms.ms = f.zero(mss % 1000, 3);
                        pms.sec = f.zero(dur % 60);
                        pms.min = f.zero((dur / 60) % 60);
                        pms.hour = f.zero((dur / 3600) % 100);  // 这里是特殊处理，0-99小时，常规用0-23小时
                    }else{
                        pms.year=pms.month=pms.day=pms.hour=pms.min=pms.sec="--";
                        pms.ms = "-";

                        // 结束了，停止定时器
                        clearInterval(timeOut);                   

                        // 如果有回调函数
                        if(cbTimeOver)
                        {
                            cbTimeOver($this.attr("id"));
                        }
                    }
                    return pms;
                },
                ui: function(){
                    var fdv = f.dv();
                    if(o.ms){
                        o.ms.html(fdv.ms);
                    }
                    if(o.sec){
                        o.sec.html(fdv.sec);
                    }
                    if(o.min){
                        o.min.html(fdv.min);
                    }
                    if(o.hour){
                        o.hour.html(fdv.hour);
                    }                    
                }
            };
            timeOut = setInterval(f.ui, 49); // 49ms，不用整数，数字有跳动感；太小则跳动过快
        });
    }
});
