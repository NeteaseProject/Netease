<!--
 * @Author: osier
 * @Date: 2019-12-05 15:43:42
 * @LastEditors: osier
 * @LastEditTime: 2019-12-07 10:49:09
 * @Description: ..
 -->
<template>
  <div class="box" @touchmove="handleTouchmove">
    <div class="bdiv" v-show="ismit"></div>
      <div class="tubiao">
        <i @click="shan()" class="el-icon-close"></i>
      </div>
        <div class="content" v-for="(book,index) in books" :key="index">
          <img :src="book.img" alt="">
          <div class="jieshao">
            <span class="biaoti">{{book.name}}</span><br/>
            <i>价格：￥{{book.price}}</i>
          </div>
        </div>
        <div class="guige">
          <p>规格</p>
          <div class="hiscontent" v-for="(book,index) in books" :key="index">
            <span class="sealis">
              <router-link to="#">{{book.guige1}}</router-link>
            </span>
            <span class="sealis">
              <router-link to="#">{{book.guige2}}</router-link>
            </span>
            <span class="sealis">
              <router-link to="#">{{book.guige3}}</router-link>
            </span>
            <span class="sealis">
              <router-link to="#">{{book.guige4}}</router-link>
            </span>
            <span class="sealis">
              <router-link to="#">{{book.guige5}}</router-link>
            </span>
          </div>
        </div>
        <div class="stbottom">
          <span class="count">数量</span>
          <div class="right">
            <span class="btn btn1" v-bind:class="{boxcls:isYellow}" v-on:click="reduceCount">-</span>
            <em>{{counter}}</em>
            <span class="btn" v-on:click="addCount">+</span>
          </div>        
        </div>
        <div class="defooterBox">
          <div class="defooterBox1">
              <span class="iconfont icon-kefu"></span>
              <span class="iconfont icon-gouwuche4"></span>
              <span class="iconfont icon-wuxiaoxing-kong" v-show="mylike" @click="mylikes()"></span>
              <span class="iconfont icon-shoucang" :class="{redlike:!mylike}" v-show="!mylike" @click="mylikes()"></span>
          </div>
          <div class="defooterBox2">
              <div class="pinkbox" @click="tan()">
                  立即购买
              </div>
              <div class="redbox" @click="tan()">
                  加入购物车
              </div>  
          </div>
      </div>
  </div>
</template>
<script>
import axios from 'axios';
import Vue from 'vue';
Vue.component(Popup.name, Popup);
import { Popup } from 'mint-ui';

export default {
  name: 'Back',
  data () {
    return { 
       books:[],
       counter:1,
       isYellow:true,
       mylike:true,
       isshow:false,
       popupVisible:'false' 
    }
  },
  methods:{
         mylikes(){
             this.mylike=!this.mylike
         }
    },
  computed:{
    ismit(){
       console.log("子组件");
     axios.get('/api/books?id='+"01")
     .then(res=>{ 
         this.books = res.data;
         console.log(this.books);
     })
     .catch(err=>{
         console.log(err);
     });
    }
  },
  created(){
     //从后端获取数据     
    
  },
  
  methods:{
        reduceCount:function(){
             //this是vue对象
            if(this.counter<=1){
              this.isYellow=true;
                return;
            }
          this.counter--;            
        },
        addCount:function(){
          this.isYellow=false;
            this.counter++;
        },
        shan(){
          // this.reload();
          this.$emit('changemsg',false);//$emit 能够触发事件  
        },
         handleTouchmove (e) {
            e.preventDefault()
        }

  }
}
</script>

<style lang="scss" scoped="" type="text/css">
.box{
    width:94%;
    padding:0 3%;
    .tubiao{
      height: .1rem;
      margin-top: .1rem;
      .el-icon-close{
          font-size: .14rem;
          color: 666666;
          float: right;
      }
    }
    .content{
      height: .85rem;
      padding-bottom: .22rem;
      img{
          width: 1rem;
          height: 1.2rem;
          border-radius: 2px;
          float: left;
          margin-right:.1rem;
        }
      .jieshao{
          float: left;
          .biaoti{
            font-size: .16rem;
            color:#333333;
          }
          i{
            font-size: .16rem;
            margin-bottom: .04rem;
            color: #fc8600;
            display: block;
            font-style: normal;
            color:rgb(218, 58, 58);
            margin-left:.1rem;
          }
          p{
            font-size: .14rem;
            color: #797878;
            span{
              margin-right: .34rem;
            }
          }
      }
    }
    .guige {
      width: 100%;
      box-sizing: border-box;
      text-align: left;
      color: #797878;
      clear: both;
      p{
        font-size: .16rem;
      }
      ul{
        li{
          height: .35rem;
          display: inline-block;
          line-height: .35rem;
          background: #c3eed4;
          padding: 0 .31rem; 
          border-radius: .2rem;
          margin-bottom: .1rem;
          font-size: .13rem;
        }
      }
    }
    .stbottom{
      margin-top: .05rem;
      height: .6rem;
      display: flex;
      .count{
        font-size: .16rem;
        color: #797878;
      }
      .right{
        .btn1{
          padding-left: .1rem;
        }
        .boxcls{
          color: #bcbcbc;
        }
        em{
          font-size: .16rem;
          margin: 0 .11rem;
          font-style: normal;
        }
      }
  }
  .true{
      input{
      display: block;
      height: .38rem;
      width: 100%;
      color: white;
      border-radius: .2rem;
      border: 0;
      outline: 0;
      font-size: .14rem;
      }  
    }             
}
.hiscontent{
    display: flex;
    flex-wrap: wrap;
    width:95%;
    margin-left:3%;
}
.sealis{
    display: block;
    box-sizing: border-box;
    border: 0.4px solid rgb(194, 194, 194);
    border-radius: .03rem;
    font-size: .14rem;
    height: .4rem;
    padding: .1rem .1rem;
    line-height:.18rem;
    margin-bottom: .1rem;
    margin-right: .15rem;
    a{
      color: rgb(46, 46, 46);
    }
}
 .defooterBox{
     width:100%;
     height:.6rem;
     position: fixed;
     bottom:0;
     left:0;
     background-color: white;
     display: flex;
     justify-content: space-between;
     align-items:center;
     margin-top:10px;
     box-sizing: border-box;
     border-top:0.7px solid rgb(230, 227, 227);
     .defooterBox1{
         width:40%;
         display: flex;
         justify-content: space-around;
         align-items:center;
         .iconfont{
             font-size:20px;
         }
     }
     .defooterBox2{
         width:60%;
         font-size:16px;
         font-weight: 600;
         display: flex;
         justify-content: space-around;
         align-items:center;
         line-height: .6rem;
         text-align: center;
         .pinkbox{
             width:50%;
             background-color: rgb(248, 212, 218);
             color:red;
         }
         .redbox{
             width:50%;
             background-color: rgb(253, 66, 66);
             color:white;
         }
     }
 }
 .redlike{
     color:red;
 }
</style>