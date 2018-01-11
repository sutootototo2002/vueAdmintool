<template>
  <div class="hello">
     <div id="box">
       位置
        <p>{{val.x}}+"--"+{{val.y}}</p>
        <div v-drag="greet" id="drag" :style="style"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      val: {
        x:0,
        y:0
      },
       style: {
                    width: '200px',
                    height: '200px',
                    background: 'aqua',
                    position: 'absolute',
                    left: '30px',
                    top: 0
                }
    }
  },
  created(){
   
  },
   methods:{
            //接受传来的位置数据，并将数据绑定给data下的val
                greet(val){
                    console.log(val);
                    this.val = val;
                }
            } 
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#div2{
  width:200px;
  height: 200px;
  background:green;
  position: absolute;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
