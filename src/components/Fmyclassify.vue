<!--
 * @Author: 菲菲呀
 * @Date: 2019-11-26 09:31:07
 * @LastEditors: 菲菲呀
 * @LastEditTime: 2019-12-06 10:02:00
 * @Description: 
 -->
<template>
  <div class="classifyBox">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
           <i v-for="(FclassifyImg,index) in FclassifyImgs" :key="index">
             <img :src="FclassifyImg.src" alt="">
             <span>{{FclassifyImg.tit}}</span>
           </i>
        </div>
        <div class="swiper-slide">
           <i v-for="(FclassifyImg,index) in FclassifyImgs" :key="index">
             <img :src="FclassifyImg.src" alt="">
             <span>{{FclassifyImg.tit}}</span>
           </i>
        </div>
    </div>
    <!-- Add Scrollbar -->
        <div class="swiper-scrollbar"></div>
      </div>
    </div>
</template>

<script>
import Swiper from "swiper"
export default {
  name: 'Fmyclassify',
  data () {
    return {
      FclassifyImgs:[]
    }
  },
  created(){
    fetch("/api/FclassifyImgs")
    .then(res=>{
      return res.json();
    })
    .then(data=>{
      this.FclassifyImgs = data;
      this.$nextTick(function(){
        var swiper = new Swiper('.swiper-container', {
          scrollbar: {
            el: '.swiper-scrollbar',
            hide: true,
            },
        });
      })
    })
    .catch(err=>{
      console.log(err)
    })
  }
}
</script>

<style lang="scss" scoped="" type="text/css">
@import url(https://unpkg.com/swiper/css/swiper.css);
   .classifyBox{
       width:100%;
      //  height:2rem;
       background:white;
   }
   .swiper-container{
       width:100%;
       height:2rem;
   }
   .swiper-slide{
     display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    i{
      font-style: normal;
      font-size:12px;
      span{
        margin-left: .05rem;
      }
    }
     img{
       display: block;
     width:.65rem;
     height:.65rem;
     }
   }
</style>
