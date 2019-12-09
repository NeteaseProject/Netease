<!--
 * @Author: your name
 * @Date: 2019-11-26 14:04:01
 * @LastEditTime: 2019-12-09 19:56:03
 * @LastEditors: osier
 * @Description: In User Settings Edit
 * @FilePath: \day23d:\wangyiyanxuan\src\pages\Registered.vue
 -->
 <template>
  <div class="R-box">
    <div class="R-top">
      <img src="../assets/img/11.jpg" alt />
    </div>
    <div class="R-center">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(book,index) in books" :key="index">
            <img :src="book.img" />
          </div>
        </div>
      </div>
    </div>
    <div class="R-bottom">
      <router-link to="Login">
        <button class="R-a1">
          <img src="../assets/img/shouji.png" alt />
          <span>手机号登录</span>
        </button>
      </router-link>
      <div class="R-b">
        <div class="R-c">
          <img src="../assets/img/weixin.png" alt />
          <span>微信</span>
        </div>
        <div class="R-c">
          <img src="../assets/img/qq.png" alt id="R-n" />
          <span id="R-m">QQ</span>
        </div>
        <div class="R-c">
          <img src="../assets/img/weibo.png" alt id="R-i" />
          <span id="R-y">微博</span>
        </div>
        <div class="R-c">
          <img src="../assets/img/yi.png" alt id="R-i" />
          <span id="R-y">企业邮</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Registered",
  data() {
    return {
      books: []
    };
  },
  created: function() {
    fetch("http://localhost:3000/bannerimg")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.books = data;
        console.log(this.books)
        this.$nextTick(function() {
          //  let dom = document.getElementsByClassName("swiper-wrapper")[0];
          //  console.log(dom);
         let mySwiper = new Swiper(".swiper-container", {
            autoplay: true,
            grabCursor: true,
            loop: true,
            // effect: "fade",
            delay: 3000,
            // effect : 'fade',
            fadeEffect: {
                crossFade: true,
            }
          });
        });

      })
      .catch(err => {
        console.log(err);
      });
  },
  mounted: function() {
    //此时已经有dom了。
    // var mySwiper = new Swiper ('.swiper-container',{
    //     autoplay:true,
    //     grabCursor:true,
    //     // loop:true,
    //     effect: 'fade',
    //     // delay:3000,
    //     fadeEffect: {
    //         crossFade: true
    //     }
  },
  beforeUpdate() {}
};
</script>

<style scoped>
@import url(https://unpkg.com/swiper/css/swiper.css);
body{
  background:white;
}
.R-box {
  width: 100%;
  background: white;
}
.R-top {
  width: 100%;
  height: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.R-top img {
  width: 1.5rem;
  height: 0.5rem;
}
.R-center {
  width: 100%;
  height: 4.15rem;
}
.swiper-container {
  width: 100%;
  height: 4rem;
}
.swiper-container img {
  width: 100%;
  height: 3.5rem;
}
.R-bottom {
  width: 100%;
  height: 1.3rem;
  padding-bottom:10px;
}
.R-a1 {
  display: block;
  width: 3.2rem;
  height: 0.45rem;
  background: #ce0b2f;
  margin: 0 auto;
  border: none;
  font-weight: 600;
  display: flex;
  border-radius: 9px;
  align-items: center;
  margin-bottom:0;
}
.R-a1 img {
  width: 0.25rem;
  margin-left: 31%;
  height: 0.25rem;
  margin-top: 8px;
}
.R-a1 span {
  width: 1rem;
  height: 0.45rem;
  font-size: 0.14rem;
  color: white;
  line-height: 0.45rem;
}
.R-b {
  width: 3.2rem;
  height: 0.4rem;
  margin: 0 auto;
  margin-top: 10%;
  display: flex;
  flex: 1;
  /* margin-top:0.5rem; */
}
.R-c {
  width: 25%;
  height: 0.4rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
#R-i {
  width: 24%;
  height: 0.24rem;
}
#R-y {
  width: 74%;
}
.R-c img {
  width: 35%;
  height: 0.3rem;
}

.R-c span {
  width: 60%;
  height: 0.5rem;
  text-align: center;
  color: #6f797b;
  font-weight: 600;
  font-size: 0.15rem;
  line-height: 0.5rem;
}
</style>