<!--
 * @Author: 陈晶华
 * @Date: 2019-11-28 20:31:33
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-11-30 17:34:08
 * @Description: 
 -->

<template>
   <div class="Myserver">
       <div class="servercontent">
           <p class="servertit">我的资产</p>
           <ul class="moneylist">
               <li>
                   <router-link to="#" class="lis">
                       <span class="iconfont iconfont1 icon-pintuandingdan"></span>
                       <span class="clsname">拼团订单</span>
                   </router-link>
               </li>
               <li>
                   <router-link to="#" class="lis">
                       <span class="iconfont iconfont1 icon-zhongchoudingdan"></span>
                       <span class="clsname">拼团订单</span>
                   </router-link>
               </li>
               <li>
                   <router-link to="#" class="lis">
                       <span class="iconfont iconfont1 icon-yaoqingfanli"></span>
                       <span class="clsname">拼团订单</span>
                   </router-link>
               </li>
               <li>
                   <router-link to="#" class="lis">
                       <span class="iconfont iconfont1 icon-shouye"></span>
                       <span class="clsname">拼团订单</span>
                   </router-link>
               </li>
               <li>
                   <router-link to="#" class="lis">
                       <span class="iconfont iconfont1 icon-gouwu"></span>
                       <span class="clsname">拼团订单</span>
                   </router-link>
               </li>
               <li>
                   <router-link to="#" class="lis">
                       <span class="iconfont iconfont1 icon-dizhi"></span>
                       <span class="clsname">拼团订单</span>
                   </router-link>
               </li>
               <li>
                   <router-link to="#" class="lis">
                       <span class="iconfont iconfont1 icon-kefu1"></span>
                       <span class="clsname">拼团订单</span>
                   </router-link>
               </li>
               <li>
                   <router-link to="#" class="lis">
                       <span class="iconfont iconfont1 icon-shangwuhezuo"></span>
                       <span class="clsname">拼团订单</span>
                   </router-link>
               </li>
               <li>
                   <router-link to="#" class="lis">
                       <span class="iconfont iconfont1 icon-huikuijin"></span>
                       <span class="clsname">拼团订单</span>
                   </router-link>
               </li>
               <li>
                   <router-link to="#" class="lis">
                       <span class="iconfont iconfont1 icon-qi"></span>
                       <span class="clsname">拼团订单</span>
                   </router-link>
               </li>
               <li>
                   <router-link to="#" class="lis">
                       <span class="iconfont iconfont1 icon-shezhi"></span>
                       <span class="clsname">拼团订单</span>
                   </router-link>
               </li>
           </ul>
       </div>
   </div>
</template>

<script>
export default {
  name: 'Mbanner',
  data () {
    return {
        mbannerinfos:[]
    }
  },
  created:function(){
      fetch("http://localhost:3000/m_banner")
      .then(res=>{
          return res.json()
      })
      .then(data=>{
          this.mbannerinfos=data;
      })
      .catch(err=>{
          console.log(err)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss" type="text/css">
 .Myserver{
     margin: .1rem 0;
     padding: 0 .1rem;
     .servercontent{
         width: 100%;
         background-color: #fff;
         border-radius: .05rem;
     }
     .servertit{
         font-size: .16rem;
         line-height: .44rem;
         padding-left: .1rem;
     }
     .moneylist{
         list-style: none;
         width: 100%;
        display: flex;
        flex-wrap: wrap;
        .iconfont1{
            font-size: .25rem;
            color: rgb(18, 133, 241);
        }
        .icon-qi{
            font-size: .28rem;
            font-weight: bolder;
            color: rgb(18, 133, 241);
        }
         li{
             padding:.15rem .16rem;
             flex-shrink: 0;
         }
         .lis{
             display: block;
         }
         li span{
             font-size: .14rem;
             display: block;
            text-align: center;
            color: #3c3c3c;
         }
     }
 }
</style>
