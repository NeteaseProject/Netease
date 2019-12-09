<!--
 * @Author: 陈晶华
 * @Date: 2019-11-26 10:55:39
 * @LastEditors: osier
 * @LastEditTime: 2019-12-09 20:22:59
 * @Description: "..."
 -->

<template>
  <div id="">
    <transition name="fade1">
      <Myheader1 v-show="isShow"/>
    </transition>
    <transition name="fade2">
      <Myheader2 id="searchBar" v-show="!isShow"/>
    </transition>
      <Mvip/>
      <MOrder/>
      <Mbanner/>
      <Mymoney/>
      <Mvipclub/>
      <Myserver/>
      <MyCls :class="['fixed','write']"/>
      <Mclsgoods/>
      <Ffooter class="index_footer"></Ffooter>
    <router-view/>
  </div>
</template>

<script>
import Myheader1 from '../components/Myheader1'
import Myheader2 from '../components/Myheader2'
import Mvip from '../components/Mvip'
import MOrder from '../components/MOrder'
import Mbanner from '../components/Mbanner'
import Mymoney from '../components/Mymoney'
import Myserver from '../components/Myserver'
import Mvipclub from '../components/Mvipclub'
import MyCls from '../components/MyCls'
import Mclsgoods from '../components/Mclsgoods'
import Ffooter from '../components/Ffooter'


export default {
  name: 'Preson',
  components:{
      Myheader1,Myheader2,Mvip,MOrder,Mbanner,Mymoney,Myserver,Mvipclub,MyCls,Mclsgoods,Ffooter
      
  },
  data(){
    return{
      isShow:"true",
      is:false
    }
  },
  mounted(){
    window.addEventListener('scroll', this.handleScroll)
  },
  methods:{
    handleScroll(){
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      let offsetTop1 = document.querySelector('#searchBar').offsetTop
      scrollTop > offsetTop1 ? this.isShow = true : this.isShow = false
    }
  }


}
</script>

<style scoped>
.fade1-enter-active, .fade1-leave-active {
  transition: opacity .2s;
}
.fade1-enter, .fade1-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.fade2-enter-active{
  transition: opacity 1s;
}
.fade2-enter, .fade2-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.fixed{
  position: sticky;
  top: .5rem;
  left: 0;
}
.write{
  background-color: rgb(253, 253, 253);
}
.index_footer{
  position:fixed;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
}
</style>
