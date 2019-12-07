<!--
 * @Author: osier
 * @Date: 2019-12-02 10:34:51
 * @LastEditors: osier
 * @LastEditTime: 2019-12-07 10:47:20
 * @Description: ..
 -->
<template>
  <div class="delikeBox">
      <div class="deboxTop">
          <ul>
              <li :class="{redli:index==oldindex}" v-for="(type,index) in types" :key="index" @click="changetype(type.name,index)" >{{type.name}}</li>
          </ul>
      </div>
      <div class="deboxContent">
          <Detileslikecontent :typename="currtype"></Detileslikecontent>
      </div>
  </div>
</template>

<script>
import Detileslikecontent from './Detileslikecontent';
import axios from 'axios';


export default {
  name: 'Detileslike',
  data () {
    return {
       types:[],
       currtype:"",
       oldindex:"0"
    }
  },
  components:{
      Detileslikecontent
  },    
  created(){
    axios.get('/api/types')
    .then((response)=> {
        console.log(response.data);
        this.types = response.data;
        this.currtype = this.types[0].name;//把拿到的类型的第一个赋给当前类型。
    })
    .catch(function (error) {
        console.log(error);
    });
  },
  methods:{
      changetype(typename,Index){
          console.log(typename);
          this.currtype = typename;
          this.oldindex=Index;
      }
  }
}
</script>

<style lang="scss" scoped="" type="text/css">
.delikeBox{
    margin-top: 10px;
    width: 100%;
    background-color: white;
    .deboxTop{
        width:95%;
        margin-left:2.5%;
        border-bottom:0.5px solid rgb(230, 227, 227);
        box-sizing: border-box;
        ul{
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        li{
            font-size: 14px;
            line-height: .4rem;
            list-style: none;
        }
    }
    .deboxContent{
        width:95%;
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
                    border-radius: 2px;
                    box-sizing: border-box;
                }
            }
        }
    }
}
.redli{
    color: rgb(219, 45, 45);
    background: url(../../src/assets/img/bg.png) no-repeat;
    background-size: 100% 10%;
    background-position: 0 35px;
}
</style>