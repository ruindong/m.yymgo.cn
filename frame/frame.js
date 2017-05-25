(function(){
	// 东方虹APP内嵌，不执行该方法
	if(getAppTerminal())
	{
		return;
	}

	var imgurl,myurl,jiexiaourl,indexurl,sdurl;
	if(typeof frameNavInedx!="boolean"){
		imgurl="/image/dengduo.png";
		myurl="/my/my.html";
		jiexiaourl="/index/closed_tradelist.html";
		indexurl="/index.html";
		sdurl="/index/allshaidan.html";
	}else{//首页(首页只有一个，所以放在else里面，减少一个执行次数)
		imgurl="/image/dengduo.png";
		myurl="/my/my.html";
		jiexiaourl="/index/closed_tradelist.html";
		indexurl="/index.html";
		sdurl="/index/allshaidan.html";
	}
	document.getElementsByTagName("head")[0].innerHTML+='<style>'+
															'#framenavbox{font-size:14px;z-index:1000000000000;}'+//em继承，解决不一致（请勿删除）
															'#framenavbox a{'+
																'color:#fff;'+
															'}'+
															'#framenavbox img{'+
																'width:100%;'+
																'height:100%;'+
															'}'+
														'</style>';
	document.body.innerHTML+=
						 '<div id="framenavbox" style="position:relative;position:fixed;bottom:15%;right:1.01em;over:auto;text-align:center">'+
						 '<ul id="frame-ul" style="display:none;position:relative;width:7em;font-size:14px;background-color:rgba(0,0,0,0.6);line-height:2em;padding:1em 0;">'+
						 '<li style=""><a href='+indexurl+'>首页</a></li>'+
						 '<li><a href='+jiexiaourl+'>揭晓</a></li>'+
						 '<li><a href='+sdurl+'>晒单</a></li>'+
						 '<li><a href='+myurl+'>我的</a></li>'+
						 '</ul>'+
						 '<div id="frame-nav" style="width:2.5em;height:2.5em;float:right;background:rgba(0,0,0,0.6);">'+
						 '<img src='+imgurl+'>'+
						 '</div>'+
						 '</div>';
	var frameNav=document.getElementById("frame-nav");
	var frameUl=document.getElementById("frame-ul");
	var frameUlTop=0;
	var frameA=false;
	frameNav.onclick=function(e){
		 if ( e && e.stopPropagation ) {
			e.stopPropagation();
		} else {
			window.event.cancelBubble = true;
		}
		frameA?frameA=!frameA:frameA=!frameA;
		frameUl.style.display="block";
		if(frameA){
			frameUl.style.top="-"+frameUlTop+"em";
		}else{
			frameUl.style.top="0px";
			frameUl.style.display="none";
		}
	}
	document.body.addEventListener("click",function(e){
		frameA=false;//避免点击全局的时候记录还在停留。
		frameUl.style.top="0px";
		frameUl.style.display="none";
	});
	document.body.addEventListener("touchmove",function(e){//滚动取消nav菜单
		if(e.changedTouches[0].clientY){
			frameA=false;
			frameUl.style.top="0px";
			frameUl.style.display="none";
		}
	});
})();






















