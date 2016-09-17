<template>
    <div class="movie-title">
        {{Blog.title}}
    </div>
    <div class="movie-description">
        {{{Blog.description}}}
    </div>
    <br>
    <br>
    <!-- {{Blog.blog}} -->
</template>
<script>
import {
    firebaseData
} from './request.js'



export default {
    data() {
            return {
                Blog: ''
            }
        },
        route: {
            data({
                to
            }) {
                //var _this =this;
                var a;
                a = firebaseData('rss/' + to.params.key);
                //获取数据也可以用on~~~
                a.on('value', snapshot => {
                    this.Blog = snapshot.val();
                });
                console.log(this.Blog);
            }
        }
}
</script>
<style>
.movie-title {
    font-size: 22px;
    text-align: center;
    line-height: 50px;
}

.movie-description {
    font-size: 0.3rem;
    line-height: 0.8rem;
}

.movie-description img {
    max-width: 700px;
    margin-left: 100px;
    margin: 10px auto;
}
</style>
