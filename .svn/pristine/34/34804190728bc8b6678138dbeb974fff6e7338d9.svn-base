/* 
 * 日期插件
 * 滑动选取日期（年，月，日）
 * V1.1
 */
(function ($) {      
    $.fn.date = function (options,Ycallback,Ncallback) {   
        //插件默认选项
        var that = $(this);
        var docType = $(this).is('input');
        var datetime = false;
       // var nowdate = new Date();
        var indexY=1,indexM=1,indexD=1;
        //var initY=parseInt((nowdate.getYear()+"").substr(1,2));
		var initY=0;
        var initM=1;
        var initD=1;
        var yearScroll=null,monthScroll=null,dayScroll=null;

        $.fn.date.defaultOptions = {
            beginyear:0,                 //日期--年--份开始
            endyear:34,                   //日期--年--份结束34
            beginmonth:0,                   //日期--月--份结束
            endmonth:0,                    //日期--月--份结束
            beginday:0,                     //日期--日--份结束
            endday:0,                      //日期--日--份结束
            curdate:false,                   //打开日期是否定位到当前日期
            theme:"date",                    //控件样式（1：日期，2：日期+时间）
            mode:null,                       //操作模式（滑动模式）
            event:"click",                    //打开日期插件默认方式为点击后后弹出日期 
            show:true
        }
        //用户选项覆盖插件默认选项   
        var opts = $.extend( true, {}, $.fn.date.defaultOptions, options );

        //绑定事件（默认事件为获取焦点）
        that.bind(opts.event,function () {
                createUL();      //动态生成控件显示的日期
                init_iScrll();   //初始化iscrll
                extendOptions(); //显示控件
                that.blur();
              
                refreshDate();
                bindButton();
            })  
          ;

		
        function refreshDate(){
            yearScroll.refresh();
            monthScroll.refresh();
            dayScroll.refresh();

        }

     	function resetIndex(){
            indexY=1;
            indexM=1;
            indexD=1;
        }

        function bindButton(){
            resetIndex();
            $("#dateconfirm").unbind('click').click(function () {	
				var datestr,sf,cs,dq;
				sf= $("#yearwrapper ul li:eq("+indexY+")").text().trim();
				cs=$("#monthwrapper ul li:eq("+indexM+")").text().trim()
				dq=$("#daywrapper ul li:eq("+Math.round(indexD)+")").text().trim();
				if(cs=="" || cs==null ||cs==undefined){
				  datestr=sf;
				}else{
				  datestr=sf+"-"+cs;
				}
				if(dq){
				  datestr+="-"+dq;
				}
				
                resetIndex();
                if(Ycallback===undefined){
                     if(docType){that.val(datestr);}else{that.html(datestr);}
                }else{
                     Ycallback(datestr);
                }
				$("#datePlugin").empty();
            });
            $("#datecancle").click(function () {
                $("#datePage").hide(); 
		        $("#dateshadow").hide();
                Ncallback(false);
            });
        }		
        function extendOptions(){
            $("#datePage").show(); 
            $("#dateshadow").show();
        }
        //日期滑动
        function init_iScrll() { 
              yearScroll = new iScroll("yearwrapper",{snap:"li",vScrollbar:false,
                  onScrollEnd:function () {
                       indexY = (this.y/40)*(-1)+1;
					   $("#monthwrapper ul").html(createMONTH_UL2(indexY));
                       $("#daywrapper ul").html(createDAY_UL2(indexY,indexM));
					   monthScroll.refresh();
                       dayScroll.refresh();
                  }});
              monthScroll = new iScroll("monthwrapper",{snap:"li",vScrollbar:false,
                  onScrollEnd:function (){
                      indexM = (this.y/40)*(-1)+1;
					  $("#daywrapper ul").html(createDAY_UL2(indexY,indexM));
					  dayScroll.refresh();
                  }});
              dayScroll = new iScroll("daywrapper",{snap:"li",vScrollbar:false,
                  onScrollEnd:function () {
                      indexD = (this.y/40)*(-1)+1;
                  }});
        }
    
        function  createUL(){
            CreateDateUI();
            $("#yearwrapper ul").html(createYEAR_UL());
            $("#monthwrapper ul").html(createMONTH_UL2(indexY));
            $("#daywrapper ul").html(createDAY_UL2(indexY,indexM));
        }
        function CreateDateUI(){
            var str = ''+
                '<div id="dateshadow"></div>'+
                '<div id="datePage" class="page">'+
                    '<section>'+
                        '<div id="datetitle"><h1>请选择地区</h1></div>'+
                        '<div id="datemark"><a id="markyear"></a><a id="markmonth"></a><a id="markday"></a></div>'+
                        '<div id="datescroll">'+
                            '<div id="yearwrapper">'+
                                '<ul></ul>'+
                            '</div>'+
                            '<div id="monthwrapper">'+
                                '<ul></ul>'+
                            '</div>'+
                            '<div id="daywrapper">'+
                                '<ul></ul>'+
                            '</div>'+
                        '</div>'+
                     
                    '</section>'+
                    '<footer id="dateFooter">'+
                        '<div id="setcancle">'+
                            '<ul>'+
                                '<li id="dateconfirm">确定</li>'+
                                '<li id="datecancle">取消</li>'+
                            '</ul>'+
                        '</div>'+
                    '</footer>'+
                '</div>'
            $("#datePlugin").html(str);
        }
        function addTimeStyle(){
            $("#datePage").css("height","380px");
            $("#datePage").css("top","60px");
            $("#yearwrapper").css("position","absolute");
            $("#yearwrapper").css("bottom","200px");
            $("#monthwrapper").css("position","absolute");
            $("#monthwrapper").css("bottom","200px");
            $("#daywrapper").css("position","absolute");
            $("#daywrapper").css("bottom","200px");
        }
        //创建 --省-- 列表
        function createYEAR_UL(){
            var str="<li>&nbsp;</li>";
            for(var i=opts.beginyear; i<=opts.endyear;i++){
                str+='<li>'+province.citylist[i].p+'</li>'
            }
            return str+"<li>&nbsp;</li>";;
        }
        //创建 --市-- 列表	
		 function createMONTH_UL2(index){
			index=index?index:0;
            var str="<li>&nbsp;</li>";
			for(var item in province.citylist[index-1].c) {
			 str+='<li>'+province.citylist[index-1].c[item].n;+'</li>'
			}
            return str+"<li>&nbsp;</li>";;
        }
        //创建 --区-- 列表
		 function createDAY_UL2(index,index2){
              $("#daywrapper ul").html("");
            var str="<li>&nbsp;</li>";
			if(province.citylist[index-1].c){
              for(var item in province.citylist[index-1].c[index2-1].a){
                str+='<li>'+province.citylist[index-1].c[index2-1].a[item].s+'</li>'
              }
			}
            return str+"<li>&nbsp;</li>";;                     
        }

    }
})(jQuery);  
