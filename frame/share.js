
$(function(){
	var pc='<div id="onweixinshare">'+
		'<div class="bdsharebuttonbox" id="bdsharebuttonbox" style="background:#fff;position:fixed;bottom:0;padding:2em 1.5em;width:100%;">'+
			'<a href="#" class="bds_tsina" data-cmd="tsina" title="微博"><img data-cmd="tsina" src="/image/share/微博.png">微博</a>'+
			'<a href="#" class="bds_weixin" data-cmd="weixin" title="微信"><img data-cmd="weixin" src="/image/share/微信.png">微信</a>'+
			'<a href="#" class="bds_qzone" data-cmd="qzone" title="QQ空间"><img data-cmd="qzone" src="/image/share/QQ空间.png">QQ空间</a>'+
			'<a href="#" onclick="return false;" data-cmd="sqq"><img data-cmd="sqq" src="/image/share/QQ.png">QQ</a>'+
		'</div>'+
	'</div>'+
	'<div id="weixinrwmdbox" style="width:100%;height:100%;background:rgba(0,0,0,.7);position:absolute;top:0;z-index:8;display:none;"></div>';
	
    var html="<a class='fenxiang' style='position:relative;top:-1em;' href='#'>分享</a>"
      +"<div class='fx_box'style='width:100%;height:1000px;background:rgba(0,0,0,0.5);top:0;padding-top:1em;';  id='weixinfx'><img src='../image/fenxiang.png'></div>";
    $("#fenxiang").html(html);
	

	var bodyhtml=document.body.innerHTML;
	document.body.innerHTML=pc+bodyhtml;
 
	head=document.getElementsByTagName("head")[0];
	head.innerHTML+='<style>'+
						'#onweixinshare{'+
							'position:fixed;bottom:0;z-index:99999;display:none;width:100%;height:100%;'+
							'background:rgba(0,0,0,.7);'+
						'}'+
						'#onweixinshare a{'+
							'width:15%;'+
							'height:auto;'+
							'text-align:center;'+
							'background-size:0px 0px;'+
						'}'+
						'#onweixinshare a img{'+
							'width:100%;'+
							'height:auto%;'+
						'}'+
						'#gengduo{'+
							'display:none;'+
						'}'+
						'.bdshare_dialog_box,.bdshare_popup_bg,.bdshare_popup_box{display:none!important}'//屏蔽默认
					'</style>';
	// console.log(head.innerHTML)
 
//非微信时的分享
 window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdPic":"","bdStyle":"0","bdSize":"16"},"share":{}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];

   
   
    // 微信分享
	var a=false;
	var box=$("#weixinfx");
	var ua = navigator.userAgent.toLowerCase();	
	if(+ua.indexOf("micromessenger")!=-1){
		//---------------------------------------------------------
		$(".fenxiang").click(function () {
		  console.log( "weixinShareOn" )
		  
		  // var dbox=$("#fenxiang");
		  box.css("display","block");
		});
		box.click(function(){
			this.style.display="none";
		});
		//--------------------------------------------------------
	}else{
		// http://qzonestyle.gtimg.cn/qzone_v6/proj_qzonelogin/img/qzone-login-logo-dark.32@2x.png   
		console.log( "非微信端" );
		var onweixinshare=document.getElementById("onweixinshare");
		$(".fenxiang").click(function () {
			onweixinshare.style.display="block";
			$("#frame-nav").css("display","none");
			this.style.display="none"
		});
		// $("#offonweixinshare").click(function(){
			// onweixinshare.style.display="none";
		// })
		var fenxiang=document.getElementsByClassName("fenxiang")[0];
		onweixinshare.onclick=function(){
			this.style.display="none";
			$("#frame-nav").css("display","block");
			fenxiang.style.display="block";
		}
		$(".bdsharebuttonbox").click(function(event){//阻止事件冒泡
			event.stopPropagation();
		});
		var weixinrwmdbox=document.getElementById("weixinrwmdbox");
		$(".bds_weixin").click(function(){//非微信之微信分享
			onweixinshare.style.display="none";
			weixinrwmdbox.style.display="block"; 
			console.log("click weixin");
			setTimeout(function(){
				$(".bd_weixin_popup_close").click(function(){
					weixinrwmdbox.style.display="none";
				})
			},300);
			
		});
		// var a=false;
		// var gengduo=document.getElementById("gengduo");
		// document.getElementById("loadgengduo").onclick=function(){
				// a=!a;
				// if(a){
					// gengduo.style.display="block";
				// }else{
					// gengduo.style.display="none";
				// }
				// console.log("s")
		// }
	}
})













































