<!--
 * @Author: 陈晶华
 * @Date: 2019-11-26 09:28:31
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-12-07 10:05:15
 * @Description: "..."
 -->
<template>
   <div class="Aselect">
       <p class="san"></p>
       <h4>所有分类</h4>
       <ul class="Acls">
           <li v-for="(item,index) in agetcls" :key="index" :class="[index==oldindex?'red':'']" @touchstart="Acheck(index,item.goodsClass,item.id)">{{item.goodsClass}}</li>
       </ul>
   </div>
</template>
<script>


export default {
  name: 'Csearch',
  props:['id'],
   data () {
        return {
          agetcls:[],
          oldindex:0
      
        }
   },
     created(){
        fetch("http://localhost:3000/clist")
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            this.agetcls=data
            // console.log(this.agetcls)
        })
        .catch(err=>{
            console.log(err)
        })
    },
    methods:{
      Acheck(index,typename,id){
          this.oldindex=index;
          this.$emit('func',typename)
        //   console.log(id)
          this.$store.commit("savetypeId",id)
      }
  }
}
</script>
<style scoped  lang="scss" type="text/css">
 .Aselect{
     font-size: .14rem;
     width: 3.4rem;
     padding: .1rem;
     box-sizing: border-box;
     margin: 0 auto;
     position: relative;
    //  border: 1px solid #fff;
     .san{
         width: 0;
         height: 0;
         border: .08rem solid transparent;
         border-bottom-color: #fff;
         margin: 0 auto;
        //  margin-top: -.5rem;
        position: absolute;
        top: -.16rem;
        left: 1.6rem;

     }
     h4{
     font-weight: normal;

     }
     ul{
         list-style: none;
         display: flex;
         flex-wrap: wrap;
         justify-content: space-between;
         li{
             padding: 0 .15rem;
             flex-shrink: 1;
             border: 1px solid rgb(175, 174, 174);
             border-radius: .05rem;
             margin:.1rem;
             line-height: .27rem;
             font-size: .13rem;
         }
         .red{
             color: rgb(219, 64, 64);
             border-color: rgb(219, 64, 64);
         }
     }
 }
</style>
