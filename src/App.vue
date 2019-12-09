<!--
 * @Author: osier
 * @Date: 2019-12-07 20:27:40
 * @LastEditors: osier
 * @LastEditTime: 2019-12-09 14:08:27
 * @Description: ..
 -->

<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <transition name="component-fade" mode="in-out">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {

    }
  },
  components:{
    
  }
}
</script>

<style>
body,p,ul,ol,dl,dd,h1,h2,h3,h4,h5,h6,hr,td,input,textarea{
	margin:0;
	padding:0;
}
a{
	text-decoration: none;
}
html,body{
	height:100%;
  font-size: 26.67vw;
  font-family: '微软雅黑';
}
*{
  margin:0;
  padding:0;
}
li{
  list-style:none;
}
a{
  text-decoration: none;
  color:black;
}
img{
  margin:0px;
  padding:0px;
}
body{
  background:rgb(244,244,244);
}
.component-fade-enter-active, .component-fade-leave-active {
    /* transition: opacity .3s ease; */
    transition: all .3s ease; 
}
.component-fade-enter, .component-fade-leave-to {
    /* opacity: 0; */
    transform:translateX(-100%);
}
</style>
