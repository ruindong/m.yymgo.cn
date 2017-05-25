$(function(){
  $('#tab li').click(function(){
    $(this).addClass('act').siblings().removeClass('act');
    var num = $(this).index();
    $('#tab_list li').eq(num).show().siblings().hide();
          changeTab(num);            
    });
});

$(function(){
      var value=$("#number").val();
      var minus=$(".minus");
      var add=$(".add");
      var number=$("#number");
      if(value==1){
        minus.css("color","#999999");
      }else{
         minus.css("color","#000000");
      }
      
      $(".minus").click(function(){
         if(value==1){
          minus.css("color","#999999");
          return false;
         }else{
         value--;
         number.val(value);
         minus.css("color","#000000");
         } 
      })
      
      $(".add").click(function(){
         value++;
         number.val(value);
         minus.css("color","#000000");
      })
        
      $(".xz_cz_area11 li").click(function(){
         //var index=$(this).index();
         value=$(this).text();
         number.val(value);
         minus.css("color","#000000");
         return value;  
      })

      $(".ljcy .gb").click(function(){
          $(".ljcy").hide();
         $("#mask").addClass("mask").fadeOut("slow");
      })

  })