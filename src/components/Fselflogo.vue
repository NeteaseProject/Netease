<!--
 * @Author: 菲菲呀
 * @Date: 2019-11-26 09:31:07
 * @LastEditors: 菲菲呀
 * @LastEditTime: 2019-11-28 16:39:24
 * @Description: 
 -->
<template>
  <div>
    <div class="selfBox">
        <i><span class="iconfont icon-wangyi"></span>网易自营品牌</i>
        <i><span class="iconfont icon-shouhouwuyou"></span>30天无忧退换货</i>
        <i><span class="iconfont icon-tuikuan"></span>48小时快速退款</i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Fselflogo',
  data () {
    return {
      
    }
  }
}
</script>


<style lang="scss" scoped="" type="text/css">
    .selfBox{
        width:100%;
        height:.4rem;
        background:white;
        display: flex;
        align-items: center;
        justify-content: space-around;
        i{
            font-size:12px;
            color: #cd222a;
            font-style: normal;
            .iconfont{
                margin-right: .03rem;
            }
        }
    }
</style>
