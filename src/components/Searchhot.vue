<!--
 * @Author: renhui
 * @Date: 2019-11-26 21:00:44
 * @LastEditors: osier
 * @LastEditTime: 2019-12-07 10:48:28
 * @Description: ..
 -->
<template>
<div class="Seahotbox">
    <p>热门搜索</p>
    <div class="Seacontent">
        <span class="sealis" v-for="(hot,index) in hots" :key="index">
            <router-link to="#">{{hot.name}}</router-link>

        </span>
    </div>
</div>
</template>

<script>
export default {
    name:'Searchhot',
    data(){
      return{
          hots:{}
      } 
    },
    created:function(){
        fetch('/api/hots')
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            this.hots=data;
            // console.log(this.hots);
        })
        .catch(err=>{
            console.log(err);
        })
    },
    methods:{

    }
}
</script>

<style lang="scss" scoped="" type="text/css">
.Seahotbox{
    width:100%;
    height:3rem;
    margin-top:10px;
}
p{
    font-size:16px;
    padding-top:10px;
    margin-left:3%;
    color:rgb(177, 174, 174);
}
.Seacontent{
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
</style>