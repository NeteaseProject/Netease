<!--
 * @Author: renhui
 * @Date: 2019-11-26 16:28:43
 * @LastEditors: osier
 * @LastEditTime: 2019-12-02 21:27:36
 * @Description: ..
 -->
  <template>
   <div class="detilesbox">
       <Detilesheader></Detilesheader>
       <Detilesbanner></Detilesbanner>
       <Detilesprice></Detilesprice>
       <Detilesnew></Detilesnew>
       <Detilesreturn></Detilesreturn>
       <Detilesdetile></Detilesdetile>
       <Detilescustomer></Detilescustomer>
       <Detileslike></Detileslike>
       <Detilesfooter></Detilesfooter>
   </div>
   
 </template>
 
 <script>
 import Detilesheader from '../components/Detilesheader'
 import Detilesbanner from '../components/Detilesbanner'
 import Detilesprice from '../components/Detilesprice'
 import Detilesnew from '../components/Detilesnew'
 import Detilesreturn from '../components/Detilesreturn'
 import Detilesdetile from '../components/Detilesdetile'
 import Detilescustomer from '../components/Detilescustomer'
 import Detileslike from '../components/Detileslike'
 import Detilesfooter from '../components/Detilesfooter'


 export default {
    name:'Detiles',
    data(){
      return{

      }
    },
    components:{
        Detilesheader,Detilesbanner,Detilesprice,
        Detilesnew,Detilesreturn,Detilesdetile,
        Detilescustomer,Detileslike,Detilesfooter
    }
 }
 </script>
 
 <style lang="scss" scoped="" type="text/css">
 .detilesbox{
     width:100%;
     background-color: rgb(241, 241, 241);
 }
 </style>

