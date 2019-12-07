<!--
 * @Author: 菲菲呀
 * @Date: 2019-11-26 09:31:07
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-12-04 18:03:18
 * @Description: 
 -->
<template>
<div class="mainbox">
    <div v-show="false">{{this.ClsId}}</div>
    <div class="box">
        <div class="No">
            <span class="iconfont"></span>
        </div>
        <div class="leftBox" v-for="(FlikeImg,index) in FlikeImgs[0].clsgoods" :key="index">
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
        FlikeImgs:[],
        OldCls:"01"
    }
  },
  computed:{
      ClsId:function(){
         return this.$store.state.clsId;
      }
  },
  created(){
      fetch("http://localhost:3000/m_Cls?typeid="+this.ClsId)
      .then(res=>{
          return res.json();
      })
      .then(data=>{
          this.FlikeImgs = data;
        //   console.log(this.FlikeImgs)
      })
      .catch(err=>{
          console.log(err)
      })
  },
  updated(){
      if(this.OldCls!=this.ClsId){
          this.OldCls=this.ClsId;
          fetch("http://localhost:3000/m_Cls?typeid="+this.ClsId)
            .then(res=>{
                return res.json();
            })
            .then(data=>{
                this.FlikeImgs = data;
                //   console.log(this.FlikeImgs)
            })
            .catch(err=>{
                console.log(err)
            })
      }
  }
}
</script>

<style lang="scss" scoped="" type="text/css">
.mainbox{
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
   
</style>
