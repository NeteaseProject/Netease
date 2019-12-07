<!--
 * @Author: 菲菲呀
 * @Date: 2019-11-26 09:31:07
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-12-07 09:46:28
 * @Description: 
 -->
<template>
<div class="mainbox">
    <!-- <div>{{getgoods}}</div> -->
    <div class="box">
        <!-- <div class="No">
            <span class="iconfont"></span>
        </div> -->
        <div class="leftBox" v-for="(FlikeImg,index) in getgoods" :key="index">
            <img :src="FlikeImg.src" alt="">
            <div class="bot_dec">
                <p>{{FlikeImg.tit1}}</p>
                <i>
                    <span class="last_money">{{FlikeImg.lastmoney}}</span>
                    <span class="pre_money">{{FlikeImg.money}}</span>
                </i>
                <span id="dis" class="discount_goods" v-if="FlikeImg.discount!=''">{{FlikeImg.discount}}</span>
                
            </div>
        </div>
    </div>
</div>
    
</template>

<script>
export default {
  name: 'Flikegoods',
  data () {
    return {
        OldCls:"01"
    }
  },
  computed:{
      getgoods:function(){
        //   console.log(111)
          return this.$store.state.Goods.goods
      }
  },
  created(){
    //   console.log(this.getgoods)
  },
  beforeupdate(){
      console.log(this.$store.state.Goods.goods)
  }
}
</script>

<style lang="scss" scoped="" type="text/css">
.mainbox{
    .likeBox{
        font-size: .19rem;
        margin:.1rem .18rem;
        // padding: 0 .1rem;
    }
    .box{
       width:94%;
    //    margin:0 auto;
       display: flex;
       justify-content: space-between;
       flex-wrap: wrap;
       padding: .1rem;
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
   
</style>
