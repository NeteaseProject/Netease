<!--
 * @Author: 菲菲呀
 * @Date: 2019-11-26 09:31:07
 * @LastEditors: 菲菲呀
 * @LastEditTime: 2019-12-06 10:03:24
 * @Description: 
 -->
<template>
  <div class="fbanner">
     <mt-swipe :auto="2000">
        <mt-swipe-item v-for="(FbannerImg,index) in FbannerImgs" :key="index">
            <a href="#">
                <img class="imgs" :src="FbannerImg.src" alt="">
            </a>
        </mt-swipe-item>
    </mt-swipe> 
    <span class="binggo" v-show="ok">
        <span class="iconfont icon-qiandao1"></span>
        <span class="binggoing">签到</span>
    </span>
  </div>
</template>
<script>
export default {
  name: 'Fbanner',
  data () {
    return {
        ok:true,
        FbannerImgs:[]
    }
  },
  methods:{
      showIcon(){
        if(
            !!document.documentElement.scrollTop &&
            document.documentElement.scrollTop <= 1000
        ){            
            this.ok = true
        }else{
            this.ok = false
        }
        // console.log(document.documentElement.scrollTop);
      }
  },
  created(){
      fetch("/api/FbannerImgs")
      .then(res=>{
          return res.json();
      })
      .then(data=>{
          this.FbannerImgs = data;
      })
      .catch(err=>{
          console.log(err)
      })
  },
  mounted(){
       window.addEventListener("scroll",this.showIcon);
  }
}
</script>

<style lang="scss" scoped="" type="text/css">
.fbanner{
    width:100%;
    height:2rem;
    // margin-top:.8rem;
    z-index:400;
    .imgs{
        display: block;
        width:100%;
        height:2rem;
    }
    .binggo{
        display: block;
        width:.65rem;
        height:.3rem;
        background:white;
        position:fixed;
        right:0;
        top:1.5rem;
        border-bottom-left-radius: .15rem;
        border-top-left-radius: .15rem;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: space-around;
        z-index:800;
        .icon-qiandao1{
            font-size:.2rem;
            color: #feae25;
            margin-left:.1rem;
        }
        .binggoing{
            font-size:12px;
        }
    }
}
 .fbanner mt-swipe{
     width:100%;
     height:2rem;
 }

</style>
