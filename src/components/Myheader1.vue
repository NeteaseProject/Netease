<!--
 * @Author: 陈晶华
 * @Date: 2019-11-28 20:31:33
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-12-02 11:22:08
 * @Description: 
 -->

<template>
   <div class="Myheader1" id="Myheader1">
      <div class="m_headinf">
         <router-link to="#">
           <img class="M_pic" src="static/img/headpic2.jpg" alt="">
         </router-link>
         <span class="m_username">17689013321</span>
       </div>
       <div class="m_activity">
         <p class="m_act m_act1">
            <span class="iconfont icon-qiandao_o"></span>
            <span>签到</span>
          </p>
          <p class="m_act">
            <span class="iconfont icon-tianchongxing-"></span>
            <span>超级会员</span>
          </p>
       </div>
       
   </div>
</template>

<script>
export default {
  name: 'Myheader1',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss" type="text/css">
#Myheader1{
  border: none;
}
  .Myheader1{
    height: .5rem;
    width: 100%;
    z-index: 1000;
    box-sizing: border-box;
    position: fixed;
    left: 0;
    top: 0;
    padding: 0 .15rem;
    // background-image: url(../assets/img/header1.png);
    background-color:rgb(252, 216, 138);
    background-size: 100% 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .m_headinf{
      display: flex;
      align-items: center;
      .M_pic{
        height: .3rem;
        width: .3rem;
        border-radius: 50%;
        display: block;
      }
      .m_username{
        font-size: .12rem;
        display: block;
        margin-left: .1rem;
        color:  rgb(190,152,76);
      }
    }
    .m_activity{
      display: flex;
      .m_act{
        width: .7rem;
        height: .2rem;
        background-color: rgb(190,152,76);
        color:rgb(251,249,246);
        font-size: .11rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: .13rem;
        .icon-qiandao_o{
          font-size: .13rem;
          color: rgb(255,221,177);
          margin-right: .03rem;
        }
        .icon-tianchongxing-{
           font-size: .13rem;
          color: rgb(255,239,213);
          margin-right: .03rem;
        }
      }
      .m_act1{
        width: .5rem;
        margin-right: .1rem;
      }
    }
    
  }
</style>
