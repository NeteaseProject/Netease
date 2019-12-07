<!--
 * @Author: 陈晶华
 * @Date: 2019-11-26 09:28:31
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-12-03 18:51:19
 * @Description: "..."
 -->
<template>
    <ul class="MyCls">
        <li :class='{"m_clsli":index==nowindex}' v-for="(item,index) in m_classes" :key="index" @touchstart="ChangeCls(index,item.typeid)">{{item.clsname}}</li>
    </ul>
</template>
<script>
export default {
  name: 'MyCls',
   data () {
        return {
         m_classes:[],
         nowindex:""
        }
   },
   methods:{
       ChangeCls(index,typeId){
           this.nowindex=index;
            this.$store.commit('changeCls',typeId)
       }
   },
     created(){
        fetch(" http://localhost:3000/m_Cls")
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            this.m_classes=data;
            // console.log(this.m_classes)
        })
 }
}
</script>
<style scoped  lang="scss" type="text/css">
  .MyCls{
      height:.5rem;
      font-size: .14rem;
      display: flex;
      justify-content: space-around;
      list-style: none;
      align-items: center;
      margin-bottom: .15rem;
      li{
          height: .25rem;
          width: .9rem;
          text-align: center;
          border-radius: .2rem;
        //   background-color: #fff;
          line-height: .25rem;
      }
      .m_clsli{
          background-color: rgb(255, 58, 58);
          color: #ffffff;
      }
  }
</style>
