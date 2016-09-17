<template>
    <div>
        <div>
            <div v-for="movie in movies">
                <div class="card blog-card">
                    <!-- <div class="date">{{blog.time}}</div> -->
                    <a class="title" :href="'/#!/movie/' + movie.key">{{movie.title}}</a>
                    <!-- <div class="author">{{blog.author}}</div> -->
                    <!-- <div @click="likes(blog)" class="like">喜欢{{movie.likes}}</div> -->
                    <!-- <div @click="removePost(blog)">删除</div> -->
                </div>
                <!-- <div  v-show="blog.showw">{{blog.blog}}</div> -->
            </div>
        </div>
    </div>
</template>
<script>
import {
    firebaseData
} from './request.js'
//import {download} from './request.js'
//import Vue from "vue"

var usersRef = firebaseData('rss');

export default {

    data() {
            return {
                movies: {}
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
                _this.movies = a;
                for (aa = 0; aa < a.length; aa++) {
                    _this.movies[aa].key = aa;
                    //console.log(_this.movies[aa])
                }
            });
        },

        methods: {

        }
}
</script>
<style>
@media (max-width: 700px) {
    .blog-card {
        font-size: 0.3rem;
        height: 0.8rem;
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
        margin: 0.1rem;
        flex: 7;
        text-align: left;
        max-width: 8rem;
        word-break: break-all;
    }
    .blog-card .content {
        display: block;
    }
}
</style>
