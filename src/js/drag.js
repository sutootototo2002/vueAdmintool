var drag = function(id) {
    //console.log("drag");
    var disx = 0;
    var disy = 0;//15点56分
    var obj = window.document.getElementById(id);
    alert(id+'--'+obj);
    obj.onmousedown = function(ev){
        //鼠标按下时会怎么样
        disx = ev.pageX - obj.offsetLeft;
        disy = ev.pageY - obj.offsetTop;
        document.onmousemove = function(ev){
           obj.style.left = ev.pageX - disx + 'px';
           obj.style.top = ev.pageY - disy + 'px'
        }
        document.onmouseup = function(ev){
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }
    return false;
}

export default {
    drag
}