<!--
 * @Author: your name
 * @Date: 2019-11-26 10:13:21
 * @LastEditTime: 2019-12-09 20:08:02
 * @LastEditors: osier
 * @Description: In User Settings Edit
 * @FilePath: \day23d:\wangyiyanxuan\src\pages\Login.vue
 -->
<template>
    <div class="L-box">
        <div class="L-top">
            <img src="../assets/img/jiantou.jpg" @click="back()">
            <span>手机号登录</span>
        </div>
        <div class="L-center">
            <div class="L-center1">
                <img src="../assets/img/11.jpg" alt="">
            </div>
        </div>
        <div class="L-bottom">
            <div class="L-bottom1">
                <input type="text" @blur="nameCheck" placeholder="请输入手机号" v-model="username" id="username">
                <span class="R-w">{{namemsg}}</span>
                <div class="R-ps">
                    <input type="password" @blur="passCheck()" placeholder="密码" v-model="password" id="password">
                    <span class="iconfont icon-mima3" v-show="eyes" @click="yanjing()"></span>
                    <span class="iconfont icon-zhengyan" v-show="!eyes" @click="yanjing()"></span>
                    <span class="R-w">{{passmsg}}</span>
                </div>
            </div>
            <router-link to='./Forget'>
            <div class="L-bottom2">
                <span>忘记密码</span>
            </div>
            </router-link>
            <button @click="loginCheck()">登录</button>
            <span class="R-w R-u">{{butmsg}}</span>
            <!-- <span class="iconfont icon-home1"></span> -->
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'Login',
    data () {
        return {
                username: "",
                password: "",
                namemsg: "请输入11位电话号码",
                passmsg: "请输入长度6-20的纯数字密码",
                msg01: "",
                msg02: "",
                butmsg:"",
                eyes:true
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        yanjing(){
            this.eyes=!this.eyes},
        nameCheck: function() {
            var name = document.getElementById('username').value;
            if(!(/^1(3|4|5|7|8)\d{9}$/.test( name))){
            // alert("用。。。户名不合格，请输入8到16位（开头为字母） ");
                this.namemsg = "用户名不合格,请输入11位电话号码"
                this.msg01 = "0"
                return;
            }
            this.namemsg = "用户名合格"
            this.msg01 = "1"

            console.log(this.msg01 + "111")
        },
        passCheck: function() {

            var pass = document.getElementById('password').value;
            if(!(/^\d{6,20}$/.test(pass))) {
                this.passmsg = "密码不合格，密码至少长度6-20的纯数字"
                this.msg02 = "0"
                return;

            }
            this.passmsg = "密码合格"
            this.msg02 = "1"
            console.log(this.msg02 + "111")
        },
        loginCheck: function() {
				var name = document.getElementById('username').value;
				var pass = document.getElementById('password').value;
				if(this.username == "" || this.password == "") {
					this.butmsg = "用户名或密码不能为空"
				} else {
					this.butmsg = ""

				}

				axios.get('http://localhost:3000/login?username='+ name)
					.then(res => {
                        // let data = res.json();
						console.log(res.data);
						if(res.data.length!= 0 && pass==res.data[0].password) {
                            console.log("正确")
                            let id=res.data[0].id;
                            console.log(id);
							window.localStorage.setItem('name', name);
							window.localStorage.setItem('id', id);
                            this.butmsg = "登录成功";
							this.$router.push({
								path: '/Index'
								
							})
						} else  {

							this.butmsg = "用户名或密码不正确";
						}
					})
					.catch(err => {
							console.log(err);
					})
					}
            }
    }
</script>
<style scoped height="100%" >
.L-box{
    width:100%;
    background-color: #fff;
    padding-bottom:2.1rem;
}
.L-top
{
    width:100%;
    height:0.45rem;
    background:#fafafa;
    display:-webkit-flex;
    justify-content: space-between;
}
.L-top img{
    display:inline-block;
    width:0.5rem;
    height:0.45rem;
}
.L-top span{
    width:3.22rem;
    height:0.45rem;
    margin-left:27%;
    line-height:0.45rem;
    color:#202020;
    font-weight:600;
    font-size:0.19rem;
}
.R-w{
    width:3.4rem;
    height:0.18rem;
    line-height:0.18rem;
    margin-top:14px;
    font-size:13px;
    display:block;
    color:#0c0a09;
    font-weight:600;
}
.R-u{
    text-align:center;
    color:red;
    padding-top:14px;
    font-weight:600;
    margin:0 auto;
}
.L-center{
    width:100%;
    height:1.3rem;
    display:flex;
    align-items: center;
    justify-content: center;
}
.L-center1{
    width:1.5rem;
    height:0.5rem;
    display:flex;
    justify-content: center;
    align-items: center;
}
.L-center1 img{
    width:1.5rem;
    height:0.5rem;
}
.L-bottom{
    width:100%;
}
.R-ps{
    width:3.4rem;
    height:0.63rem;
    margin-bottom:5px;
    font-weight:600;
    font-size:0.14rem;
    position:relative;
}
.icon-zhengyan,.icon-mima3{
     font-size:24px;
     /* margin-left:90%; */
     position:absolute;
     top:35%;
     left:90%;
     display:inline-block;
     /* margin-top:-10%; */
}
.L-bottom1{
    width:3.4rem;
    height:1.4rem;
    margin:0 auto;
}
/* #username{
    display:block;
    width:3.4rem;
    height:0.45rem;
    border:none;
    margin-bottom:5px;
    font-weight:600;
    font-size:0.14rem;
    border-bottom:1px solid #b0bfc6;
    outline: none;
} */
/* .R-ps input{
    display:block;
    width:3.4rem;
    height:0.45rem;
    border:none;
    margin-bottom:5px;
    font-weight:600;
    font-size:0.14rem;
    border-bottom:1px solid #b0bfc6;
    outline: none;
}  */
.L-bottom1 input{
    display:block;
    width:3.4rem;
    height:0.45rem;
    border:none;
    margin-bottom:5px;
    font-weight:600;
    font-size:0.14rem;
    border-bottom:1px solid #b0bfc6;
    outline: none;
}
.L-bottom2{
    width:0.6rem;
    height:0.3rem;
    font-size:0.14rem;
    margin-left:74%;
    text-align:center;
    margin-top:0.22rem;
    line-height:0.3rem;
    font-weight:600;
    margin-bottom:10px;
}
.L-bottom button{
    display:block;
    width:3.4rem;
    margin:0 auto;
    height:0.45rem;
    margin-top:0.15rem;
    background:red;
    text-align:center;
    border-radius: 6px;
    line-height:0.4rem;
    border:none;
    color:#ffffff;
    font-weight:600;
    font-size:0.16rem;
}
</style>
