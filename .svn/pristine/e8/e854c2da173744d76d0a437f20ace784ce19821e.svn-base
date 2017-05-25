/**
 * jQuery.toTop.js v1.1
 * Developed by: MMK Jony
 * Fork on Github: https://github.com/mmkjony/jQuery.toTop
 **/

$(document).ready(function() {
	/*轮播*/
    $('.bxslider,.bxslider1,.bxslider2').bxSlider({
       auto : true,
       controls : false,
       touchEnabled : true,
    });
	/*回到顶部*/
	$('.to-top').toTop();
	/*评价删除弹窗*/
　	$(".adress-cent-b-del").click(function(){ 
		$("body").css("position","relative");
	　　　	$(".btn-del-cpm").show();
	　}); 

	



	$(".hb-xlose").click(function(){ 
	　　　	$(".soshop-duih1").hide();
	　});
	/*购物车加减*/
	$("#cart-num-editor").Spinner({value:0, min:1, len:3, max:1000});
	$("#cart-num-editor1").Spinner({value:0, min:1, len:3, max:1000});		
	/*商品详情加减*/
	$("#cart-num-editor2").Spinner({value:0, min:1, len:3, max:1000});
	/*商品详情弹出加减*/
	$("#cont-cpm-num").Spinner({value:0, min:1, len:3, max:1000});
	/*商品详情弹出*/
		<!--加入购物车-->
	$("#cont-add-cart").click(function(){
	  $(".cont-cpm").slideToggle();
	  $("body").css("position","relative");
	  $(".cont-cpm-zhe").show();
	  $("#t2").hide();
	  $("#t1").show();
	})
		<!--确认购买-->
	$("#cart_b").click(function(){
	  $(".cont-cpm").slideToggle();
	  $("body").css("position","relative");
	  $(".cont-cpm-zhe").show();
	  $("#t1").hide();
	  $("#t2").show();
	});
	
	$(".close_b").click(function(){
	  $(".cont-cpm").slideToggle();
	  $(".cont-cpm-zhe").hide();
	});
		/*评价显示隐藏*/
	$(".cont-pj").click(function(){										   
			var arrow = $(this).find("i.arrow");
			/* 图标转动 */
			if(arrow.hasClass("arrow-down")){//检查当前的元素(arrow)是否含有某个特定的类(up)，如果有，则----
				arrow.removeClass("arrow-down");//删除.up样式
				arrow.addClass("arrow-up");//添加.down样式
			}else if(arrow.hasClass("arrow-up")){//检查当前的元素(arrow)是否含有某个特定的类(down)，如果有，则----
				arrow.removeClass("arrow-up");//删除.down样式
				arrow.addClass("arrow-down");//添加.up样式
			}
		
			$(".cont-comt-all").slideToggle();
		});
	/*商品详情弹出 end*/      
});
		
