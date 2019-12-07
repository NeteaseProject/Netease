<!--
 * @Author: 陈晶华
 * @Date: 2019-11-26 09:28:31
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-12-02 12:10:34
 * @Description: "..."
 -->
<template>
    <ul class="aside">
      <li v-for="(item,index) in clist" :key="index" @touchstart="changetype(item.id,index)">
          <span :class="{'c_mark':index==nowindex,'cdef':cdef}" ></span><span :class="{'color':index==nowindex}">{{item.goodsClass}}</span><span></span> 
      </li>
    </ul>
</template>
<script>
export default {
  name: 'Csearch',
   data () {
        return {
          clist:[],
          nowindex:0,
          cdef:true,
          currtype:""
      
        }
   },
     created(){
        fetch("http://localhost:3000/clist")
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            // console.log(data)
            this.clist = data;
        })
        .catch(err=>{
            console.log(err);
        })
    },
    methods:{
      changetype(typeid,index){
         this.nowindex=index;
          this.currtype = typeid;
          this.$store.commit('changeType',this.currtype)
         
      }
  }
}
</script>
<style scoped  lang="scss" type="text/css">
  .aside{
    width: 25%;
    height: 95%;
    overflow-y: auto;
    font-size: .14rem;
    text-align: center;
    // background-color: rgb(231, 207, 207);
    list-style: none;
    box-sizing: border-box;
    border-right: 1px solid rgb(238, 238, 238);
  }
  .aside li{
    display: flex;
    height: .55rem;
    line-height: .55rem;
    justify-content: space-between;
    align-items: center;
  }
  .cdef{
    display: block;
    height: .2rem;
    width: .03rem;
    // float: left;
  }
  .c_mark{
    background-color: rgb(245, 61, 61);
  }
  .color{
    color: rgb(245, 61, 61);
  }
</style>
