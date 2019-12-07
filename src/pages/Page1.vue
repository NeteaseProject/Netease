<!--
 * @Author: 菲菲呀
 * @Date: 2019-11-26 09:31:07
 * @LastEditors: 菲菲呀
 * @LastEditTime: 2019-12-04 14:45:51
 * @Description: 
 -->
<template>
  <div class="fbanner">
    111
    <router-view/>
    <Ffooter></Ffooter>
  </div>
</template>
<script>
import Ffooter from '../components/Ffooter'
export default {
  name: 'Page1',
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
