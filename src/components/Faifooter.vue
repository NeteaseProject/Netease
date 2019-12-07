<!--
 * @Author: 菲菲呀
 * @Date: 2019-11-26 09:31:07
 * @LastEditors: 菲菲呀
 * @LastEditTime: 2019-11-30 14:16:44
 * @Description: 
 -->
<template>
<div class="mainBox">
    <span class="iconfont icon-yuyin1"></span>
    <input class="text_con" type="text" >
    <input class="but_con" type="button" value="发送">
</div>
  
</template>
<script>
export default {
  name: 'Faifooter',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped="" type="text/css">
.mainBox{
    width:100%;
    height:.5rem;
    background:white;
    display: flex;
    // align-items: center;
    .icon-yuyin1{
        font-size: .3rem;
        margin-top: 0.18rem;
        margin-left: .06rem;
        background:white;
    }
    .text_con{
        width:2.8rem;
        height:.4rem;
        outline: none;
        border:none;
        border-bottom:1px solid #5496d2;
        // background:pink;
        padding-left:.1rem;
        padding-top:.1rem;
    }
    .but_con{
        width:.6rem;
        height:.35rem;
        background:red;
        line-height: .35rem;
        text-align: center;
        border:none;
        border-radius:5px;
        color: white;
        letter-spacing: .03rem;
        margin-top:.14rem;
    }
}


</style>
