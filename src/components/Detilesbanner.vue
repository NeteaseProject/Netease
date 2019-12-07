<!--
 * @Author: renhui
 * @Date: 2019-11-27 20:29:42
 * @LastEditors: osier
 * @LastEditTime: 2019-12-03 21:57:07
 * @Description: ..
 -->
 <template>
   <div class="bannerbox">
        <mt-swipe :auto="2000">
        <mt-swipe-item><img src="../../src/assets/img/detile-bg3.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../src/assets/img/detile-bg6.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../src/assets/img/detile-bg0.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../src/assets/img/detile-bg3.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../src/assets/img/detile-bg0.jpg" alt=""></mt-swipe-item>
</mt-swipe>
   </div>
 </template>
 
 <script>
 import { Swipe, SwipeItem } from 'mint-ui';
 export default {
     name:'Detilesbanner',
     data(){
         return{

         }
     }
 }
 </script>
 
<style lang="scss" scoped="" type="text/css">
 .bannerbox{
     width:100%;
     height:2.8rem;
     img{
         width:100%;
         height:2.8rem;
     }
 }

</style>
