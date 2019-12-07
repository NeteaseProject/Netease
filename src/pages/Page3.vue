<!--
 * @Author: 菲菲呀
 * @Date: 2019-11-26 09:31:07
 * @LastEditors: 菲菲呀
 * @LastEditTime: 2019-12-05 11:53:31
 * @Description: 
 -->
<template>
  <div class="fbanner">
    333
    <router-view/>
    <Ffooter></Ffooter>
  </div>
</template>
<script>
import Ffooter from '../components/Ffooter'
export default {
  name: 'Page3',
  data () {
    return {
    }
  },
//   beforeEnter:(to,from,next)=>{
// if(!localStorage.getItem("name")){
//           next('/Page1')
//         } else{
//           console.log("守卫"+"------------")
//         next();
//         }            
        
//   },
  components:{
    Ffooter
  }
}
</script>

<style lang="scss" scoped="" type="text/css">


</style>
