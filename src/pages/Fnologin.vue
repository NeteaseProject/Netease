<!--
 * @Author: 菲菲呀
 * @Date: 2019-11-26 09:31:07
 * @LastEditors: 菲菲呀
 * @LastEditTime: 2019-12-04 17:39:33
 * @Description: 
 -->
<template>
  <div class="f_box">
        <p>购物车</p>
        <span class="span_one">登录后可同步电脑和手机购物车的商品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;></span>
        <div class="car_img">
            <img src="../../static/img/emptyCart.jpg" alt="">
            <p>空空如也</p>
        </div>
        <router-view/>
        <Ffooter></Ffooter>
  </div>
</template>
<script>
import Ffooter from '../components/Ffooter'
export default {
  name: 'Fnologin',
  data () {
    return {
    }
  },
  components:{
    Ffooter
  }
}
</script>

<style lang="scss" scoped="" type="text/css">
.f_box{
    height:6rem;
    background: white;
    width:100%;
    padding-top:.14rem;
    box-sizing: border-box;
    p{
        font-size:.2rem; 
        margin-left:.15rem;
        margin-bottom: .14rem;
        letter-spacing: .02rem;
    }
    .span_one{
        display: block;
        height:.5rem;
        color:rgb(237,145,34);
        background:rgb(252,244,205);
        font-size: .16rem;
        padding-left:.1rem;
        line-height: .5rem;
    }
    .car_img{
        width:1.7rem;
        height:1rem;
        position:fixed;
        left:0;
        right:0;
        top:0;
        bottom: 0;
        margin:auto;
        text-align: center;
        img{
           width:100%;
           height:100%;
        }
        p{
            font-size: 13px;
            color: rgb(137,137,137);
        }
    }
}

</style>
