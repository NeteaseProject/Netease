<!--
 * @Author: 陈晶华
 * @Date: 2019-11-28 20:31:33
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-11-30 15:26:07
 * @Description: 
 -->

<template>
   <div class="Mbanner">
       <div class="banner_content">
           <mt-swipe :show-indicators="false" class="myswipe">
                <mt-swipe-item v-for="(item,index) in mbannerinfos" :key="index">
                    <router-link :to="item.tourl">
                        <img :src="item.mpic" alt="">
                    </router-link>
                </mt-swipe-item>
            </mt-swipe>
       </div>
   </div>
</template>

<script>
export default {
  name: 'Mbanner',
  data () {
    return {
        mbannerinfos:[]
    }
  },
  created:function(){
      fetch("http://localhost:3000/m_banner")
      .then(res=>{
          return res.json()
      })
      .then(data=>{
          this.mbannerinfos=data;
      })
      .catch(err=>{
          console.log(err)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss" type="text/css">
 .Mbanner{
     padding: .1rem;
     height: .75rem;
     .banner_content{
         height: 100%;
         border-radius: .05rem;
        //  background-color: rgb(236, 215, 215);
     }
     .myswipe{
         height: 100%;
         width: 100%;
     }
     img{
         height: .75rem;
         width: 100%;
         display: block;
         border-radius: .05rem;
     }
 }
</style>
