<script>
//es6
// import Request from "request"


export default {
    el: "#app",
    //data:function(){}，下面是es6写法
    data() {
        return {
            name: "guowenfh",
            age: "2q1",
            questions: []
        }
    },

}
</script>
<template>
    <div class="page">
        <div class="header">
            我的网页
        </div>
        <!-- router-view 上不要加css  没法显示  要在外面加 -->
        <div class="middle">
            <router-view>
            </router-view>
        </div>
        <div class="footer">
            <ul v-link="{path: '/1'}">驾照</ul>
            <ul v-link="{path: '/2'}">菜谱</ul>
            <ul v-link="{path: '/3'}">数据</ul>
            <ul v-link="{path: '/blog'}">博客</ul>
            <ul v-link="{path: '/movie'}">电影</ul>
            <ul v-link="{path: '/smzdm'}">好价</ul>
        </div>
    </div>
</template>
<style>
@media (max-width: 700px) {
    .header {
        /*display: block;*/
        height: 1rem;
        font-size: 0.4rem;
        text-align: center;
        /*文字垂直居中 vertical-align 不管用诶，改为行宽与div一致就好了*/
        line-height: 1rem;
        position: fixed;
        background: #91D4DA;
        width: 100%;
        color: white;
    }
    .footer {
        height: 1rem;
        bottom: 0;
        background: #91D4DA;
        position: fixed;
        width: 100%;
        display: flex;
        color: white
    }
    .footer ul {
        flex: 1;
        line-height: 1rem;
        font-size: 0.3rem;
        text-align: center;
    }
    .left {
        position: absolute;
        left: 10px;
        top: 58px;
        bottom: 50px;
        /*height: 100%;*/
        width: 200px;
        background: red
    }
    .middle {
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
    .content {}
    .page {
        display: block;
    }
}

@media (min-width: 700px) {
    .page {
        position: relative;
    }
    .header {
        /*display: block;*/
        height: 60px;
        font-size: 0.4rem;
        line-height: 60px;
        text-align: center;
        /*文字垂直居中 vertical-align 不管用诶，改为行宽与div一致就好了*/
        /*line-height: 1rem;*/
        position: fixed;
        background: #7bbfea;
        width: 100%;
        z-index: 10;
        /*color: white;*/
    }
    .middle {
        top: 60px;
        margin-left: 330px;
        /*margin-top: 30px;*/
        position: absolute;
        overflow: auto;
        /*font-size: 0.3rem;*/
        color: #1b315e;
        /*max-width: 800px;*/
        /*z-index: -1;*/
        /*position: relative;*/
    }
    .footer {
        top: 60px;
        left: 100px;
        width: 200px;
        background: #F8F8F8;
        position: fixed;
        height: 100%;
        /*display: flex;*/
        flex-direction: column;
        border-radius: 10px;
    }
    .footer ul {
        /*flex: 1;*/
        width: 100%;
        line-height: 1rem;
        font-size: 0.3rem;
        text-align: center;
    }
    .footer ul:hover {
        background: #90d7ec;
        border-radius: 10px;
        cursor: pointer;
    }
}
</style>
