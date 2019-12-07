<!--
 * @Author: 菲菲呀
 * @Date: 2019-11-26 09:31:07
 * @LastEditors: 菲菲呀
 * @LastEditTime: 2019-12-06 10:02:11
 * @Description: 
 -->
<template>
    <div class="box">
        <div class="topBox"></div>
        <div class="imgBigbox">
            <div class="imgBox">
                <div class="footTop" v-for="(FnewImg,index) in FnewImgs" :key="index">
                    <ul>
                        <li>
                            <span class="waterTop">{{FnewImg.titOne}}</span>
                            <span :class="delTop[index]">{{FnewImg.titTwo}}</span>
                        </li>
                        <li>
                            <img :src="FnewImg.src1" alt="">
                            <span class="money">{{FnewImg.money1}}</span>
                        </li>
                        <li>
                            <img :src="FnewImg.src2" alt="">
                            <span class="money">{{FnewImg.money2}}</span>
                        </li>
                        <li>
                            <img :src="FnewImg.src3" alt="">
                            <span class="money">{{FnewImg.money3}}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Fnewbuy',
  data () {
    return {
      FnewImgs:[],
      delTop:[
          "ss1",
          "ss2",
          "ss3",
          "ss4",
          "ss5",
      ]
    }
  },
  created(){
    fetch("/api/FnewImgs")
    .then(res=>{
        return res.json();
    })
    .then(data=>{
        this.FnewImgs = data;
    })
    .catch(err=>{
        console.log(err);
    })
  }
}
</script>

<style lang="scss" scoped="" type="text/css">
   .box{
       width:100%;
       background:#eeeeee;
       .topBox{
           width:94%;
           height:.8rem;
           margin:0 auto;
           background-image: url(../assets/img/Fnew1.jpg);
           background-size: 100% .8rem;
       }
       .imgBigbox{
           width:94%;
           background:#ffd0aa;
           margin:0 auto;
           padding-bottom:.1rem;
           border-bottom-left-radius: 5px;
           border-bottom-right-radius: 5px;
          .imgBox{
           width:96%;
           margin:0 auto;
           border-radius: 5px;
            .footTop{
                width:100%;
                background:white;
                border-bottom:1px solid #f5f5f5;
                ul{
                    display: flex;
                    list-style: none;
                    li{
                        width:1.6rem;
                        height:1rem;
                        margin-left:.1rem;
                        span{
                            width:100%;
                            font-size:14px;
                            display: block;
                        }
                        .waterTop{
                            width:.8rem;
                            font-size:16px;
                            font-weight: bold;
                            margin-top:.25rem;
                            line-height: .3rem;
                        }
                        .ss1{
                            color: #ecaa15;
                        }
                        .ss2{
                            color: #3278be;
                        }
                        .ss3{
                            color: #fb500a;
                        }
                        .ss4{
                            color: #9aec15;
                        }
                        .ss5{
                            color: #fe3263;
                        }
                        .money{
                            color: red;
                            font-weight: bold;
                            margin-left:.1rem;
                            }
                        img{
                            display: block;
                            width:.7rem;
                            height:.7rem;
                            }
                        }  
                    }
                }
            } 
       } 
   }
   
</style>
