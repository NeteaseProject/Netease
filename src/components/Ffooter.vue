<!--
 * @Author: 菲菲呀
 * @Date: 2019-11-26 09:31:07
 * @LastEditors: 菲菲呀
 * @LastEditTime: 2019-12-05 20:39:09
 * @Description: 
 -->
<template>
<div class="box">
    <div class="mainbox">
        <router-link to="Index" class="footer-icon">
            <i :class="{'red':$store.state.footerCls[0]}" @touchstart="changeCls(0)">
                <span class="iconfont icon-shouye1"></span>
                <span class="two_span">首页</span>
            </i> 
        </router-link>  
        <router-link to="Page1" class="footer-icon">
        <i :class="{'red':$store.state.footerCls[1]}" @touchstart="changeCls(1)">
            <span class="iconfont icon-fenlei"></span>
            <span class="two_span">分类</span>
        </i>
        </router-link>
        <router-link to="Page2" class="footer-icon">
        <i :class="{'red':$store.state.footerCls[2]}" @touchstart="changeCls(2)">
            <span class="iconfont icon-gouwuche4"></span>
            <span class="two_span">购物车</span>
        </i>
        </router-link>
        <router-link to="Page3" class="footer-icon">
        <i :class="{'red':$store.state.footerCls[3]}" @touchstart="changeCls(3)">
            <span class="iconfont icon-gerenzhongxin"></span>
            <span class="two_span">个人</span>
        </i>
        </router-link>
    </div>
</div>

    
</template>

<script>
export default {
  name: 'Ffooter',
  data () {
    return {
        // ok:true
    }
  },
  created(){
      console.log(this.$store.state);
  },
  methods:{
    changeCls(Index){  //改变
        // console.log(Index);
        // console.log("=====================")
        this.$store.commit('changefooter',Index);
    }
  }
}
</script>

<style lang="scss" scoped="" type="text/css">
.box{
    position:fixed;
    left:0;
    bottom:0;
    width:100%;
    border-top:1px solid #c0c0c0;
}
.mainbox{
    width:100%;
    height:.6rem;
    background:white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .footer-icon{
        color: #000;
    }
    i{
        font-size:14px;
        font-style:normal;
        display: block;
        span{
            display: block;
            text-align: center;
        }
        .iconfont{
            font-size: .25rem;

        }
    }
}
// red
.red .iconfont{
    color: red !important;
}
.red .two_span{
    color: red !important;
}   
</style>
