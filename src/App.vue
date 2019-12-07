<!--
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
 * @Author: 陈晶华
 * @Date: 2019-11-26 09:28:31
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-11-30 15:24:49
=======
 * @Author: 菲菲呀
 * @Date: 2019-11-26 09:31:07
 * @LastEditors: 菲菲呀
 * @LastEditTime: 2019-12-04 14:56:35
>>>>>>> feifei
 * @Description: 
 -->
<template>
  <div id="app">
<<<<<<< HEAD
    <router-view/>
  </div>
</template>
=======
 * @Author: your name
 * @Date: 2019-11-19 20:37:42
 * @LastEditTime: 2019-11-25 20:20:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day23d:\wangyiyanxuan\src\App.vue
=======
 * @Author: renhui
 * @Date: 2019-11-26 10:53:18
 * @LastEditors: renhui
 * @LastEditTime: 2019-11-26 16:56:56
 * @Description: ..
>>>>>>> osior
 -->
<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<<<<<<< HEAD
>>>>>>> b421aef870892733c2a40e148d86f4daa135ffd5
=======
>>>>>>> osior
<script>
export default {
  name: 'App'
=======
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
>>>>>>> feifei
}
</script>

<style>
<<<<<<< HEAD
<<<<<<< HEAD
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
<<<<<<< HEAD
=======
>>>>>>> feifei
body,p,ul,ol,dl,dd,h1,h2,h3,h4,h5,h6,hr,td,input,textarea{
	margin:0;
	padding:0;
}
a{
	text-decoration: none;
}
<<<<<<< HEAD
html,body{
	height:100%;
}
body{
  background-color: #eee;
}
html{
  font-size: 26.67vw;
=======
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
>>>>>>> b421aef870892733c2a40e148d86f4daa135ffd5
=======
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
>>>>>>> osior
=======
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
>>>>>>> feifei
}
</style>
