<template>
  <div class="courses">
    <h3>父组件</h3>
    <SComponent @showCityName="updateCity" :sendData="toCity"></SComponent>
    <!--sendData="toCity" 是静态传递数据-->
    <!--:sendData="toCity" 是动态传递数据-->
  </div>
</template>

<script>
  import SComponent from "./SComponent";
  export default {
    name:"Courses",
    components: {SComponent},
    data(){
      return {
        toCity: "北京"
      }
    },
    methods:{
      updateCity: function (data) {//触发子组件城市选择-选择城市的事件
        this.toCity = data.cityname;//改变了父组件的值
        console.log('toCity:' + this.toCity)
      }
    }
  }
</script>

<style scoped>

</style>
