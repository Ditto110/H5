<template>
  <div class="home">
    <!--使用组件-->
    <Header/>
    <Banner/>
    <Footer/>
  </div>
</template>

<script>
  /*引用组件*/
  import Header from "./common/Header"
  import Banner from "./common/Banner"
  import Footer from "./common/Footer"
  export default {
    name: "Home",
    data(){
      return {

      };
    },
    /*注册组件*/
    components:{
      Header,
      Banner,
      Footer
    }
  }
</script>

<style scoped>
  .home{
    padding-top: 80px;
  }
</style>
