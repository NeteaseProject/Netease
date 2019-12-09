<!--
 * @Author: osier
 * @Date: 2019-12-05 15:06:20
 * @LastEditors: osier
 * @LastEditTime: 2019-12-09 20:53:05
 * @Description: ..
 -->
<template>
<div class="box">
        <div id="box">
            <ul>
                <li class="goodsBox" v-for="(book,index) in books" :key="index">
                    <div class="radioBox">
                        <input type="checkbox" v-model="book.isChecked"  >
                    </div>
                    <div class="goodsImgBox">
                        <img :src="book.img" alt="">
                    </div>
                    <div class="goodsInfoBox">
                            <p class="goodsdetiles"><span>{{book.ms1}}</span>{{book.ms2}}</p>
                            <p class="goodsdetiles1">&nbsp;{{book.name}}</p>
                            <div class="wuyou">
                                <p class="wuyou1">无忧</p>
                                <p class="wuyou2">30天退换</p>
                            </div>
                            <p class="priceco">
                                <span class="price">￥{{book.price*book.count}}</span> 
                                <span class="price1" >
                                        <input class="btnReduce" type="button" value=" - " @touchstart="reduceCount(index)">
                                        <input class="count" type="text" v-model="book.count" style="width:0.16rem;">
                                        <input class="btnAdd" type="button" value=" + " @touchstart="addCount(index)">
                                </span> 
                            </p>
                    </div>
                </li> 
            </ul>
        </div> 
        <div class="goodsTotalBox">
            <input type="checkbox"  id="allCheckBox" v-model="allcheck" @click="checkall" > 
            <b>全选 </b>
            <span id="totalMoney">合计：￥{{totalMoney}}</span>
            <p>结算</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Shoppingcarlogincontent',
  data () {
    return {
        books:[],
        allcheck:false
    }
  },
  created() {
     axios.get('/api/books')
     .then(res=>{
         let tempBooks = res.data;
         //给每个商品增加属性 isChecked
         for(let i in tempBooks){
             tempBooks[i].isChecked = false;
         }
         this.books = tempBooks;
     })
     .catch(err=>{
         console.log(err);
     })
  },
  computed:{
      totalMoney:function () {          
          let money = 0;
          let isAllCheck = true;
          for(let i in this.books){
              if(this.books[i].isChecked){
                  money+=this.books[i].count*this.books[i].price;
              }else{
                  isAllCheck = false;
              }
          }
          this.allcheck = isAllCheck;
          console.log(money);
          return money;
      },

  },
  methods:{
      reduceCount(index){
          if(this.books[index].count <= 1){
              this.books[index].count=1;
              return;
          }
          this.books[index].count--;
      },
      addCount(index){
          console.log(index);
          this.books[index].count++;
      },
      checkall(){
        //   console.log(this.allcheck);
          console.log(event.target.checked);
          this.books.forEach(item=>{
              item.isChecked = event.target.checked;
          });
      }
  }
}
</script>

<style lang="scss" scoped="" type="text/css">
.box{
  margin: 0 auto;
  width:95%;
  font-size: .14rem;
  margin-top:.6rem;
}
#box{
    margin-top: .1rem;
    width: 100%;
    flex: 1;
    overflow-y: auto;
    
}
#box ul{
    width: 95%;
}
#box ul li{
    margin: 10px 2.5%;
    width: 100%;
    height: 1.6rem;
    display: flex;
}
#box div{
    height: 100%;
}
#box .radioBox{
    width: 12%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: white;
}
#box .radioBox input{
    margin-top: 0.6rem;
    margin-left: .1rem;
    width:16px;
    height:16px;
}
#box .goodsImgBox{
    width:28%;
    background-color: white;
}
#box .goodsImgBox img{
    width:100%;
    padding-top:.2rem;
    height: 1rem;
}
#box .goodsInfoBox{
    background-color: white;
    width: 60%;
    padding-left: .12rem;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    .goodsdetiles{
        padding-top:.16rem;
        span{
            color:orange;
        }
    }
    .goodsdetiles1{
        width:1rem;
        border:.5px solid rgb(194, 194, 194);
        border-radius: 2px;
        box-sizing: border-box;
        display: flex;
        margin-top:5px;
        margin-bottom:7px;
        background-color: rgb(241, 241, 241);
    }
    .wuyou{
        width:.8rem;
        font-size: .11rem;
        height: .16rem;
        line-height: .16rem;
        border:1px solid rgb(177, 88, 56);
        border-radius: 2px;
        box-sizing: border-box;
        margin-bottom:7px;
        display: flex;
        .wuyou1{
            height: .15rem;
            width:40%;
            background-color: rgb(236, 184, 86);
            color:rgb(177, 88, 56);
        }
        .wuyou2{
            color:rgb(177, 88, 56);
        }
    }
    .priceco{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .price{
            font-weight: 600;
            color: red;
        }
        .price1{
            padding-right: .18rem;
            .btnReduce,.btnAdd{
                width:20px;
                height: 20px;;
            }
        }
    }
    
}
#pId{
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    overflow:hidden;
}
.goodsTotalBox{
    width:100%;
    height:.6rem;
    border-top:0.7px solid rgb(230, 227, 227);
    box-sizing: border-box;
    background-color: white;
    position: fixed;
    bottom:60px;
    left:0;
    font-size: .14rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    b{
        font-size: .15rem;
        margin-left:-1rem;
    }
    #allCheckBox{
        width:16px;
        height: 16px;
        margin-left:8px;
    }
    #totalMoney{
        font-weight: 600;
        color: red;
        font-size: .15rem;
        margin-right:-.9rem;
    }
    p{
        font-size: .14rem;
        width:30%;
        height:.6rem;
        line-height: .6rem;
        text-align: center;
        color: white;
        background-color: red;
    }
}
.count{
    text-align: center;
}
</style>