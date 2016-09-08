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
    <div class="header">
    我的网页
        
    </div>
    <!-- router-view 上不要加css  没法显示  要在外面加 -->
    <div class="middle">
    <router-view >
        
    </router-view>
    </div>

    <div class="footer">
        <ul v-link="{path: '/1'}">驾照</ul>
        <ul v-link="{path: '/2'}">菜谱</ul>
        <ul v-link="{path: '/3'}">数据</ul>
        </div>  



</template>
 <!--  <div class="page-group">
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


 -->
<style>
   
.header{
    /*display: block;*/
    height: 1rem;
    font-size: 0.4rem;
    text-align: center;
    /*文字垂直居中 vertical-align 不管用诶，改为行宽与div一致就好了*/
    line-height: 1rem;
    position: fixed;
    background: #91D4DA;
    width: 100%;
    color:white;
}
.footer{
    height: 1rem;
    bottom: 0;
    background: #91D4DA;
    position: fixed;
    width: 100%;
    display: flex;
    color: white
    
}

.footer ul{
      flex: 1;
      line-height: 1rem;
      font-size: 0.3rem;
      text-align: center;
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
.middle{
    position: absolute;
    width: 100%;
    bottom: 1rem;
    top: 1rem;
    overflow: auto;
    background: #F8F8F8;
    /*添加个最大宽度，防止变巨大*/
    max-width: 10rem;
    /*居中*/
    left: 50%;
    margin-left: -5rem;
}
.content{
    
}
.page{
        display: block;
}
</style>