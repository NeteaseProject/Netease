<!--
 * @Author: osier
 * @Date: 2019-12-04 20:57:32
 * @LastEditors: osier
 * @LastEditTime: 2019-12-05 11:45:14
 * @Description: ..
 -->
<template>
  <div class="shseBox">
      <div class="shsetop">
          <p>
              <img src="../../src/assets/img/point.jpg" alt="">
              30天无忧退换货
          </p>
          <p>
              <img src="../../src/assets/img/point.jpg" alt="">
              48小时快速退款
          </p>
          <p>
              <img src="../../src/assets/img/point.jpg" alt="">
              满88元免邮费
          </p>
      </div>
      <router-link to="./Detiles">
         <div class="shsecont">
            <span class="iconfont icon-gouwuche1"></span>
            <p>去添加点什么吧~</p>
         </div>
      </router-link>
  </div>
</template>

<script>
export default {
    name:'Shoppingsecond',
    data(){
        return{
            
        }
    }
}
</script>


<style lang="scss" scoped="" type="text/css">
.shseBox{
    width:100%;
    height:3rem;
    .shsetop{
        width:95%;
        margin-left:2.5%;
        height:.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        p{
            font-size: 14px;
            img{
                width:8px;
                height:8px;
                border-radius: 50%;
            }
        }
    }
    .shsecont{
        width:100%;
        background-color: rgb(245, 245, 245);
        display: flex;
        padding:1rem 0;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        .iconfont{
            font-size:60px;
        }
        p{
            font-size:.14rem;
            padding-top:10px;
            color:rgb(163, 162, 162);
        }
    }
}
</style>