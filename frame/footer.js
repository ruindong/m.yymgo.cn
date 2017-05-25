$(function(){
    // 非东方虹APP内嵌，需要底部菜单
    if(!getAppTerminal())
    {
      showMenu();
    }

    // 添加统计工具
    appendStatistics();
})

// 显示底部菜单
function showMenu()
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

    if((curPage == "/") || (curPage.indexOf("/?") == 0) || (curPage.indexOf("/index.html") == 0))
    {
        createMenu();
        $(".b_1").addClass('cur');
    }
    else if(curPage.indexOf("/index/closed_tradelist.html") == 0)
    {
        createMenu();    
        $(".b_2").addClass('cur'); 
    }
    else if(curPage.indexOf("/index/allshaidan.html") == 0)
    {
        createMenu();    
        $(".b_3").addClass('cur'); 
    }  
    else if(curPage.indexOf("/my/my.html") == 0)
    {
        createMenu();    
        $(".b_4").addClass('cur'); 
    }
}

function createMenu()
{
    var html=
       "<div class='index-foot' id='index-foot'>"
      +"  <ul class='bd-b clear qing'>"
      +"    <li class='b_1'><a href='/index.html'>首页</a></li>"
      +"    <li class='b_2'><a href='/index/closed_tradelist.html'>揭晓</a></li>"
      +"    <li class='b_3'><a href='/index/allshaidan.html'>晒单</a></li>"
      +"    <li class='b_4'><a href='/my/my.html' id='MYlocation'>我的</a></li>"
      +"  </ul>"
      +"</div>";

    // 首页，已经登录，且adbanner状态为需要显示
    /*
    var status = getIndexAdBannerStatus();
    if(status && (status == "ON"))
    {
        html = appendDownloadBanner(html);
    }*/

    $("footer").html(html);
}

function appendDownloadBanner(html)
{
    var banner = '\
      <div id="dlownd-banner" class="uinn ub ub-ac bc-black" style="opacity:0.8; position:relative">\
          <div class="ub-img img-icon2 umar-r" style="background-image:url(/image/dfh_logo.png)"></div>\
          <div class="umar-l c-white ub-f1">\
            <div>东方虹美购APP</div>\
            <div>更多惊喜等着您</div>\
          </div>\
          <div class="btn-red-2 umar-r">立即下载</div>\
          <div class="umar-l umar-r"></div>\
          <div class="c-white f-big2" style="position:absolute; right:0.1rem; top:0.1rem;" onclick="closeBanner()">X</div>\
      </div>\
      ';

    return banner + html;
}
function closeBanner()
{
  $("#dlownd-banner").remove();
}

// 统计工具
function appendStatistics()
{
    var footer= document.getElementsByTagName("footer")[0];
    var newScript= document.createElement("script");
    newScript.type= "text/javascript";
    newScript.src= "https://s95.cnzz.com/z_stat.php?id=1260788973&web_id=1260788973";
    footer.appendChild(newScript);  
}