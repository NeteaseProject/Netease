<!--
 * @Author: osier
 * @Date: 2019-12-02 21:25:57
 * @LastEditors: osier
 * @LastEditTime: 2019-12-06 15:46:37
 * @Description: ..
 -->
<template>
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
            <mt-popup v-if="isshow" v-model="popupVisible" position="bottom" class="show" lockScroll="true">
                <Stanchuang v-on:changemsg="func()" ></Stanchuang>
            </mt-popup>   
        </div>
    </div>
</template>
 
<script>
import Vue from 'vue';
Vue.component(Popup.name, Popup);
import { Popup } from 'mint-ui';
import Stanchuang from './Stanchuang';

export default {
    name:'Detilesfooter',
    data(){
        return{
            mylike:true,
            isshow:false,
            popupVisible:'false'
            }
        }, 
    methods:{
         mylikes(){
             this.mylike=!this.mylike
         },
         tan(){
             this.isshow = true
             this.popupVisible = true
         },
         func(chu){
             this.popupVisible=chu
         }
    },
    components:{
        Stanchuang
    }
}
</script>

<style lang="scss" scoped="" type="text/css">
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
.show{
    width: 100%;
    height:4.5rem;
    border-radius: .1rem;
}
</style>
