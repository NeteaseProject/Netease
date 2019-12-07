<!--
 * @Author: osier
 * @Date: 2019-12-04 14:53:33
 * @LastEditors: osier
 * @LastEditTime: 2019-12-07 10:48:19
 * @Description: ..
 -->
<template>
<div class="hisbox" v-show="this.historys.length!=0?true:false">
    <div class="histop">
        <span class="hisap">历史记录</span>
        <i class="el-icon-delete" @touchstart="hisdel()"></i>
    </div>
    <div class="hiscontent">
        <span class="sealis" v-for="(his,index) in historys" :key="index">
            <router-link to="#">{{his.name}}</router-link>
        </span>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name:'Searchhistory',
    data(){
      return{
          historys:{}
      } 
    },
    created:function(){
        fetch('/api/historys')
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            this.historys=data;
            console.log(this.historys);
        })
        .catch(err=>{
            console.log(err);
        })
    },
    methods:{
        hisdel(){
            this.historys.forEach(item => {
                // console.log(item.id)
                axios.delete("/api/historys/"+item.id).then(res=>{
                    // console.log("删除成功",res.data);
                    axios.get("/api/historys").then(res=>{
                        this.historys=res.data
                 })
            })
        });
       }  
     }
}
</script>

<style lang="scss" scoped="" type="text/css">
.hisbox{
    width:100%;
    margin-top:10px;
}
.hisap{
    font-size:16px;
    margin-left:3%;
    color:rgb(177, 174, 174);
}
.hiscontent{
    padding-top: .15rem;
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
    height: .22rem;
    padding: 0.02rem .07rem;
    line-height:.18rem;
    margin-bottom: .1rem;
    margin-right: .15rem;
}
.sealis a{
    color: #000;
}
.el-icon-delete{
    font-size: 20px;
    margin-right: .1rem;
}
.histop{
    height: .4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>