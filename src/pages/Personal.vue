<!--
 * @Author: your name
 * @Date: 2019-11-19 21:16:11
 * @LastEditTime: 2019-11-30 17:42:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wangyiyanxuan\src\pages\Personal.vue
 -->
<template>
    <div class="P-box">
        <div class="P-top">
            <img src="../assets/img/jiantou.jpg" @click="back()">
            <span>个人中心</span>
        </div>
        <div class="P-bottom">
            <div class="P-tt">
            <div class="P-top1">
                <div class="P-left">个人信息
                </div>
                <div class="P-right">
                    <img src="../assets/img/a1.jpg" alt="" class="P-a1">
                    <img src="../assets/img/2.jpg" alt="" class="P-a2">
                </div>
            </div>
            <div class="P-top1">
                <div class="P-left1">我的二维码
                </div>
                <div class="P-right">
                    <img src="../assets/img/a3.jpg" alt="" class="P-a1">
                    <img src="../assets/img/2.jpg" alt="" class="P-a2">
                </div>
            </div>
            <div class="P-top1">
                <div class="P-left">我的尺码
                </div>
                <div class="P-right">
                    <img src="../assets/img/a4.jpg" alt="" class="P-a1">
                    <img src="../assets/img/2.jpg" alt="" class="P-a2">
                </div>
            </div>
            <div class="P-top1">
                <div class="P-left">账号安全
                </div>
                <div class="P-right">
                    <img src="" alt="" class="P-a1">
                    <img src="../assets/img/2.jpg" alt="" class="P-a2">
                </div>
            </div>
            <div class="P-top1">
                <div class="P-left1">会员俱乐部
                </div>
                <div class="P-right1">
                    <span>普通用户</span>
                    <img src="../assets/img/2.jpg" alt="" class="P-a2">
                </div>
            </div>
            <div class="P-top1">
                <div class="P-left">积分商城
                </div>
                <div class="P-right">
                    <img src="" alt="" class="P-a1">
                    <img src="../assets/img/2.jpg" alt="" class="P-a2">
                </div>
            </div>
            <div class="P-top1">
                <div class="P-left11">在校大学生认证
                </div>
                <div class="P-right1">
                    <span class="P-bb">未认证</span>
                    <img src="../assets/img/2.jpg" alt="" class="P-a2">
                </div>
            </div>
            <button class="R-tui" @click="tui">退出登录</button>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Personal',
    data () {
        return {
        
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        tui: function() {
            let name1 = localStorage.getItem('name');
            if(!name1 == "") {
                let name = ""
                window.localStorage.setItem('name', name);
                this.$router.push({
                    path: '/Forget'
                })
            }else{
                alert("请登录")
            }

        }
    }
}
</script>
<style scoped>
.P-box{
    width:100%;
}
.P-top
{
    width:100%;
    height:0.45rem;
    background:#fafafa;
    display:-webkit-flex;
    justify-content: space-between;
}
.P-top img{
    display:inline-block;
    width:0.5rem;
    height:0.45rem;
}
.P-top span{
    width:3.22rem;
    height:0.45rem;
    margin-left:30%;
    line-height:0.45rem;
    color:#202020;
    font-weight:600;
    font-size:0.19rem;
}
.P-bottom{
    width:100%;
    height:4rem;
    background:#f4f4f4;
    padding-top:0.13rem;
    box-sizing: border-box;
}
.P-tt{
    width:100%;
    height:4rem;
    background:white;
}
.P-top1{
    width:3.55rem;
    height:0.54rem;
    margin-left:5%;
    border-bottom:1px solid #dcdcdc;
    display: flex;
    justify-content: space-between;
}
.P-left{
    width:0.57rem;
    height:0.54rem;
    line-height:0.54rem;
    text-align:center;
    font-size:0.14rem;
    font-weight:600;
}
.P-left11{
    width:1.01rem;
    height:0.54rem;
    line-height:0.54rem;
    text-align:center;
    font-size:0.14rem;
    font-weight:600;
}
.P-right{
    width:0.54rem;
    height:0.54rem;
    display: flex;
    justify-content: space-between;
}
.P-right1{
    width:0.9rem;
    height:0.54rem;
    display: flex;
    justify-content: space-between;
}
.P-right1 span{
    width:0.65rem;
    height:0.54rem;
    color:#6e6e6e;
    font-weight:600;
    font-size:0.14rem;
    line-height:0.54rem;
}
.P-bb{
    width:0.65rem;
    height:0.54rem;
    color:#6e6e6e;
    font-weight:600;
    text-align:center;
    font-size:0.14rem;
    line-height:0.54rem;
}
.P-right11{
    width:0.9rem;
    height:0.54rem;
    display: flex;
    justify-content: space-between;
}
.P-a1{
    width:0.28rem;
    height:0.54rem;
}
.P-a2{
    width:0.24rem;
    height:0.54rem;
}
.P-left1{
    width:0.72rem;
    height:0.54rem;
    line-height:0.54rem;
    text-align:center;
    font-size:0.14rem;
    font-weight:600;
}
.R-tui{
    width:1.3rem;
    height:0.34rem;
    margin-left:32%;
    background:red;
    text-align:center;
    color:white;
    font-weight:600;
    border-radius: 9px;
    font-size:0.12rem;
    border:none;
    display:block;
    margin-top:5%;
}
</style>
