<!--
 * @Author: 陈晶华
 * @Date: 2019-11-28 20:31:33
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-11-30 15:25:15
 * @Description: 
 -->

<template>
   <div class="Order">
       <div class="order_tit">
           <span class="my_txt">我的订单</span>
           <router-link to="#" class="m_more">
               <span class="m_txt">查看全部</span>
               <span class="iconfont icon-youxiang"></span>
           </router-link>
       </div>
       <div class="order_list">
           <router-link to="#">
               <span class="iconfont icon-daifukuan"></span>
               <span>待付款</span>
           </router-link>
           <router-link to="#">
               <span class="iconfont icon-daifahuo m_icon"></span>
               <span>待发货</span>
           </router-link>
           <router-link to="#">
               <span class="iconfont icon-yifahuodingdan"></span>
               <span>已发货</span>
           </router-link>
           <router-link to="#">
               <span class="iconfont icon-daipingjia"></span>
               <span>待评价</span>
           </router-link>
           <router-link to="#">
               <span class="iconfont icon-shouhou m_icon"></span>
               <span>退换/售后</span>
           </router-link>
       </div>
   </div>
</template>

<script>
export default {
  name: 'Order',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss" type="text/css">
 .Order{
    //  height: 1.2rem;
    //  background-color: rgb(209, 110, 110);
     padding: .1rem;
     box-sizing: border-box;
    //  background-color: #fefefe;
 }
 .order_tit{
     height: .44rem;
    //  background-color: rgb(245, 220, 220);
     border-bottom: 1px solid rgb(211, 211, 211);
     display: flex;
     justify-content: space-between;
     align-items: center;
 }
 .my_txt{
     font-size: .16rem;
 }
 .m_txt{
     font-size: .13rem;
     display: block;
     color: #343434;
 }
 .m_more{
     display: flex;
 }
 .icon-youxiang{
     font-size: .14rem;
     display: block;
     margin-top: .015rem;
     color: #818181;
 }
 .order_list{
     display: flex;
     justify-content: space-around;
     align-items: center;
     padding-top: .12rem;
     span{
         display: block;
         font-size: .13rem;
         text-align: center;
         color: #333333;
     }
     .iconfont{
         font-size: .27rem;
         text-align: center;
     }
     .m_icon{
         font-size: .26rem;
     }
 }
</style>
