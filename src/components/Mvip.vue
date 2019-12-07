<!--
 * @Author: 陈晶华
 * @Date: 2019-11-28 20:31:33
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-12-02 10:09:27
 * @Description: "..."
 -->

<template>
   <div class="Mvip">
       <div class="vipcard">
           <div class="m_svip">
               <span class="iconfont icon-tianchongxing-"></span>
               <span class="viptit">超级会员</span>
           </div>
           <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="activebanner swiper-slide" v-for="(item,index) in m_actbannerinfos" :key="index">
                        <router-link to="#">
                            <div class="m_banner">
                                <div class="ban_tit">
                                    {{item.act_tit}}
                                    <span class="iconfont icon-you"></span>
                                </div>
                                <span class="content">{{item.act_content}}</span>
                            </div>
                        </router-link>
                        <router-link to="#">
                            <div class="m_img">
                                <img :src="item.actimg_url" alt="">
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
       </div>
   </div>
</template>

<script>
import Swiper from 'swiper'; 
export default {
  name: 'Mvip',
  data () {
    return {
        m_actbannerinfos:[]
    }
  },
    created:function(){
        fetch('http://localhost:3000/activebannerinfos')
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            this.m_actbannerinfos = data;
            // console.log(data);
            this.$nextTick(function(){
                 let dom = document.getElementsByClassName("swiper-wrapper")[0];
                //  console.log(dom.innerHTML);
                 let mySwiper = new Swiper ('.swiper-container',{
                    direction: 'vertical', // 垂直切换选项
                    loop: true, // 循环模式选项
                    autoplay:true,
                    speed:500,
                    spaceBetween: 20,
                    slidesPerView: 1,
                    grabCursor:true
                })
            });
        })
        .catch(err=>{
            console.log(err);
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss" type="text/css">
@import url(https://unpkg.com/swiper/css/swiper.css);
  .Mvip{
      height: .7rem;
      background-image: url(../assets/img/vipbg.png);
      background-size: 100% 100%;
      box-sizing: border-box;
      padding-top: .03rem;
      overflow: hidden;
      .vipcard{
          height: .6rem;
          width: 90%;
          background-image: url(../assets/img/vipcardbg.png);
          background-size: 100% 100%;
          margin: 0 auto;
          box-sizing: border-box;
          border-radius: .1rem .1rem 0 0;
          padding: .05rem;
          display: flex;
        //   align-items: center;
        //   justify-content: space-between;
      }
      .activebanner{
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 2.4rem;
          .m_img{
                height: .45rem;
                width: .45rem;
                // background-color: rgb(241, 223, 223);
                // margin-left: .2rem;
                img{
                    display: block;
                    // height: 100%;
                    width: 100%;
                }
            }
      }
      .m_svip{
          width:.8rem;
          height: 100%;
        //   padding: .05rem 0;
          border-right: 1px solid #666;
      }
      .icon-tianchongxing-{
            background: linear-gradient(to right, #fdead6, #fdc877);
            -webkit-background-clip: text;
            color: transparent;
            display: block;
            font-size: .2rem;
            width: .2rem;
            margin: 0 auto;
            padding-top: .05rem;
        }
        .viptit{
            font-size: .12rem;
            display: block;
             background: linear-gradient(to right, #fdfdfc, #ffdba4);
            -webkit-background-clip: text;
            color: transparent;
            font-family: "微软雅黑";
            text-align: center;
            margin: 0 auto;
            font-weight: 700;
            width: .6rem;
        }
        .m_banner{
            box-sizing: border-box;
            padding: .05rem;
            .ban_tit{
                font-size: .13rem;
                color:  #fdead6;
                line-height: .2rem;
                display: flex;
                // justify-content: space-between;/
                .icon-you{
                    display: block;
                    font-size: .16rem;
                    margin-top: .02rem;
                }
            }
            .content{
                font-size: .12rem;
                color:  #fdead6;
                display: block;
            }
        }
  }
</style>
