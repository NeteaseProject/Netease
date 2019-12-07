<!--
 * @Author: osier
 * @Date: 2019-12-05 15:02:42
 * @LastEditors: osier
 * @LastEditTime: 2019-12-05 17:54:34
 * @Description: ..
 -->
<template>
   <div class="shoppingloginbox">
        <Shoppingheader></Shoppingheader>
        <Shoppingcarlogincontent></Shoppingcarlogincontent>
        <Shoppingthird></Shoppingthird>
        <Shoppinglike></Shoppinglike>
   </div>
   
 </template>
 
 <script>
 import Shoppingheader from '../components/Shoppingheader'
 import Shoppingcarlogincontent from '../components/Shoppingcarlogincontent'
 import Shoppingthird from '../components/Shoppingthird'
 import Shoppinglike from '../components/Shoppinglike'

 export default {
    name:'Shoppingcarlogin',
    data(){
      return{

      }
    },
    components:{
        Shoppingheader,
        Shoppingcarlogincontent
        ,Shoppingthird,Shoppinglike
    }
 }
 </script>
 
 <style lang="scss" scoped="" type="text/css">
 .shoppingloginbox{
     width:100%;
     height:100%;
     background-color: rgb(245, 245, 245);
 }
 </style>

