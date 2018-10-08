function pop(obj) {
    function tanchuang(obj) {
        $('body').append('<div id="mry-opo"><div id="mry-opo-title" style="cursor:move;"></div><div  id="mry-opo-content"></div></div>');
        var div = $('#mry-opo');
        $('#mry-opo-title').html(obj.title);
        $('#mry-opo-content').html(obj.content);
        div.css('width', obj.width + 'px');
        if(obj.height == 'auto'){
            div.css('height', obj.height);
            div.css('margin-top', -100+'px');
        }else{
            div.css('height', obj.height + 'px');
            div.css('margin-top', -(parseInt(obj.height) / 2) + 'px');
        }
        div.css('margin-left', -(parseInt(obj.width) / 2) + 'px');
      //  div.css('margin-top', -(parseInt(obj.height) / 2) + 'px');
        div.css('background', obj.backgorund);
        $('#mry-mask').css('display', 'block');
    }
    function del() {
        $('#mry-opo').append('<a href="javascript:void(0)" deletes="mry-opo" style="position:absolute;right:10px;top:6px;color:#fff;font-size:12px;">X</a>');
        $('[deletes=mry-opo]').click(function() {
            $('#mry-opo,#mry-mask').remove();
        });
    }
   /* $('body').append('<div id="mry-mask" deletes="mry-opo"></div>');*/
    var ject = obj;
    ject.width = parseInt(obj.width) || 300;
    if(obj.height == 'auto'){
        ject.height = obj.height;
    }else{
        ject.height = parseInt(obj.height) || 300; 
    }
//    ject.height = parseInt(obj.height) || 300;
    ject.title = obj.title || '来自提示信息';
    ject.content = obj.content || '记录信息';
    ject.backgorund = obj.backgorund || '#fff';
    tanchuang(ject);
    del();
   
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
    
    
    
}