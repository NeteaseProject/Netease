<!--
 * @Author: osier
 * @Date: 2019-12-04 10:31:19
 * @LastEditors: osier
 * @LastEditTime: 2019-12-05 18:05:41
 * @Description: ..
 -->
<template>
  <div class="shopheaderBox">
      <p>购物车</p>
      <div class="shcontent">
        <img src="../../src/assets/img/lingquan.jpg" alt="领券">
        <span class="iconfont icon-wodefenxiang"></span>
      </div>
  </div>
</template>

<script>
export default {
    name:'Shoppingheader',
    data(){
        return{
            
        }
    }
}
</script>


<style lang="scss" scoped="" type="text/css">
.shopheaderBox{
     width:100%;
     height:.6rem;
     margin:0 auto;
     display: flex;
     position: fixed;
     top:0;
     left: 0;
     background-color: #fff;
     justify-content: space-between;
     align-items: center;
     box-sizing: border-box;
     border-bottom:0.5px solid rgb(227, 231, 230);
     p{
       font-size:.18rem;
       padding-left:20px;
     }
     .shcontent{
          width:30%;
          height:.6rem;
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding-right:10px;
       img{
          width:.5rem;
          height:0.3rem;
       }
       .iconfont{
          font-size: 19px;
       }
     }
}
</style>