<!--
 * @Author: 菲菲呀
 * @Date: 2019-11-26 09:31:07
 * @LastEditors: 菲菲呀
 * @LastEditTime: 2019-12-06 10:02:23
 * @Description: 
 -->
<template>
<div class="mainBox">
    <div class="Aiperson" v-for="(Fnew_aipel,index) in Fnew_aipels" :key="index" @click="gopage(Fnew_aipel.id)">
        <img :src="Fnew_aipel.src" alt="">
        <div class="left_ai">
            <p>{{Fnew_aipel.tit1}}</p>
            <span>{{Fnew_aipel.tit2}}</span>
        </div>
        <div class="icon">
            <span class="iconfont icon-youxiang"></span>
        </div>
    </div>
</div>
  
</template>
<script>
export default {
  name: 'Fnewlist',
  data () {
    return {
        Fnew_aipels:[]
    }
  },
  created(){
      fetch("/api/Fnew_aipels")
      .then(res=>{
          return res.json();
      })
      .then(data=>{
          this.Fnew_aipels = data;
      })
      .catch(err=>{
          console.log(err)
      })
  },
  methods:{
    gopage(id){
        console.log("当前被点的id"+id);
        if(id=="001"){
            this.$router.push({
                path:'Faiperson'
                })
            }
        }
    }
}
</script>

<style lang="scss" scoped="" type="text/css">
.Aiperson{
    width:100%;
    height:.6rem;
    background:white;
    display: flex;
    margin-top:.18rem; 
    align-items: center;
    img{
        width:.4rem;
        height: .4rem;
        display: block;
        margin:0 .15rem;
    }
    .left_ai{
        width:3.8rem;
        height:100%;
        p{
            font-size: 16px;
            line-height: .3rem;
            margin-top:.04rem;
        }
        span{
            font-size: 13px;
            display: block;
        }
    }
    .icon{
        width:.4rem;
        height:100%;
        display: flex;
        align-items: center;
        // margin-left:.3rem;
    }
}
</style>
