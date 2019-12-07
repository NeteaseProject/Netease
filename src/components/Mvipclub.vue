<!--
 * @Author: 陈晶华
 * @Date: 2019-11-28 20:31:33
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-11-30 18:12:42
 * @Description: 
 -->

<template>
   <div class="Mvipclub">
    <div class="vipcontent">
         <div class="order_tit">
           <span class="my_txt">会员俱乐部</span>
           <router-link to="#" class="m_more">
               <span class="m_txt">普通用户</span>
               <span class="iconfont icon-youxiang"></span>
           </router-link>
       </div>
       <div class="order_list">
           <router-link to="#">
               <span class="iconfont icon-xianjinquan iconpic" style="color:#e76e53"></span>
               <span>免费领礼券</span>
           </router-link>
           <router-link to="#">
               <span class="iconfont icon-gouwu m_icon iconpic" style="color:#508aff"></span>
               <span>超值年购</span>
           </router-link>
           <router-link to="#">
               <span class="iconfont icon-choujiang iconpic" style="color:#fed28d"></span>
               <span>积分抽大奖</span>
           </router-link>
           <router-link to="#">
               <span class="iconfont icon-duihuan iconpic" style="color:#fb6052"></span>
               <span>99积分抢兑</span>
           </router-link>
       </div>
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
 .Mvipclub{
    //  height: 1.2rem;
    //  background-color: rgb(209, 110, 110);
     padding: .1rem;
     box-sizing: border-box;
     background-color: #fff;
     margin: 0 .1rem;
     margin-top: .1rem;
    //  background-color: #fefefe;
 }

 .order_tit{
     height: .44rem;
     display: flex;
     justify-content: space-between;
     align-items: center;
     .icon-youxiang{
        font-size: .14rem;
        display: block;
        margin-top: .015rem;
        color: #818181;
    }
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
     .iconpic{
         font-size: .27rem;
         text-align: center;
     }
     .m_icon{
         font-size: .26rem;
     }
 }
</style>
