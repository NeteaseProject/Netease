<!--
 * @Author: 陈晶华
 * @Date: 2019-11-26 10:55:39
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-11-28 20:16:48
 * @Description: "..."
 -->

<template>
  <div id="app">
    <Csearch></Csearch>
    <Clist class="c_left"></Clist>
    <Cright class="c_right"></Cright>
    <router-view/>
  </div>
</template>

<script>
import Csearch from '../components/Csearch'
import Clist from '../components/Clist'
import Cright from '../components/Cright'

export default {
  name: 'Class',
  components:{
      Csearch,Clist,Cright
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
</style>
