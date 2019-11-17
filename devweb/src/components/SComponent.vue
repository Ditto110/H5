<template>
  <div>
    <h3>{{sendData}}</h3><br/>
    <button @click="select('大连')">子组件触发</button>
  </div>
</template>
<script>
  export default {
    name: "SComponent",
    props:['sendData'],
    methods:{
      select: function (val) {
        let data = {
          cityname: val
        };
        this.$emit("showCityName", data)
      }
    }
  }
</script>
