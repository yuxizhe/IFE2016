<script>
    //es6
    // import Request from "request"


    export default {
        el:"#app",
         //data:function(){}，下面是es6写法
         data () {
            return {
                name:"guowenfh",
                age:"2q1",
                questions:[]
            }
        },
        route:{
            data:function (transition) {
                console.log('data  change')
                transition.next()
            },
            activate:function (transition) {
                console.log('activate change')
                transition.next()
            },
            deactivate:function (transition) {
                console.log('deactivate change')
                transition.next()
            }
        },
        methods:{
            getAjax(){
                request('http://apis.baidu.com/bbtapi/jztk/jztk_query?subject=4').then(result =>{
                    this.questions = result.result
                    });
            }
        },
       
    }
</script>

<template>
  <!--   <div class="header">header
        
    </div>

    <div class="left">
        <button v-link="{path: '/1'}">1</button>
        <button v-link="{path: '/2'}">2</button>
        <button v-link="{path: '/3'}">3</button>
        <button @click="getAjax()">getAjax</button>
        <li v-for="question in questions">{{question.question}}</li>
    </div>  

    <router-view class="right">
        
    </router-view>


    <div class="footer">
        footer
    </div>

</template> -->
  <div class="page-group">
       <div class="page">
  <header class="bar bar-nav">
    <a class="button button-link button-nav pull-left" href="/demos/card" data-transition='slide-out'>
      <span class="icon icon-left"></span>
      返回
    </a>
    <h1 class="title">我的生活</h1>
  </header>
  <nav class="bar bar-tab">
    <a class="tab-item active" href="#">
      <span class="icon icon-home"></span>
      <span class="tab-label">首页</span>
    </a>
    <a class="tab-item" v-link="{path: '/1'}">
      <span class="icon icon-me"></span>
      <span class="tab-label">我</span>
    </a>
    <a class="tab-item" v-link="{path: '/2'}">
      <span class="icon icon-star"></span>
      <span class="tab-label">收藏</span>
    </a>
    <a class="tab-item" v-link="{path: '/3'}">
      <span class="icon icon-settings"></span>
      <span class="tab-label">设置</span>
    </a>
  </nav>
  <div class="content">
    <router-view>
        
    </router-view>

  </div>
  </div>
  </div>



<style>
   
.header{
    /*display: block;*/
    height: 50px;
    background: green
}
.footer{
    height: 50px;
    background: blue;
    bottom: 0;
    position: absolute;
    width: 100%
}
.left{
    position: absolute;
    left: 10px;
    top: 58px;
    bottom: 50px;
    /*height: 100%;*/
    width: 200px;
    background: red
}
.right{
    position: absolute;
    left: 210px;
    width: 100%;
    bottom: 50px;
    top: 58px;
    overflow: auto;
}
.content{
    
}
.page{
        display: block;
}
</style>