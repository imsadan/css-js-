# css-js-
高度可自控制（新增可设置auto属性），可鼠标拖动

<link rel="stylesheet" type="text/css" href="${ctx}/static/lib/bootstrap/css/style.css"/>
<script type="text/javascript" src="${ctx}/static/lib/bootstrap/js/style.js"></script>

属性调用
   function showLog() {
        var html = '';
        ....
        ....
        
        pop({
            width: 500,
            height: 'auto',
            title: '携物日志',
            content: html  (或可直接url路径)
        });
    }


鼠标拖动（可单独拿出）
    var flag=false;
    var mouseLeft;
    var mouseTop;
    
    $('#mry-opo-title').mousedown(function(event){  
        var downX=event.pageX;       //获取鼠标坐标
        var downY=event.pageY;
        var offsetLeft=$('#mry-opo').position().left    //获取弹出框的left值
        var offsetTop =$('#mry-opo').position().top
        mouseLeft=downX-offsetLeft;       //计算鼠标在弹出框中的位置
        mouseTop =downY-offsetTop;
        flag=true;
    });



    $(document).mousemove(function(event){  
        
        if(flag==true){
            var moveX=event.pageX;       //获取鼠标坐标
            var moveY=event.pageY;
            var moveLeft=moveX-mouseLeft;  //获取移动过程中弹出框的left值
            var moveTop =moveY-mouseTop;
            var maxX=$(document).width() -$('#mry-opo').outerWidth();
            var maxY=$(document).height()-$('#mry-opo').outerHeight();
            $('#mry-opo').css({'left':moveLeft,'top':moveTop,'backgroud':'red'});
        }
        
    });

    $(document).mouseup(function(event){  
        flag=false;
    });
    
    
    
    备注：感谢原版本*作者：无言 
    
