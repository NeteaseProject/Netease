<!--
 * @Author: osier
 * @Date: 2019-11-28 00:17:26
 * @LastEditors: osier
 * @LastEditTime: 2019-11-28 20:17:19
 * @Description: ..
 -->
<template>
  <div class="deprice">
      <div class="depcontent">
         <div class="depriceLeft">
             <p class="de1">新鲜尝鲜价</p>
             <span>￥88<i>￥108</i></span>
         </div>
         <div class="depriceRight">
             <p class="de1">距结束3天13小时</p>
             <p>仅剩325件</p>
         </div> 
      </div>
  </div>
</template>

<script>
export default {
    name:'Detilesprice',
    data(){
        return{
            
        }
    }
}
</script>


<style lang="scss" scoped="" type="text/css">
.deprice{
    width:100%;
    height:.7rem;
    background-color: rgb(238, 123, 81);
    .depcontent{
        width:95%;
        height:100%;
        background-color: transparent;
        margin-left:2.5%;
        display:flex;
        align-items:center;
        justify-content: space-between;
        .depriceLeft{
            height:.7rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .depriceRight{
            text-align: right;
        }
    }
}
.de1{
    margin-bottom:6px;
}
p{
    font-size:14px;
    color:white;
    font-weight:200;
}
span{
    font-size:17px;
    font-weight:200;
    color:white;
}
i{
    font-size:12px;
    font-weight:200;
    color:white;
    text-decoration: line-through;
}
</style>