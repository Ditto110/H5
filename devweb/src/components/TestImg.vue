<template>
  <div>
    <ul >
      <li v-for="(item,index) in imgList" :key="item.id" style="float: left">
        <img :src="item.url"/>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: "TestImg",
    data(){
      return{
        imgList:[
          { id : 1 ,type : 0 ,price : 170 ,url : '/static/banner/1.jpg' ,name : 'vip/年'},
          { id : 2 ,type : 0 ,price : 160 ,url : '/static/banner/2.jpg' ,name : 'vip/年'}
        ],
      }
    }
  }

</script>
