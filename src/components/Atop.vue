<!--
 * @Author: 陈晶华
 * @Date: 2019-11-26 09:28:31
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-12-07 09:58:26
 * @Description: "..."
 -->
<template>
    <div class="Atop">
        <div class="aMainTop">
            <i class="el-icon-arrow-left afont" @touchstart="back()"></i>
            <div class="asel" @click="Ashow()">
                <span class="Atit">{{Acls}}</span>
                <i class="el-icon-caret-bottom afont"></i>
            </div>
            <router-link to="#"><i class="el-icon-search afont"></i></router-link>
        </div>
        
        <mt-popup
            v-model="popupVisible"
            position=".5rem"
            v-if="isShow"
            class="id"
            >
             <AtopSolt @func="changeCls" :id='id'/>
        </mt-popup>
       
    </div>

</template>
<script>
// import { Popup } from 'mint-ui';
import AtopSolt from '../components/AtopSolt'

export default {
  name: 'Csearch',
  props:['id'],
  components:{
      AtopSolt
  },
   data () {
        return {
          popupVisible:false,
          isShow:false,
          change:true,
          Acls:"推荐专区"
        }
   },
     created(){
        console.log("这是路由里的id")
        console.log(this.id)
        fetch("http://localhost:3000/clist?id="+this.id)
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            console.log(data)
            let type=data;
            this.Acls=type[0].goodsClass;
        })
    },
    methods:{
      Ashow(){
          this.isShow=true;
          this.popupVisible=true
      },
      changeCls(data){
          this.Acls=data;
      },
      back(){
          this.$router.go(-1)
      }
  }
}
</script>
<style scoped  lang="scss" type="text/css">
 .icon-xuanzeyuefenzuojiantou-{
     font-size: .4rem;
 }
 .asel{
     font-size: .14rem;
 }
 .Atop{
     background-color: rgb(247, 247, 247);
     position: sticky;
     top: 0;
     left: 0;
     z-index: 1000;
     .afont{
         font-size: .2rem;
         color: rgb(73, 73, 73);
     }
     .aMainTop{
         width: 100%;
         height: .5rem;
         display: flex;
         justify-content: space-between;
         align-items: center;
         padding: 0 .1rem;
         box-sizing: border-box;
         .el-icon-search{
             display: block;
         }
     }
     .id{
         position: fixed;
         top:1.8rem;
         border-radius: .05rem;
     }
 }
</style>
