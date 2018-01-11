function drag (id) {
    //console.log("drag");
    var disx = 0;
    var disy = 0;//15点56分
    var obj = document.getElementById(id);
    obj.onmousedown = function(e){
        //鼠标按下时会怎么样
        disx = e.pageX - obj.offsetLeft;
        disy = e.pageY - obj.offsetTop;
        document.onmousemove = function(ev){
<<<<<<< HEAD
           obj.style.left = ex.clientX - disx + 'px'
        }
=======
            obj.style.top = ex.clientY - disy + 'px'
         }
    }
    obj.onmousemove = function(){
 
    }
    obj.onmouseup = function(){
        
>>>>>>> new2
    }
}