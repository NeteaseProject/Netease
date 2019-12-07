<!--
 * @Author: 菲菲呀
 * @Date: 2019-11-26 09:31:07
 * @LastEditors: 菲菲呀
 * @LastEditTime: 2019-12-06 10:02:37
 * @Description: 
 -->
<template>
    <div class="box">
       <div class="mainBox" v-for="(FshoppingImg,index) in FshoppingImgs" :key="index">
             <div class="leftBox">
                <p>{{FshoppingImg.tit1}}</p>
                <span>{{FshoppingImg.tit2}}</span>
            </div>
            <div class="botImg">
                <img :src="FshoppingImg.src1" alt="">
                <img :src="FshoppingImg.src2" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Fshopping',
  data () {
    return {
      FshoppingImgs:[]
    }
  },
  created(){
      fetch("/api/FshoppingImgs")
      .then(res=>{
          return res.json();
      })
      .then(data=>{
          this.FshoppingImgs = data
      })
      .catch(err=>{
          console.log(err)
      })
  }
}
</script>

<style lang="scss" scoped="" type="text/css">
       .box{
            width:94%;
            background:white;
            margin:.1rem auto;
            border-radius: 5px;
            display: flex;
            flex-wrap: wrap;
            .mainBox{
                width:44%;
                border-right:1px solid #eeeeee;
                border-bottom:1px solid #eeeeee;
                padding-left:.1rem;
                padding-right:.1rem;
                padding-bottom: .2rem;
                padding:.1rem;
                .leftBox{
                margin:0 auto;
                p{
                    font-size:16px;
                    font-weight: bold;
                }
                span{
                    // margin-top:.1rem;
                    font-size:14px;
                    color: #8b8b8b;
                    display: block;
                }
            }
            .botImg{
                display: flex;
                img{
                    width:.6rem;
                    height: .6rem;
                    display: block;
                    margin-top:.2rem;
                    margin-right:.4rem;
                    }
                }
            }
            
       }
   
</style>
