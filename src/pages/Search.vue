<!--
 * @Author: renhui
 * @Date: 2019-11-26 16:28:43
 * @LastEditors: osier
 * @LastEditTime: 2019-12-04 14:56:53
 * @Description: ..
 -->
  <template>
   <div class="searchbox">
       <Searchheader></Searchheader>
       <Searchhistory></Searchhistory>
       <Searchhot></Searchhot>
   </div>
   
 </template>
 
 <script>
 import Searchheader from '../components/Searchheader'
 import Searchhistory from '../components/Searchhistory'
 import Searchhot from '../components/Searchhot'

 export default {
    name:'Search',
    data(){
      return{

      }
    },
    components:{
        Searchheader,Searchhistory,Searchhot
    }
 }
 </script>
 

 <style lang="scss" scoped="" type="text/css">
 .searchbox{
     width:100%;
    
 }
 </style>

