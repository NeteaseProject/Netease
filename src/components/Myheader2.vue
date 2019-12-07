<!--
 * @Author: 陈晶华
 * @Date: 2019-11-28 20:31:33
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-12-02 10:58:50
 * @Description: 
 -->

<template>
   <div class="Myheader2">
     <div class="myhead_top">
        <p class="erweima"><span class="iconfont icon-erweima"></span></p>
     </div>
     <div class="myinfo">
       <div class="m_headinfo">
         <router-link to="#">
           <img class="M_pic" src="static/img/headpic2.jpg" alt="">
         </router-link>
         <span class="username">17689013321</span>
       </div>
       <p class="qiandao">
         <span class="iconfont icon-qiandao_o"></span>
         <span>每日签到</span>
       </p>
     </div>
   </div>
</template>

<script>
export default {
  name: 'Myheader2',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss" type="text/css">
  .Myheader2{
    height: 1rem;
    background: linear-gradient(to right,rgb(243,213,148),rgb(232,194,118));
    // background-image: url(../assets/img/header1.png);

    padding: 0 .15rem;
    padding-bottom: .18rem;
   
    .m_headinfo{
      display: flex;
      align-items: center;
    }
    .myhead_top{
      height: .45rem;
    }
    .erweima{
      height: .23rem;
      width: .23rem;
      background-color: rgb(190,152,76);
      display: flex;
      justify-content: center;
      align-items: center;
      float: right;
      margin: .1rem;
      margin-right: 0;
      border: 1px solid rgb(190,152,76);
    }
    .icon-erweima{
      font-size: .22rem;
      color: rgb(246,227,189);
      display: block;
    }
    .M_pic{
      display: block;
      height: .5rem;
      width: .5rem;
      border-radius: 50%;
    }
    .myinfo{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .username{
        font-size: .16rem;
        display: block;
        color: rgb(190,152,76);
        margin-left: .1rem;
      }
      .qiandao{
        font-size: .14rem;
        width: .8rem;
        height: .2rem;
        border-radius: .12rem;
        padding: .04rem .05rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: rgb(190,152,76);
        color:  rgb(246,227,189);
        // margin-right: .15rem;
        .icon-qiandao_o{
          font-size: .16rem;
        }
      }
    }
  }
</style>
