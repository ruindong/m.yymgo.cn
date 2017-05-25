/** 购买框 */
var _ecoupon;
var _remain;
var _func;
var hasPopWin = false;
var value;

function showPopWin_Order(func, imgUrl, ecoupon, remain)
{
    _ecoupon = ecoupon;
    _remain = remain;
    _func = func;

    value = 1; // 每次进入都要复位

    if(hasPopWin)
    {
      $("#mask").addClass("mask").fadeIn("slow");
      $('#paynow').attr("disabled", false).html("立即支付");  // 使能
      $(".ljcy").show();  

      // 重新设置number为1
      $("#number").val(value);
    }
    else
    {
      hasPopWin = true;

      var html=
      ' <div id="mask" class="mask" style="display: none;"></div> '+
      ' <div class="ljcy" style="display:none;"> '+
      '   <h2>参与次数</h2><span class="gb" ontouchstart="dfh_touch()" onclick="doClose()" ><img src="/image/guanbi.png" alt=""></span> '+
      '   <div class="sp_img" style="position: absolute;top:-0.3rem;left:0.2rem;"><img id="coverImg" alt=""></div> '+
      '   <div id="sel" class="cont f-big2">  '+
      '       <span class="minus uinn" ontouchstart="dfh_touch()" onclick="doMinus()" style="width:0.2rem; padding:0 0.1rem; cursor:pointer;">－</span><input type="number" name="" class="f-big2" id="number" value="1" style="ime-mode:Disabled"/><span class="add uinn" ontouchstart="dfh_touch()" onclick="doAdd()" style="width:0.2rem; padding:0 0.1rem; cursor:pointer;">＋</span> '+
      '   </div> '+
      '   <div class="ub"> '+
      '       <ul id="quickSel" class="xz_cz_area11"> '+
      '         <li>5</li> '+
      '         <li>10</li> '+
      '         <li>20</li> '+
      '       </ul> '+
      '   </div> '+
      '   <div class="f-small c-gray umar-b uinn-b bd-b c-center"><em id="ecoupon"></em>元/人次 '+
      '   </div> '+      
      '   <div class="umar-t"><button id="paynow" ontouchstart="dfh_touch()" onclick="payNow()" class="btn-red-b">立即支付</button></div> '+
      '   <div class="umar-ts c-important f-small c-center">共<em id="totalPrice"></em>元</div> '+      
      ' </div> ';


      $("body").append(html);
      $("#mask").addClass("mask").fadeIn("slow");
      $(".ljcy").show();
      $("#number").numeral();

      var minus = $(".minus");
      var add = $(".add");
      var number = $("#number");

      // 内部方法
      this.doMinus = function()
      {
        if($(".minus").is(".noclick"))
        {
          return;
        }

        value--;
        number.val(value);
        $("#totalPrice").html(value * _ecoupon);   

        setEnabled_Count(value, _remain);                  
      }

      this.doAdd = function()
      {
        if($(".add").is(".noclick"))
        {
          return;
        }

        value++;
        number.val(value);
        $("#totalPrice").html(value * _ecoupon);

        setEnabled_Count(value, _remain);
      }

      this.doClose = function(){
         $(".ljcy").hide();
         $("#mask").addClass("mask").fadeOut("slow");      
      }      

      $("#sel input").blur(function()
      {
        stopPropagationEx();
        var _v = parseInt($("#number").val());
        if(!isNaN(_v))
        {
          value = _v;
        }

        if(value > _remain)
        {
          value = _remain;
        }
        else if(value < 1)
        {
          value = 1;
        }

        number.val(value);
        $("#totalPrice").html(value * _ecoupon);           
        setEnabled_Count(value, _remain);          
      });      
        
      // 暂未支持点击事件，PC不可用快捷选项  
      $(".xz_cz_area11 li").bind("touchstart", function(e)
      {
        if($(this).is(".noclick"))
        {
          return;
        }

        value=$(this).text();
        number.val(value);
        $("#totalPrice").html(value * _ecoupon);               

        setEnabled_Count(value, _remain);
      });

      // 禁止双击穿透
      $(".ljcy").bind("touchend", function(e){e.preventDefault(); return false;});     
      $(".add").bind("touchend", function(e){notDoubleClick(e);});
      $(".minus").bind("touchend", function(e){notDoubleClick(e);});

      var iLastTouch = null; //缓存上一次tap的时间
      this.notDoubleClick = function(e){        
        var iNow = new Date().getTime();
        iLastTouch = iLastTouch || iNow + 1 /** 第一次时将iLastTouch设为当前时间+1 */ ;
        var delta = iNow - iLastTouch;
        if (delta < 500 && delta > 0)
        {
          e.preventDefault();
          return false;
        }
        iLastTouch = iNow;
      }

      // 禁止滑动
      $(".ljcy").bind("touchmove",function(e){
          e.preventDefault();
          stopPropagationEx();
      });         
    }

    $("#coverImg").attr('src',imgUrl); 
    $("#ecoupon").html(_ecoupon);
    value = $("#number").val();
    $("#totalPrice").html(value * _ecoupon);

    // 快捷按钮状态初始化
    setEnabled_Quick(_remain);

    // 加减按钮状态初始化
    setEnabled_Count(value, _remain);   
}

// 支付按钮
function payNow(){
    if($('#paynow').attr("disabled"))
    {
      return;
    }

    // 禁止重入
    //$('#paynow').attr("disabled", true).html("请稍候...");

    // 改成窗口隐藏
    $(".ljcy").hide();
    $("#mask").addClass("mask").fadeOut("slow");        

    // 委托方法
    if(typeof(_func) == "function")
    {
        _func();  
    }
}

// 设置add,minus按钮状态
function setEnabled_Count(value, remain)
{
  if(remain <= 1)
  {
    $("#sel .add").addClass("noclick");  
    $("#sel .minus").addClass("noclick");          
  }
  else if(value >= remain)
  {
    $("#sel .add").addClass("noclick");       
    $("#sel .minus").removeClass("noclick");    
  }
  else if(value == 1)
  {
    $("#sel .add").removeClass("noclick");       
    $("#sel .minus").addClass("noclick");      
  }  
  else
  {
    $("#sel .add").removeClass("noclick");       
    $("#sel .minus").removeClass("noclick");      
  }
}

// 禁止快捷数字按钮
function setEnabled_Quick(remain)
{
    $("#quickSel li").each(function()
    {
      var str = $(this).text();
      var value = parseInt(str);

      if(remain < value)
      {
        $(this).addClass("noclick");
      }
      else
      {
        $(this).removeClass("noclick");        
      }
    });
}

//文本框只能输入数字，并屏蔽输入法和粘贴  
$.fn.numeral = function() {     
          $(this).css("ime-mode", "disabled");     
          this.bind("keypress",function(e) {     
          var code = (e.keyCode ? e.keyCode : e.which); 
              /*
              if(!$.browser.msie&&(e.keyCode==0x8))  //火狐下不能使用退格键     
              {     
                   return ; 
              }     
              */
              return code >= 48 && code<= 57;     
          });     
          this.bind("paste", function() {     
              var s = clipboardData.getData('text');     
              if (!/\D/.test(s));     
              value = s.replace(/^0*/, '');     
              return false;     
          });     
          this.bind("dragenter", function() {     
              return false;     
          });     
          this.bind("keyup", function() {     
          if (/(^0+)/.test(this.value)) {     
              this.value = this.value.replace(/^0*/, '');     
              }     
          });     
      }; 

