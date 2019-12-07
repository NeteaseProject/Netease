<!--
 * @Author: 陈晶华
 * @Date: 2019-11-26 09:28:31
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-11-26 20:32:46
 * @Description: 
 -->
<template>
    <div class="Csearch">
      <div class="c_inp">
        <input type="text" class="sinp" value="轻薄简雅居家拖鞋">
        <span class="iconfont icon-search sicon"></span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Csearch',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Csearch{
    height: .5rem;
    width: 100%;
    background-color:#fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgb(228, 227, 227);
    position: fixed;
    top: 0;
    left: 0;
  }
  .c_inp{
    width: 90%;
    height: 62%;
    margin-top: .08rem;
    position: relative;
    box-sizing: border-box;
  }
  .sinp{
    height: 100%;
    width: 100%;
    display: block;
    border: none;
    outline: none;
    box-sizing: border-box;
    background-color: rgb(237, 237, 237);
    padding: 0 .1rem;
    padding-left: .3rem;
    border-radius: .05rem;
    /* text-align: center; */
    color: rgb(127, 127, 127);
  }
  .c_inp .sicon{
    display: block;
    position: absolute;
    top: .08rem;
    left: .05rem;
    font-size: .2rem;
  }
</style>
