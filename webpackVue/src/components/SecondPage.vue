<template>
    <div class="card-collect">
        <div class="card-cook" v-for="question in cook" @click="jump(question)">
            <img class="img2" src="http://tnfs.tngou.net/image{{question.img}}">
            <div class="text">
                {{question.name}}
                <br> {{question.keywords}}
            </div>
            <!-- <a :href="'/#!/cook/' + question.id">详细</a> -->
        </div>
    </div>
    </div>
</template>
<script>
import {
    request
} from './request.js'

export default {

    //新建的data还必须用这种形式呢，之前的形式添加不进去
    data() {
            return {
                cook: []
            }
        },

        route: {
            data(trans) {
                var _this = this;
                request('http://apis.baidu.com/tngou/cook/list').then(result => {
                    _this.cook = result.tngou;
                    console.log(result)
                });
                trans.next();
            }
        },
        methods: {
            jump: function(q) {
                // JS页面跳转
                window.location.href = '/#!/cook/' + q.id;
            }
        }


}
</script>
<style>
@media (max-width: 700px) {
    .img2 {
        margin: 10px;
        width: 3.5rem;
        height: 3rem
    }
    .text {
        display: inline-block;
        position: absolute;
        top: 50%;
        margin-top: -22px;
        margin-left: 10px;
        font-size: 0.4rem
    }
    .card {
        position: relative;
        margin: 0.2rem;
        background: white
    }
}

@media (min-width: 700px) {
    .card-collect {
        /*display: flex;*/
        /*flex-wrap: wrap;*/
        /*width: 800px;*/
    }
    .card-cook .img2 {
        margin: 5px 0.25rem;
        width: 3.5rem;
        height: 3rem;
    }
    .card-cook .text {
        text-align: center;
    }
    .card-cook {
        /*flex: 1;*/
        display: inline-block;
        position: relative;
        width: 4rem;
        color: #1b315e;
        /*border: 2px solid #d3d7d4;*/
        margin: 5px;
        /*width: 300px;*/
        /*display: block;*/
        box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
        border-radius: 4px;
        /*overflow: hidden;*/
        /*background-color: #fff;*/
    }
}
</style>
