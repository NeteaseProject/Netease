<!--
 * @Author: renhui
 * @Date: 2019-11-26 17:12:38
 * @LastEditors: osier
 * @LastEditTime: 2019-12-09 11:12:26
 * @Description: ..
 -->
<template>
  <div class="headerbox">
      <div class="seabox">
        <span class="iconfont icon-sousuo_sousuo"></span>
        <input class="cancle" v-model="input1" type="text" placeholder="谷风一木3层软抽面巾纸 6包">
      </div>
      <p @click="seach()">搜索</p>
      <ul class="show" id="st" v-show="isShow" >
        <li v-if="data1.length==0?true:false">抱歉，未搜索到您需要的物品</li>
        <!-- <li @click="hasshow()">{{input1}}</li> -->
        <li v-else v-for="(item,index) in data1" :key="index" @touchstart="hisname($event);addhistory()">
          <router-link to="./Detiles" class="hli">{{item.name}}</router-link>
        </li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios';
import { Toast } from 'mint-ui';
export default {
    name:'Searchheader',
    data(){
      return{
        input1:"",
        results:[],
        data1:[],
        isShow:false,
        hname:""
            }
      },
      methods:{
          seach(){
            if(this.input1.trim()!=""){
              this.isShow=true
            }else{
              this.isShow=false
            }
            if(this.input1.trim()==""){
              Toast({
                message: '请输入要搜索的内容',
                position: 'center',
                duration: 1000
              });
              return false;
            }
            axios({
                    method:"get",
                    url:" http://localhost:3000/results?q="+this.input1.trim()
                })
                .then((data)=>{
                  this.results=data;
                  this.data1=this.results.data;
                  console.log(this.results);
                  })
            },
            hisname(event){
              console.log(event.target.innerHTML)
              this.hname=event.target.innerHTML
            },
          addhistory(){
            if(this.input1.trim()==""){
              return false;
            }
              axios.post('/api/historys',{
                 name:this.hname.trim()
                 })
                    .then(res=>{
                      console.log('添加成功',res.data)
                    });
          }
        },
      updated(){
        this.results.length=0;
      }
}
</script>


<style lang="scss" scoped="" type="text/css">

input::-moz-placeholder {
        color: rgb(227, 231, 230);
}
.show{
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: fixed;
  top: 0.5rem;
  left: 0;
  font-size: .14rem;
  .hli{
    display: block;
    width: 100%;
    height: 100%;
  }
  li{
    padding: 0 .1rem;
    line-height: .5rem;
    border-bottom: 1px solid #666;
  }
}
.headerbox{
  width:100%;
  height:.6rem;
  margin:0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  border-bottom:0.5px solid rgb(227, 231, 230);
}
.seabox{
  width:80%;
  height:.4rem;
  background-color: rgb(247, 247, 247);
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .iconfont{
    margin-left:-.3rem;
    font-size: 18px;
  }
  input{
    display: block;
    width:70%;
    height:.4rem;
    outline: none;
    border:none;
    background-color: transparent;
    margin-left:-.7rem;
  }
}
p{
  font-size: 14px;
  margin-left:-4px;
}
.resultbox{
  position: absolute;
  top: .55rem;
  width: 100%;
  font-size: .14rem;
  background: #fff;
  p{
    height: .4rem;
    line-height: .4rem;
    border-bottom: 1px solid rgb(194, 194, 194);
    box-sizing: border-box;
  }
}
.cancle{
    font-size: .16rem;
    color: rgb(133, 132, 132);
}
</style>