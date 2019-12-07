<!--
 * @Author: renhui
 * @Date: 2019-11-26 16:28:43
 * @LastEditors: osier
 * @LastEditTime: 2019-12-05 14:35:45
 * @Description: ..
 -->
  <template>
   <div class="shoppingbox">
        <Shoppingheader></Shoppingheader>
        <Shoppingsecond></Shoppingsecond>
        <Shoppingthird></Shoppingthird>
        <Shoppinglike></Shoppinglike>
   </div>
   
 </template>
 
 <script>
 import Shoppingheader from '../components/Shoppingheader'
 import Shoppingsecond from '../components/Shoppingsecond'
 import Shoppingthird from '../components/Shoppingthird'
 import Shoppinglike from '../components/Shoppinglike'

 export default {
    name:'Shoppingcar',
    data(){
      return{

      }
    },
    components:{
        Shoppingheader,Shoppingsecond,Shoppingthird,Shoppinglike
    }
 }
 </script>
 
 <style lang="scss" scoped="" type="text/css">
 .shoppingbox{
     width:100%;
     height:100%;
     background-color: rgb(245, 245, 245);
 }
 </style>

