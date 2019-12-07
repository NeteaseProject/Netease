/*
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
 * @Author: 陈晶华
 * @Date: 2019-11-26 09:28:31
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-12-05 12:08:19
 * @Description: 
=======
 * @Author: your name
 * @Date: 2019-11-19 20:37:42
 * @LastEditTime: 2019-11-29 18:03:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day23d:\wangyiyanxuan\src\main.js
>>>>>>> b421aef870892733c2a40e148d86f4daa135ffd5
=======
 * @Author: renhui
 * @Date: 2019-11-26 10:53:18
 * @LastEditors: osier
 * @LastEditTime: 2019-12-07 10:57:09
 * @Description: ..
>>>>>>> osior
=======
 * @Author: 菲菲呀
 * @Date: 2019-11-26 09:31:07
 * @LastEditors: 菲菲呀
 * @LastEditTime: 2019-12-06 10:06:06
 * @Description: 
>>>>>>> feifei
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> feifei
import store from './store'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
<<<<<<< HEAD

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


=======
import Axios from 'axios'
>>>>>>> b421aef870892733c2a40e148d86f4daa135ffd5
import "./font/iconfont.css"

Vue.config.productionTip = false

=======
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import './font/iconfont.css'
import './font/iconfont.js'
Vue.config.productionTip = false
import Axios from 'axios';
Axios.defaults.baseURL = '/api/'
>>>>>>> feifei
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
<<<<<<< HEAD
<<<<<<< HEAD
  store,
=======
>>>>>>> b421aef870892733c2a40e148d86f4daa135ffd5
=======
import './font/iconfont.css'
import MintUI from 'mint-ui' 
import 'mint-ui/lib/style.css' 
Vue.use(MintUI)
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import Axios from 'axios'; 

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
>>>>>>> osior
=======
  store,
>>>>>>> feifei
  components: { App },
  template: '<App/>'
})
