<template>
  <div class="hello">
    <!--<h1>{{ msg }}</h1>
    <h2>Vue Program</h2>-->
    <div>
      <form>
        <label>姓名：</label>
        <input type="text" /><br/>
        <label>密码：</label>
        <input type="text" /><br/>
        <br/>
        <br/>
        <input type="button" value="提交"/>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
