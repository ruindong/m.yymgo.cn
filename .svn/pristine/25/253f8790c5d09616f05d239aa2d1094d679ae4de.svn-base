 window.scale=document.documentElement.clientWidth/3.75;
 document.getElementsByTagName("html")[0].style.fontSize=window.scale + "px";
 if( window.scale*3.75 > 1200){ document.getElementsByTagName("html")[0].style.fontSize=window.scale/4 + "px";}

window.onload = function ()
{
  var aDiv = document.getElementsByTagName("div");
  var i = 0;
  
  for (i = 0; i < aDiv.length; i++)
  {
    (function ()
    {
      var oDiv = aDiv[i];
      var oH5 = oDiv.getElementsByTagName("h5")[0];
      var aP = oDiv.getElementsByTagName("p");
      var  iHeight= oH5.offsetHeight + aP[0].offsetHeight * aP.length;
      var iLimitH = oH5.offsetHeight;
      var bShow = false;
      if (aP.length > 0)
      {
        oDiv.style.height = iLimitH + "px";
        oH5.innerHTML = "查看";
      }
      else
      {
        oH5.innerHTML = "收起"  
      }
      oH5.onclick = function ()
      {
        bShow = !bShow;
        doMove(oDiv, bShow ? iHeight : iLimitH);
        oH5.innerHTML = bShow ? "收起" : "查看"
      };
    })()  
  }
  
  function doMove(obj, iTarget, callback)
  {
    clearInterval(obj.timer);
    obj.timer = setInterval(function ()
    {
      var iSpeed = (iTarget - obj.offsetHeight) / 5;
      iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);     
      iTarget == obj.offsetHeight ? (clearInterval(obj.timer), callback && callback()) : obj.style.height = iSpeed + obj.offsetHeight + "px"
    }, 30)    
  }
}