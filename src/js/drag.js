function drag (id) {
    //console.log("drag");
    var disx = 0;
    var disy = 0;//15点56分
    var obj = document.getElementById(id);
    obj.onmousedown = function(e){
        //鼠标按下时会怎么样
        disx = e.pageX - obj.offsetLeft;
        disy = e.pageY - obj.offsetTop;
    }
    obj.onmousemove = function(){

    }
    obj.onmouseup = function(){
        
    }
}