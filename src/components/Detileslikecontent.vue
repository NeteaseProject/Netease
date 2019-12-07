<!--
 * @Author: osier
 * @Date: 2019-12-02 15:47:40
 * @LastEditors: osier
 * @LastEditTime: 2019-12-07 10:47:28
 * @Description: ..
 -->
<template>
<div class="box">   
    <div style="display:none" >{{typename}}</div>
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
</template>

<script>
import axios from 'axios';
import {Indicator} from 'mint-ui';

export default {
  name: 'Detileslikecontent',
  props:['typename'],//
  data () {
    return {
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
     axios.get('/api/likes')
     .then(res=>{ 
         Indicator.close();
         this.allLikes= res.data;//内部数据，由于没有渲染在组件里，所以，没有触发组件更新
         this.likes = this.getlikesByType(this.allLikes);//内部数据，由于渲染到了页面，所以，触发了组件更新
     })
     .catch(err=>{
         console.log(err);
     });
  },
  beforeUpdate(){
      console.log("数据更新了------------：");
      this.likes = this.getlikesByType(this.allLikes);
  },
  methods:{
     getlikesByType(data){//根据类型获取数据
         let arr=[];
         for(let i in data){
             if(data[i].type==this.typename){
                 arr.push(data[i]);
             }
         }
         return arr;
     }
  }
}
</script>
<style lang="scss" scoped="" type="text/css">
 .deboxContent{
        width:100%;
        margin-left:2.5%;
        .deuls{
            margin-left:2.5%;
            width:95%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding-top:10px;
            flex-wrap: wrap;
            .delis{
                width:30%;
                font-size: 12px;
                list-style: none;
                margin-bottom:10px;
                img{
                    width:100%;
                    height:.9rem;
                }
                i{
                    font-style: normal;
                    color:rgb(218, 53, 53);
                    font-weight: 600;
                }
                .tils{
                    border:0.7px solid rgb(180, 42, 42);
                    display: inline;
                    border-radius: 6px;
                    box-sizing: border-box;
                }
            }
        }
    }

</style>