<template>
  <li v-for="number in data">
    {{number.name}}:{{number.score}}
  </li>
</template>

<script>
 export default{
   props:{
   data:Array
   }
     
 }
</script>