<!--
 * @Author: renhui
 * @Date: 2019-11-26 10:53:18
 * @LastEditors: renhui
 * @LastEditTime: 2019-11-26 16:56:56
 * @Description: ..
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
*{
  margin: 0;
  padding:0;
}
html,body{
  font-size: 26.67vw;
  font-family: '微软雅黑';
}
img{
  margin:0px;
  padding:0px;
}
a{
  text-decoration: none;
}
</style>
