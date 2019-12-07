<!--
 * @Author: 菲菲呀
 * @Date: 2019-11-26 09:31:07
 * @LastEditors: 菲菲呀
 * @LastEditTime: 2019-12-07 09:23:53
 * @Description: 
 -->
<template>
<div class="box">
  <div class="helloMain" v-show="ok">
    <div class="headertopBox">
      <a href="#">
        <img src="../../static/img/fheader1.jpg" alt="">
      </a>
      <div class="fheaderright" @touchstart="saoyisao()">
        <span class="iconfont icon-richscan_icon"></span>
        <span>扫一扫</span>
      </div>
      <div class="fheadertwo" @click="goNews">
        <span class="iconfont icon-xiaoxi5"></span>
        <span>消息</span>
      </div>
    </div>
    <div class="hello">
      <div class="headertopBox">
          <input class="action" type="text" placeholder="扫拖两用机器人">
      </div>
    </div>
  </div>
 <div class="hello_two" v-show="!ok">
    <div class="headertopBox" id="headertop_Box">
      <input class="notdisplay" type="text" placeholder="扫拖两用机器人">
      <div class="fheader_right" @touchstart="getpic()">
        <span class="iconfont icon-richscan_icon"></span>
          <span>扫一扫</span>
      </div>
      <div class="fheader_two" @click="goNews">
        <span class="iconfont icon-xiaoxi5"></span>
        <span>消息</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Fheader',
  data () {
    return {
      ok:true
    }
  },
  mounted(){
       window.addEventListener("scroll",this.getscroll);
  },
  methods:{
    goNews(){
      this.$router.push({path:'Fnews'})
    },
    saoyisao(){
      this.$router.push({
        path:'./Fsaoyisao'
      })
    },
    getpic:function(){
      var cmr = window.plus.camera.getCamera();//获取摄像头对象
      var res = cmr.supportedImageResolutions[2];//获取支持的分辨率，这里是第三个分辨率,直接使用supportenImageResolutions可以获取自己手机所支持的分辨率有多少种格式，返回值类型 string[]
      var fmt = cmr.supportedImageFormats[0];//JPG格式，
  
      cmr.captureImage( function( path ){//成功回调函数，获取路径
        alert( "拍照成功");
        //把保存在app目录下的照片显示在img标签里
      window.plus.io.resolveLocalFileSystemURL(path, function(entry) {
        let pathPhoto = entry.toLocalURL();
        console.log(pathPhoto);
        document.getElementById("imgId").src=pathPhoto;
				}, function(e) {
          console.log("出错了！");
				});
          },
          function( error ) {
              alert( "Capture image failed: " + error.message );
          },
          {resolution:res,format:fmt}//分辨率和格式，必填，就是上面获取到的。
        );
    },
    getscroll(){
      if(
        !!document.documentElement.scrollTop &&
        document.documentElement.scrollTop >= 100
      ){            
        this.ok=false
      }else{
        this.ok=true
      }
      // console.log(document.documentElement.scrollTop)
    }
  }
}
</script>


<style scoped>
.helloMain{
  width: 100%;
  /* margin-top: .8rem; */
}
.headertopBox{
    width:100%;
    height:.6rem;
    background:#c64353;
    display: flex;
    align-items: center;
    color:white;
  }

.headertopBox .iconfont{
    text-align: center;
    font-size:.2rem;
  }
.headertopBox a{
    display: block;
    width:1.4rem;
    height:.6rem;
    display: flex;
  }
.headertopBox img{
    width:100%;
    height:100%;
  }
 #headertop_Box{
    width:100%;
    height:.6rem;
    background:white;
    display: flex;
    align-items: center;
    color:white;
  }
.fheaderright{
    /* background:pink; */
    margin-left:1.4rem;
    margin-right:.2rem;
  }
.fheaderright span{
    display: block;
    font-size:12px;
  }
.fheadertwo span{
    display: block;
    font-size:12px;
  }
.fheadertwo .icon-xiaoxi{
    font-size:.3rem;
  }
.hello_two{
  width:100%;
  position:fixed;
  left:0;
  top:0;
  z-index:1000;
  background:white;
}
  .headertopBox{
    width:100%;
    height:.5rem;
    background:#c64353;
    display: flex;
  }
.headertopBox .action{
    background-image:url(../../static/img/fsearch.jpg);
    background-repeat: no-repeat;
    background-size: .2rem .2rem;
    background-position: 1.1rem;
    background-position-y:.05rem;
    width:96%;
    height:.35rem;
    outline: none;
    /* border:none; */
    border:1px solid #f5f5f5;
    text-align: center;
    margin:0 auto;
}
.notdisplay{
  background-image:url(../../static/img/fsearch.jpg);
    background-repeat: no-repeat;
    background-size: .2rem .2rem;
    background-position: .6rem;
    background-position-y:.05rem;
    width:70%;
    height:.35rem;
    outline: none;
    /* border:none; */
    border:1px solid red;
    text-align: center;
    margin-left:.1rem;
    
}
.fheader_right{
  margin-left:.1rem;
  margin-right:.2rem;
}
.fheader_right span{
    display: block;
    font-size:12px;
    color: black;
  }
.fheader_two span{
    display: block;
    font-size:12px;
    color: black;
  }
.hello_two  .fheader_two .icon-xiaoxi5{
    font-size:.2rem;
    color: red;
    /* color: black; */
  }
</style>
