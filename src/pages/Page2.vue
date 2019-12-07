<!--
 * @Author: 菲菲呀
 * @Date: 2019-11-26 09:31:07
 * @LastEditors: 菲菲呀
 * @LastEditTime: 2019-12-05 10:39:17
 * @Description: 
 -->
<template>
  <div class="fbanner">
    222
    <router-view/>
    <Ffooter></Ffooter>
  </div>
</template>
<script>
import Ffooter from '../components/Ffooter'
export default {
  name: 'Page2',
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


</style>
