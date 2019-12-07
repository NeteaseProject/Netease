<!--
 * @Author: 菲菲呀
 * @Date: 2019-11-26 09:31:07
 * @LastEditors: 菲菲呀
 * @LastEditTime: 2019-12-07 09:30:50
 * @Description: 
 -->
<template>
<div class="mainBox">
    <div class="news_box">
        <div class="box">
            <span class="iconfont icon-xuanzeyuefenzuojiantou-" @click="goPage"></span>
            <p>消息中心</p>
            <span></span>
        </div>
    </div>
</div>
  
</template>
<script>
export default {
  name: 'Fnews',
  data () {
    return {
    }
  },
  methods:{
      goPage(){
          this.$router.go(-1)
          console.log("---------")
      }
  }
}
</script>

<style lang="scss" scoped="" type="text/css">
.news_box{
    width:100%;
    height:.5rem;
    background:white;
    .box{
    width:94%;
    height:.5rem;
    background:white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin:0 auto;
        span{
            font-size: .25rem;
        }
        p{
            font-size: .16rem;
        }
    }
}

</style>
