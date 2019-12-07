<!--
 * @Author: 菲菲呀
 * @Date: 2019-11-26 09:31:07
 * @LastEditors: 菲菲呀
 * @LastEditTime: 2019-12-06 10:02:51
 * @Description: 
 -->
<template>
<div class="mainBox">
    <div class="timer">
        {{date}}
    </div>
   <p>机器人小选为您服务</p>
   <div class="detail_f">
       <img src="../../static/img/fper.jpg" alt="">
       <div class="right_box">
           您好，严选机器人很高兴为您服务，请输入您的问题或者选择下方流程入口~
       </div>
   </div>
    <div class="detail_twof">
       <img src="../../static/img/fper.jpg" alt="">
       <div class="right_twobox">
           <span class="hot_font">热门咨询</span>
           <hr>
           <ul>
               <li v-for="(aiperson,index) in aipersons" :key="index">{{aiperson.content}}</li>
               
           </ul>
       </div>
   </div>
</div>
  
</template>
<script>
export default {
  name: 'Fdetailcon',
  data () {
    return {
        aipersons:[],
        date:new Date()
    }
  },
  methods:{
      goPage(){
          this.$router.go(-1)
          console.log("---------")
      }
  },
  created(){
      fetch("/api/aipersons")
      .then(res=>{
          return res.json();
      })
      .then(data=>{
          this.aipersons  = data;
      })
      .then(err=>{
          console.log(err)
      })
  },
  mounted(){
      let _this = this;
      this.timer = setInterval(() => {
          _this.date = new Date()
      }, 1000);
  },
  beforeDestroy(){
      if(this.timer){
          clearInterval(this.timer)
      }
      
  }
}
</script>

<style lang="scss" scoped="" type="text/css">
.mainBox{
    // width:100%;
    // height:2rem;
    // background:pink;
    padding:.1rem;
    margin-top: .5rem;
    .timer{
        font-size:14px;
        color: #a2afb7;
        margin:.1rem 0;
    }
    p{
        width:1.4rem;
        height:.3rem;
        font-size: 14px;
        margin:0 auto;
        margin-bottom: .1rem;
        color: #a2afb7;
        background:#e2e0e0;
        border-radius: .16rem;
        line-height:.3rem;
        text-align: center;
    }
    .detail_f{
        display: flex;
        margin:.1rem 0;
        img{
            width:.5rem;
            height:.5rem;
        }
        .right_box{
            width:70%;
            // height:.5rem;
            background:white;
            padding:.1rem;
            margin-left:.1rem;
            font-size: .18rem;
            font-weight:bold;
            line-height: .25rem;
            border:1px solid #d6d6d6;
        }
    }
    .detail_twof{
        display: flex;
        margin:.1rem 0;
        img{
            width:.5rem;
            height:.5rem;
        }
        .right_twobox{
            width:70%;
            // height:.5rem;
            background:white;
            // padding-right:.1rem;
            margin-left:.1rem;
            font-size: .18rem;
            line-height: .35rem;
            border:1px solid #d6d6d6;
            .hot_font{
                margin-left:.16rem;
                line-height: .46rem;
            }
            li{
                margin-left:.34rem;
                color: #5496d2;
                // list-style: .3rem;
                margin-right:.1rem;
            }
        }
    }
}


</style>
