<!--
 * @Author: 菲菲呀
 * @Date: 2019-11-29 14:28:13
 * @LastEditors: 菲菲呀
 * @LastEditTime: 2019-11-30 14:40:23
 * @Description: 
 -->

<template>
    <div>
        <Faiperbanner class="topbanner"></Faiperbanner>
        <Fdetailcon></Fdetailcon>
        <Faifooter class="botfooter"></Faifooter>
    </div>
</template>

<script>
import Faiperbanner from "../components/Faiperbanner"
import Fdetailcon from "../components/Fdetailcon"
import Faifooter from "../components/Faifooter"


export default {
  name: 'Faiperson',
  data () {
    return {
     
    }
  },
  components:{
      Faiperbanner,Fdetailcon,Faifooter
  }
}
</script>


<style scoped>
body{
    background:rgb(244,244,244);
    /* display: flex;
    flex-direction: column; */
}
/* html,body{
  height:100%;
} */
.topbanner{
  position:fixed;
  left:0;
  top:0;
}
.botfooter{
  position:fixed;
  left:0;
  bottom: 0;
}
</style>
