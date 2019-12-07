<!--
 * @Author: 菲菲呀
 * @Date: 2019-11-26 10:42:46
 * @LastEditors: 菲菲呀
 * @LastEditTime: 2019-12-02 17:28:53
 * @Description: 
 -->
<template>
  <div class="Indexbox">
      <Fheader class="fban"></Fheader>
      <Fbanner></Fbanner>
      <Fselflogo></Fselflogo>
      <Fmyclassify></Fmyclassify>
      <Fnewbuy></Fnewbuy>
      <Fshopping></Fshopping>
      <Flikegoods></Flikegoods>
      <Ffooter class="index_footer"></Ffooter>
  </div>
</template>

<script>
import Fheader from "../components/Fheader"
import Fbanner from "../components/Fbanner"
import Fselflogo from "../components/Fselflogo"
import Fmyclassify from "../components/Fmyclassify"
import Fnewbuy from "../components/Fnewbuy"
import Fshopping from "../components/Fshopping"
import Flikegoods from "../components/Flikegoods"
import Ffooter from "../components/Ffooter"


export default {
  name: 'Index',
  data () {
    return {
    //  isaction:true
    }
  },
  components:{
      Fheader,Fbanner,Fselflogo,Fmyclassify
      ,Fnewbuy,Fshopping,Flikegoods,Ffooter
  },
  methods:{
    
  }
}
</script>


<style scoped>
/* .fban{
  position: fixed;
  left:0;
  top:0;
  z-index:1000;
} */
.index_footer{
  position:fixed;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
}
</style>
