<!--
 * @Author: 菲菲呀
 * @Date: 2019-11-26 09:31:07
 * @LastEditors: 菲菲呀
 * @LastEditTime: 2019-12-06 10:00:26
 * @Description: 
 -->
<template>
<div class="mainBox" v-show="ok">
    <ul>
        <li v-for="(nextpage,index) in nextpages" :key="index" :class="nextpage.id==oldindex?'red':''" @touchstart="getchange(nextpage.id)">
            <div :class="{red_one:nextpage.id==oldindex,imgs:true}">
                <img :src="nextpage.src" alt="">
            </div>
            <span>{{nextpage.tit}}</span>
        </li>
    </ul>
    <!-- <Fchildpage></Fchildpage> -->
</div>
  
</template>
<script>
export default {
  name: 'Fimgrun',
  data(){
    return {
        nextpages:[],
        oldindex:'004',
        "ok":true
    }
  },
  methods:{
      getchange(id){
         this.oldindex = id ;
      }
  },
  created(){
      fetch("/api/nextpages")
      .then(res=>{
          return res.json();
      })
      .then(data=>{
          this.nextpages = data;
      })
      .catch(err=>{
          console.log(err)
      })
  }
}
</script>

<style lang="scss" scoped="" type="text/css">
.mainBox{
    width:100%;
    height:.9rem;
    // background:white;

    ul{
        width:100%;
        display: flex;
        justify-content: space-around;
        list-style: none;
        align-items: center;
        flex-shrink: 0;
        overflow-x: auto;
        // padding-left: .6rem;
        box-sizing: border-box;
        
        li{
            width:.6rem;
            font-size:12px;
            margin:0 .07rem;
            
            .imgs{
                 width:.6rem;
                height:.6rem;
                border:1px solid #d9d9d9;
                border-radius:4px;
                position: relative;
                background:white;
                img{
                display: block;
                position: absolute;
                width:.45rem;
                height:.45rem;
                left:0;
                right:0;
                bottom: 0;
                top:0;
                margin:auto;
                }
            }
            .red_one{
                border:1px solid red;
                border-radius:4px;
            }
            span{
                width:.55rem;
                display: block;
                text-align: center;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;  //多行文字显示省略号
            }
        }
        .red{
            color:red;
        }
        
    }
}
</style>
