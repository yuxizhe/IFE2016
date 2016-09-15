<template>
    {{Blog.title}}
    <br> {{{Blog.description}}}
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
