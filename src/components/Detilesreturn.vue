<!--
 * @Author: osier
 * @Date: 2019-11-29 20:49:15
 * @LastEditors: osier
 * @LastEditTime: 2019-12-02 09:37:53
 * @Description: ..
 -->
<template>
  <div class="returnBox">
      <p><span>购物返</span>&nbsp;&nbsp;新用户最高返<i>￥0.88回馈金+8积分</i></p>
      <span class="iconfont icon-youxiang"></span>
  </div>
</template>

<script>
export default {
    name:'Detilesreturn',
    data(){
        return{
            
        }
    }
}
</script>

<style lang="scss" scoped="" type="text/css">
.returnBox{
    width:100%;
    height:.5rem;
    margin-top:10px;
    display: flex;
    justify-content:space-around;
    align-items: center;
    background-color: white;
    p{
        font-size:14px;
        margin-left: -12px;
        span{
            color: rgb(189, 189, 189);
        }
        i{
            font-style: normal;
            color:rgb(211, 12, 12);
        }   
    }
}
</style>