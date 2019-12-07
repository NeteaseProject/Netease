<!--
 * @Author: osier
 * @Date: 2019-11-30 15:01:21
 * @LastEditors: osier
 * @LastEditTime: 2019-12-02 09:14:46
 * @Description: ..
 -->
<template>
  <div class="dedetile">
        <div class="returnBox returnBox1">
            <p><span>已选</span>&nbsp;&nbsp;150克×1</p>
            <span class="iconfont icon-youxiang"></span>
        </div>
        <div class="returnBox">
            <p><span>限制</span>&nbsp;&nbsp;特价商品不可与优惠券叠加使用</p>
        </div>
        <div class="returnBox returnBox2">
            <p><span>配送</span>&nbsp;&nbsp;至 西安市</p>
            <span class="iconfont icon-youxiang"></span>
        </div>
        <div class="returnBox returnBox3">
            <i>18:40前完成支付，预计11月28日送达</i>
        </div>
        <div class="returnBox returnBox2">
            <p class="re12">
                <span class="re2">·</span>&nbsp;不支持无忧退换货&nbsp;&nbsp;
                <span class="re2">·</span>&nbsp;48小时快速退款&nbsp;&nbsp;
                <span class="re2">·</span>&nbsp;满88元免邮费&nbsp;&nbsp;
                <span class="re2">·</span>&nbsp;网易自营品牌&nbsp;&nbsp;
                <span class="re2">·</span>&nbsp;国内部分地区不配送&nbsp;&nbsp;
            </p>
        </div>
  </div>
</template>

<script>
export default {
    name:'Detilesdetile',
    data(){
        return{

        }
    }
}
</script>

<style lang="scss" scoped="" type="text/css">
.dedetile{
    width:100%;
    height:2.32rem;
    margin-top:10px;
    background-color:white;
}
.returnBox1{
    margin-top:10px;
}
.dedetile .returnBox2{
    border-bottom:none;
}
.dedetile .returnBox3{
    margin-top:-28px;    
    padding-left: 40px;
}
.returnBox{
    width:100%;
    height:.5rem;
    display: flex;
    justify-content:left;
    align-items: center;
    background-color: white;
    box-sizing: border-box;
    border-bottom:0.5px solid rgb(230, 227, 227);
    p{
        font-size:14px;
        margin-left: 12px;
        display: block;
        span{
            color: rgb(150, 147, 147);
        }
    }
    i{
    font-style: normal;
    font-size:14px;    
    color:rgb(150, 147, 147);
    } 
}
.icon-youxiang{
    margin-left:2.24rem;
}
.returnBox p .re2{
    color:red;
    font-size:22px;
    text-align: center;
}
.re12{
    color: rgb(150, 147, 147);
}
</style>