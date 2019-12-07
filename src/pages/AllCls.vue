<!--
 * @Author: 陈晶华
 * @Date: 2019-12-05 09:56:55
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-12-07 09:52:10
 * @Description: "..."
 -->


<template>
  <div id="AllCls">
      <Atop :id='id'/>
      <AFimgrun/>
      <Aterm/>
      <Allgoods/>
  </div>
</template>

<script>
import Atop from '../components/Atop'
import AFimgrun from '../components/AFimgrun'
import Aterm from '../components/Aterm'
import Allgoods from '../components/Allgoods'

export default {
  name: 'AllCls',
  props:['id'],
  components:{
      Atop,AFimgrun,Aterm,Allgoods
  },
  mounted(){
  // console.log(this.id)
}
}

</script>

<style scoped>
 
</style>
