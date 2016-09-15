<template>
    <div>
        <form v-on:submit.prevent="addPost">
            标题
            <input type="text" v-model="newBlog.title" name="">
            <br> 内容
            <input type="text" v-model="newBlog.blog" name="">
            <br> 作者
            <input type="text" v-model="newBlog.author" name="">
            <br>
            <input type="submit" name="" value="新建文章">
            </button>
        </form>
        <div>
            <div v-for="blog in blogs">
                <div class="card blog-card">
                    <div class="date">{{blog.time}}</div>
                    <a class="title" :href="'/#!/blog/' + blog.key">{{blog.title}}</a>
                    <div class="author">{{blog.author}}</div>
                    <div @click="likes(blog)" class="like">喜欢{{blog.likes}}</div>
                    <div @click="removePost(blog)">删除</div>
                </div>
                <div v-show="blog.showw">{{blog.blog}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import {
    firebaseData
} from './request.js'
import Vue from "vue"

var usersRef = firebaseData('blog');

export default {

    data() {
            return {
                newBlog: {
                    title: '标题测试',
                    blog: '内容测试  内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试',
                    author: 'fire',
                    time: '',
                    commit: [],
                    likes: '3'
                },
                blogs: {}
            }
        },

        created() {
            var a = [];
            var aa;
            var _this = this;
            var keys;

            usersRef.on('value', snapshot => {
                a = snapshot.val();
                if (a == null) return;
                //终于把对象名存储为属性了，终于可以读出对象名了
                keys = Object.keys(a);

                _this.blogs = a;
                for (aa = 0; aa < keys.length; aa++) {
                    _this.blogs[keys[aa]].key = keys[aa];
                    Vue.set(_this.blogs[keys[aa]], 'showw', 0);
                };
            });
        },

        methods: {
            addPost: function() {
                var myDate = new Date();
                this.newBlog.time = myDate.toLocaleDateString();
                usersRef.push(this.newBlog)
                    // this.newBlog.blog = '';
                    // this.newBlog.title = ''

            },
            removePost: function(user) {
                usersRef.child(user.key).remove()
            },
            moveBottom: function() {
                var consoleText = document.getElementById("page3-content");
                consoleText.scrollTop = consoleText.scrollHeight;
            },
            likes: function(blog) {
                blog.likes++;
                usersRef.child(blog.key).update({
                    likes: blog.likes
                });
            }
        }
}
</script>
<style>
.blog-card {
    font-size: 0.3rem;
    height: 0.3rem;
    display: flex;
    text-align: center;
}

.blog-card div {
    flex: 1;
}

.blog-card .date {
    flex: 2
}

.blog-card .title {
    flex: 7;
    text-align: left;
}

.blog-card .content {
    display: block;
}
</style>
