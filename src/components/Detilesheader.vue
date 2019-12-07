<!--
 * @Author: renhui
 * @Date: 2019-11-27 21:18:08
 * @LastEditors: osier
 * @LastEditTime: 2019-12-04 16:08:52
 * @Description: ..
 -->
<template>
  <div class="deheader">
      <span class="iconfont icon-fanhui1" @touchstart="Dback()"></span>
      <div class="deright">
         <span class="iconfont icon-home1"></span>
         <span class="iconfont icon-wodefenxiang"></span>
      </div>
  </div>
</template>

<script>
export default {
     name:'Detilesheader',
     data(){
         return{

         }
     },
     methods:{
        Dback(){
         this.$router.go(-1);
        }
     }
    
}
</script>

<style lang="scss" scoped="" type="text/css">
.deheader{
    width:100%;
    height:.3rem;
    background-color: white;
    position: fixed;
    top:0;
    left:0;
    z-index:2000;
    margin-bottom:15px;
    display:flex;
    align-items:center;
    padding-top:10px;
    justify-content: space-between;
    .deright{
        width:18%;
        padding-right:6%;
        display:flex;
        align-items:center;
        justify-content: space-between;
    }
    .iconfont{
        font-size:22px;
    }
    .icon-fanhui1{
        font-size:20px;
        padding-left:4%;
    }
}
</style>