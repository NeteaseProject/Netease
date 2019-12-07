<!--
 * @Author: 菲菲呀
 * @Date: 2019-11-26 09:31:07
 * @LastEditors: 菲菲呀
 * @LastEditTime: 2019-12-04 14:56:35
 * @Description: 
 -->
<template>
  <div id="app">
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
/* html,body{
	height:100%;
} */
html{
  font-size: 26.67vw;
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
