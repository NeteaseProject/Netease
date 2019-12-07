<!--
 * @Author: your name
 * @Date: 2019-11-26 11:51:26
 * @LastEditTime: 2019-12-03 10:59:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day23d:\wangyiyanxuan\src\pages\Forget.vue
 -->
 <template>
	<div class="szBox">
		<div class="szheader">
			<img src="../assets/img/jiantou.jpg" @click="back()">
			<span>忘记密码</span>
		</div>
        <div class="L-center">
            <div class="L-center1">
                <img src="../assets/img/11.jpg" alt="">
            </div>
        </div>
		<div class="box_input">
			<input type="text" v-model="username" @blur="userna" value="" placeholder="请输入账号" id="username"  class="F-a"/>
            <p class="F-na">{{namemsg}}</p>
			<input type="password" v-model="pass" id="password01" @blur="password01()" value="" placeholder="请输入新密码" />
            <p class="F-na">{{Pass011}}</p>
			<input type="password"  id="password02" @blur="password02()" value="" placeholder="再次输入新密码" />
            <p class="F-na">{{Pass022}}</p>
		</div>
		<button @click="CheakBut">提交</button>
        <p class="F-na">{{tmsg}}</p>
	</div>
</template>

<script>
import axios from "axios";
export default {
  name: 'Forget',
  data () {
    return {
        username: "",
        namemsg: "请输入电话号码（11位）",
        pass: "",
        Pass011: "密码至少包含数字长度6-20 ",
        Pass022: "密码至少包含数字长度6-20 ",
        ms01:"1",
        ms02:"",
        tmsg:"",
        tsd:[]
    }
  },
  methods:{
      back(){
          this.$router.go(-1);
      },
      userna: function() {
        var usernam= document.getElementById('username').value;
        if(!(/^1(3|4|5|7|8)\d{9}$/.test(usernam))) {
            this.namemsg = "电话号码不合格，请输入11位电话号码"
            return;
        } else {
        console.log("222222")
            this.namemsg = "电话号合格"
        }
    },
    password01: function() {
        var pass01 = document.getElementById('password01').value;
            console.log(pass01+"55454");
        
        if(!(/^\d{6,20}$/.test(pass01))) {
            this.Pass011 = "密码不合格，密码至少包含数字长度6-20 ";
            this.ms01="0"
            return;
        }
        this.Pass011 = "密码合格";
            this.ms01="1"
    },
    password02: function() {
        var pass02 = document.getElementById('password02').value;
        var pass01 = document.getElementById('password01').value;
        if(pass01==pass02) {
            this.Pass022= "密码正确";
            this.ms02="1"
            
            console.log(pass02+"555");
        }else{
            console.log(pass01+"pass01");
            console.log(pass02);
            this.Pass022= "两次密码不一样请重新输入";
            this.ms02="1"
        } 
    },
    CheakBut:function() {
            let ms01 = this.ms01
            let ms02 = this.ms02
            if(ms01=="1" && ms02=="1"){
                let pass = document.getElementById('password01').value;
                let username= document.getElementById('username').value;
                // axios.patch('http://localhost:3000/login?username='+ username,{
                //     username:this.username,
                //     password:this.pass
                // })
                // .then(res => {
                //     console.log("修改")
                //     console.log(res);
                //     this.tsd=res.data;
                // })
                // .catch(err => {
                //     console.log(err);

                // })
                let id=window.localStorage.getItem("id");
                console.log(id);
                axios({
                    method:"patch",
                    url:"http://localhost:3000/login/"+id,
                    data:{
                        password:this.pass
                    }
                })
                .then((data)=>{
                    console.log(data); 
                    console.log("修改成功");
                    this.$router.push({
                        path: '/Login'
                        
                    })
                })
            }else{
                
            }
            
        }
  }
}
</script>

<style scoped>
	.szheader {
        width:100%;
        height:0.45rem;
        background:#fafafa;
        display:-webkit-flex;
        justify-content: space-between;
	}
	
	.szheader img {
		display:inline-block;
        width:0.5rem;
        height:0.45rem;
	}
	
	.szheader span {
		width:3.22rem;
        height:0.45rem;
        margin-left:27%;
        line-height:0.45rem;
        color:#202020;
        font-weight:600;
        font-size:0.19rem;
	}
    .L-center{
        width:100%;
        height:1.2rem;
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
	.box_input {
		width:3.4rem;
        margin:0 auto;
    }
	input {
		display:block;
        width:3.4rem;
        height:0.55rem;
        border:none;
        font-size:0.13rem;
        font-weight:600;
        border-bottom:1px solid #b0bfc6;
        outline: none;
        margin-top:0.2rem;
	}
    .F-a{
        margin-top:0rem;
    }
	button {
		display:block;
        width:3.4rem;
        margin:0 auto;
        height:0.42rem;
        background:red;
        border-radius:9px;
        text-align:center;
        line-height:0.4rem;
        border:none;
        color:#ffffff;
        font-weight:600;
        margin-top:0.4rem;
        font-size:0.16rem;
	}
    .F-na{
        font-size:12px;
        margin-top:9px;
    }
</style>
