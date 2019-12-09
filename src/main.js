/*
 * @Author: 陈晶华
 * @Date: 2019-11-26 09:28:31
 * @LastEditors: osier
 * @LastEditTime: 2019-12-09 10:56:35
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
=======
 * @Author: 菲菲呀
 * @Date: 2019-11-26 09:31:07
 * @LastEditors: 菲菲呀
 * @LastEditTime: 2019-12-06 10:06:06
 * @Description: 
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import Axios from 'axios'
import "./font/iconfont.css"
import './font/iconfont.js'
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',

})
