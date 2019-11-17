<template>
  <div class="banner">
    <el-carousel trigger="click" height="1000px">
      <el-carousel-item v-for="banner in banner_list" :key="banner.order">
        <a :href="banner.link"><img width="100%" :src="banner.img" alt="" ></a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name:"Banner",
    data(){
      return {
        banner_list: [
          {order: 1, link: "http://www.baidu.com", img: "/static/banner/1.jpg"},
          {order: 2, link: "http://www.baidu.com", img: "/static/banner/2.jpg"},
          {order: 3, link: "http://www.baidu.com", img: "/static/banner/3.jpg"},
        ]
      };
    }
  }
</script>

<style scoped>

</style>
