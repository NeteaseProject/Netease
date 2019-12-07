<!--
 * @Author: 菲菲呀
 * @Date: 2019-11-29 14:28:13
 * @LastEditors: 菲菲呀
 * @LastEditTime: 2019-11-29 15:22:45
 * @Description: 
 -->

<template>
    <div>
        <Fnewheader></Fnewheader>
        <Fnewlist></Fnewlist>
    </div>
</template>

<script>
import Fnewheader from "../components/Fnewheader"
import Fnewlist from "../components/Fnewlist"


export default {
  name: 'Fnews',
  data () {
    return {
     
    }
  },
  components:{
      Fnewheader,Fnewlist
  }
}
</script>


<style scoped>
body{
    background:#f4f4f4;
}
</style>
