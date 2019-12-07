<!--
 * @Author: osier
 * @Date: 2019-12-05 14:21:42
 * @LastEditors: osier
 * @LastEditTime: 2019-12-07 10:48:51
 * @Description: ..
 -->
<template>
<div class="shsedBox">
    <div class="shsedTop">
        <p>猜你喜欢</p>
    </div>
    <div class="shsedcont">
         <ul class="deuls">
            <li class="delis" v-for="(like,index) in likes" :key="index">
                <img :src="like.img" alt="">
                <p>{{like.conten}}</p>
                <span>{{like.number}}&nbsp;<i>￥{{like.price}}</i></span><br/>
                <div class="tils">
                    &nbsp;{{like.describe}}&nbsp;
                </div>
            </li>
         </ul>
    </div>
    <div class="shdebottom">
        <p>-------没有更多啦(*^▽^*)-------</p>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import {Indicator} from 'mint-ui';

export default {
    name:'Shoppingthird',
    data(){
        return{
            allLikes:[],
            likes:[]
        }
    },
    created() {
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            //从后端获取数据     
            axios.get('/api/likes?id=2')
            .then(res=>{ 
                Indicator.close();
                this.likes= res.data;
            })
            .catch(err=>{
                console.log(err);
            });
        }
}
</script>


<style lang="scss" scoped="" type="text/css">
.shsedBox{
    width:95%;
    margin-left:2.5%;
    margin-top:10px;
    background-color: white;
    .shsedTop{
        width:100%;
        display: flex;
        background-color: white;
        p{
            font-size: .14rem;
            line-height: .5rem;
            text-align: center;
            padding-left:42%;
        }
    }
    .shsedcont{
        width:100%;
        padding-bottom:10px;
        margin-left:2.5%;
        .deuls{
            width:95%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            .delis{
                width:47%;
                font-size: 12px;
                list-style: none;
                margin-bottom:10px;
                padding-bottom:6px;
                img{
                    width:100%;
                    height:1.5rem;
                }
                i{
                    font-style: normal;
                    color:rgb(218, 53, 53);
                    font-weight: 600;
                }
                .tils{
                    border:0.7px solid rgb(180, 42, 42);
                    box-sizing: border-box;
                    display: inline;
                    border-radius: 6px;
                }
            }
        }
    }
    .shdebottom{
        width:100%;
        height:.7rem;
        background-color:rgb(245, 245, 245);
        p{
            font-size: .14rem;
            color:rgb(187, 186, 185);
            line-height: .7rem;
            text-align: center;
        }
    }
}
</style>