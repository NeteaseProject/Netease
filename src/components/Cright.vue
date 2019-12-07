<!--
 * @Author: 陈晶华
 * @Date: 2019-11-26 09:28:31
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-12-07 09:46:12
 * @Description: "..."
 -->
<template>
    <div class="Cright">
        <div class="rigcontent" v-for="(item,index) in goodstypes" :key="index">
            <span v-show="false">{{typeid}}</span>
            <router-link to="#">
                <img :src="item.bannerimgs" class="c_pic" alt="">
            </router-link>
            <ul class="r_list">
                <li v-for="(itemTwo,index) in item.goodstype1" :key="index">
                    <div class="c_tit">
                        <span class="c_tit1">{{itemTwo.typename}}</span>
                        <p class="red">
                            <span class="iconfont icon-remen c_red"></span>
                            <span>热销榜</span>
                            <span class="iconfont icon-youxiang c_red"></span>
                        </p>
                    </div>
                    <ul class="c_goodslist">
                        <li v-for="(itemThree,index) in itemTwo.mintype" :key="index" class="min_li">
                            <router-link :to='"./AllCls/"+item.id'>
                                <img :src="itemThree.typepic" alt="">
                            </router-link>
                            <span class="mintit">{{itemThree.typetit}}</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Csearch',
   data () {
        return {
            goodstypes:[],
            oldtype:""
        }
   },
   computed:{
       typeid:function(){
           return this.$store.state.typeid;
       }
   },
     created(){
        fetch("http://localhost:3000/clist?id="+this.typeid)
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            // console.log(data)
            this.goodstypes = data;
        })
        .catch(err=>{
            console.log(err);
        })
    },
    updated(){
        if(this.typeid!=this.oldtype){
            this.oldtype = this.typeid;
            fetch("http://localhost:3000/clist?id="+this.typeid)
            .then(res=>{
                return res.json();
            })
            .then(data=>{
                // console.log(data)
                this.goodstypes = data;
            })
            .catch(err=>{
                console.log(err);
            })
        }
    },
    methods:{
      
  }
}
</script>
<style scoped  lang="scss" type="text/css">
ul{
    list-style: none;
}
.Cright{
    width: 75%;
    // background: rgb(233, 230, 230);
    .r_list{
        padding: .1rem;

    }
}
 .c_pic{
     display: block;
     width: 90%;
     margin: 0 auto;
     margin-top: .1rem;
     margin-bottom: .1rem;
 }
 .c_tit{
     border-bottom: 1px solid rgb(226, 225, 225);
     font-size: .14rem;
     display: flex;
     justify-content: space-between;
     .red{
         font-size: .13rem;
         color: rgb(245, 61, 61);
     }
     .c_red{
         font-size: .12rem;
         margin-top: .02rem;
     }
 }
 .c_goodslist{
     display: flex;
    //  justify-content: space-between;
     flex-shrink: 1;
     flex-wrap: wrap;
     padding-top: .15rem;
     padding-bottom: .15rem;
     .min_li{
         width: 30%;
         height: .6rem;
         margin: 0 1.53%;
         margin-bottom: .4rem;
         img{
             width: 80%;
             height: 100%;
             display: block;
             margin: 0 auto;
         }
         .mintit{
             font-size: .13rem;
             display: block;
             text-align: center;
             line-height: .3rem;
         }
     }
 }
</style>
