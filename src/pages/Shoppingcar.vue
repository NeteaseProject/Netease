<!--
 * @Author: renhui
 * @Date: 2019-11-26 16:28:43
 * @LastEditors: osier
 * @LastEditTime: 2019-12-09 20:54:02
 * @Description: ..
 -->
  <template>
   <div class="shoppingbox">
        <Shoppingheader></Shoppingheader>
        <Shoppingsecond></Shoppingsecond>
        <Shoppingthird></Shoppingthird>
        <Shoppinglike></Shoppinglike>
        <Ffooter class="index_footer"></Ffooter>
        
   </div>
   
 </template>
 
 <script>
 import Shoppingheader from '../components/Shoppingheader'
 import Shoppingsecond from '../components/Shoppingsecond'
 import Shoppingthird from '../components/Shoppingthird'
 import Shoppinglike from '../components/Shoppinglike'
 import Ffooter from '../components/Ffooter'


 export default {
    name:'Shoppingcar',
    data(){
      return{

      }
    },
    components:{
        Shoppingheader,Shoppingsecond,Shoppingthird,Shoppinglike,Ffooter
    }
 }
 </script>
 
 <style lang="scss" scoped="" type="text/css">
 .shoppingbox{
     width:100%;
     height:100%;
     background-color: rgb(245, 245, 245);
 }
  .index_footer{
  position:fixed;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
}
 </style>

