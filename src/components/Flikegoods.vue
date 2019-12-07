<!--
 * @Author: 菲菲呀
 * @Date: 2019-11-26 09:31:07
 * @LastEditors: 菲菲呀
 * @LastEditTime: 2019-12-06 10:01:42
 * @Description: 
 -->
<template>
<div class="mainbox">
    <p class="likeBox">猜你喜欢</p>
    <div class="box">
        <div class="leftBox" v-for="(FlikeImg,index) in FlikeImgs" :key="index">
            <img :src="FlikeImg.src" alt="">
            <div class="bot_dec">
                <p>{{FlikeImg.tit1}}</p>
                <i>
                    <span class="last_money">{{FlikeImg.lastmoney}}</span>
                    <span class="pre_money">{{FlikeImg.money}}</span>
                </i>
                <span class="discount_goods" v-if="FlikeImg.discount!=''">{{FlikeImg.discount}}</span>
            </div>
        </div>
    </div>
    <a v-show="ok" ref="icon" class="goup" href="#"><span class="iconfont icon-shangjian"></span></a>

</div>
    
</template>

<script>
export default {
  name: 'Flikegoods',
  data () {
    return {
        FlikeImgs:[],
         ok:true
    }
  },
  mounted(){
      window.addEventListener("scroll",this.showIcon)
  },
  computed:{
    //   footerCls(){
    //     return this.$store.state.footerCls;
    //   }
  },
  methods:{
    showIcon(){
        if (
            !!document.documentElement.scrollTop &&
            document.documentElement.scrollTop > 700
        ) {            
            this.ok = true
        }else{
            this.ok = false
        }
      }
  },
  created(){
        fetch("/api/FlikeImgs")
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            this.FlikeImgs = data;
            console.log(this.FlikeImgs+"------")
        })
        .catch(err=>{
            console.log(err)
        })
    }
}
</script>

<style lang="scss" scoped="" type="text/css">
.mainbox{
    margin-bottom: .6rem;
    .likeBox{
        font-size: .19rem;
        margin:.1rem .18rem;
    }
    .box{
       width:94%;
       margin:0 auto;
       display: flex;
       justify-content: space-between;
       flex-wrap: wrap;
       .leftBox{
           width:48%;
           background:white;
           border-radius: 10px;
           margin-bottom: .1rem;
           img{
               width:100%;
               height: 2rem;
               display: block;
           }
           .bot_dec{
                margin-left:.1rem;
                margin-bottom: .15rem;
                width:70%;
               p{
               font-size:14px;
               margin-top:.04rem;
               white-space: nowrap;
               overflow:hidden;
               text-overflow: ellipsis;//省略号
                }
                i{
                    display: flex;
                    font-style: normal;
                    margin: .03rem 0;
                    .last_money{
                        font-size: 14px;
                        color: red;
                        display: block;
                    }
                    .pre_money{
                        font-size: 14px;
                        color: #999999;
                        text-decoration: line-through;
                    }
                }
                .discount_goods{
                    display: block;
                    width:.6rem;
                    height:.16rem;
                    border:1px solid red;
                    border-radius: .1rem;
                    font-size:10px;
                    text-align: center;
                    line-height: .16rem;
                    color:red;
                }
           }
           
       }
   }
}
  .goup{
        text-decoration: none;
        width:.5rem;
        height:.5rem;
        background:white;
        display: block;
        border-radius: 50%;
        display: flex;
        position:fixed;
        right:.14rem;
        bottom:.9rem;
        justify-content: center;
        align-items: center;
        background:rgba(255,255, 255, .7);
        span{
            font-size: .2rem;
            color: #777777;
        }
    } 
</style>
