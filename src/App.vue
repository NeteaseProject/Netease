<!--
 * @Author: your name
 * @Date: 2019-11-19 20:37:42
 * @LastEditTime: 2019-11-25 20:20:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day23d:\wangyiyanxuan\src\App.vue
 -->
<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
*{
  margin:0;
  padding:0;
}
html{
  font-size:26.67vw;
}
li{
  list-style:none;
}
a{
  text-decoration: none;
  color:black;
}
</style>
