<!--
 * @Author: 陈晶华
 * @Date: 2019-11-26 10:55:39
 * @LastEditors: osier
 * @LastEditTime: 2019-12-09 21:10:40
 * @Description: "..."
 -->

<template>
  <div id="app">
    <Csearch></Csearch>
    <Clist class="c_left"></Clist>
    <Cright class="c_right"></Cright>
    <Ffooter class="index_footer"></Ffooter>
    <router-view/>
  </div>
</template>

<script>
import Csearch from '../components/Csearch'
import Clist from '../components/Clist'
import Cright from '../components/Cright'
import Ffooter from '../components/Ffooter'


export default {
  name: 'Class',
  components:{
      Csearch,Clist,Cright,Ffooter
  }
}
</script>

<style scoped>
  .c_left{
    /* float: left; */
    position: fixed;
    left: 0;
    /* top: .5rem; */
    margin-top: .5rem;
  }
  .c_right{
    float: right;
    margin-top: .5rem;
  }
  .index_footer{
  position:fixed;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
}
</style>
