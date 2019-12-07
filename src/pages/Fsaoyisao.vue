<!--
 * @Author: 菲菲呀
 * @Date: 2019-11-26 09:31:07
 * @LastEditors: 菲菲呀
 * @LastEditTime: 2019-12-07 11:23:47
 * @Description: 
 -->
<template>
  <div class="fbanner">
    <div class="scan">
      <div class="news_box">
        <div class="box">
            <span class="iconfont icon-xuanzeyuefenzuojiantou-" @click="goPage"></span>
            <p>二维码</p>
            <span class="crema">相册</span>
        </div>
      </div>
      <div id="bcid">
        <div style="height:70%"></div>
        <p class="tip"><i class="el-icon-loading"></i></p>
      </div>
      <footer class="foot">
        <button @click="startRecognize">扫一扫</button>
        <button @click="startScan">开始扫描</button>
        <button @click="closeScan">关闭</button>
      </footer>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
import Fnewheader from '../components/Fnewheader'
  let scan = null;

  export default {
    data() {
      return {
        codeUrl: '',
      }
    },
    components:{
        Fnewheader
    },
    methods: {
      //创建扫描控件
      startRecognize(){
        let that = this;
        if (!window.plus) return;
        scan = new plus.barcode.Barcode('bcid');
        scan.onmarked = onmarked;

        function onmarked(type, result, file) {
          switch (type) {
            case plus.barcode.QR:
              type = 'QR';
              break;
            case plus.barcode.EAN13:
              type = 'EAN13';
              break;
            case plus.barcode.EAN8:
              type = 'EAN8';
              break;
            default:
              type = '其它' + type;
              break;
          }
          result = result.replace(/\n/g, '');
          that.codeUrl = result;
          alert(result);
          that.closeScan();

        }
      },
      goPage(){
          this.$router.go(-1)
          console.log("---------")
      },
      //开始扫描
      startScan() {
        if (!window.plus) return;
        scan.start();
      },
      //关闭扫描
      cancelScan() {
        if (!window.plus) return;
        scan.cancel();
      },
      //关闭条码识别控件
      closeScan() {
        if (!window.plus) return;
        scan.close();
      },
    }
  }
</script>

<style lang="scss" scoped="" type="text/css">
.news_box{
    width:100%;
    height:.5rem;
    background:white;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
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
        .crema{
          font-size: .16rem;
        }
        p{
            font-size: .18rem;
        }
    }
}
.el-icon-loading{
  font-size: .35rem;
}

.scan {
    margin-top:2rem;
    height: 100%;
    p{
        font-size:.2rem;
        color:#000;
    }
    #bcid {
      width: 100%;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom:1rem;
      text-align: center;
      color: #fff;
    //   background: #ccc;
    }
    .foot {
      position: absolute;
      box-sizing: border-box;
      width: 100%;
      left:0;
      bottom: 0;
      height: .4rem;
      line-height: 1rem;
      display: flex;
      justify-content: space-around;
      z-index: 2;
      button{
        display: block;
        width: 1rem;
        border: none;
        outline: none;
      }
    }
  }

</style>
