/*
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
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD
<<<<<<< HEAD
import store from './store'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


=======
import Axios from 'axios'
>>>>>>> b421aef870892733c2a40e148d86f4daa135ffd5
import "./font/iconfont.css"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
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
  components: { App },
  template: '<App/>'
})
