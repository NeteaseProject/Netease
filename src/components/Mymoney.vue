<!--
 * @Author: 陈晶华
 * @Date: 2019-11-28 20:31:33
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-11-30 16:13:29
 * @Description: 
 -->

<template>
   <div class="Mymoney">
       <div class="moneycontent">
           <p class="moneytit">我的资产</p>
           <ul class="moneylist">
               <li>
                   <router-link to="#" class="lis">
                       <span class="m_count">￥0</span>
                       <span class="clsname">回馈金</span>
                   </router-link>
               </li>
               <li>
                   <router-link to="#" class="lis">
                       <span class="m_count">1</span>
                       <span class="clsname">优惠券</span>
                   </router-link>
               </li>
               <li>
                   <router-link to="#" class="lis">
                       <span class="m_count">1</span>
                       <span class="clsname">积分</span>
                   </router-link>
               </li>
               <li>
                   <router-link to="#" class="lis">
                       <span class="m_count">0</span>
                       <span class="clsname">红包</span>
                   </router-link>
               </li>
               <li>
                   <router-link to="#" class="lis">
                       <span class="m_count">￥0</span>
                       <span class="clsname">回馈金</span>
                   </router-link>
               </li>
               <li>
                   <router-link to="#" class="lis">
                       <span class="m_count">0</span>
                       <span class="clsname">礼品卡</span>
                   </router-link>
               </li>
               <li>
                   <router-link to="#" class="lis">
                       <span class="m_count">￥0</span>
                       <span class="clsname">津贴</span>
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
 .Mymoney{
    //  height: 1rem;
     padding: 0 .1rem;
     .moneycontent{
         height: 100%;
         width: 100%;
         background-color: #fff;
         border-radius: .05rem;
     }
     .moneytit{
         font-size: .16rem;
         line-height: .44rem;
         padding-left: .1rem;
     }
     .moneylist{
         list-style: none;
         height: .66rem;
         width: 100%;
        //  background-color: rgb(209, 132, 132);
        display: flex;
        align-items: center;
        overflow-x: auto;
         li{
             padding: 0 .15rem;
             flex-shrink: 0;
             .m_count{
                font-size: .16rem;
             }
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
