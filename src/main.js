/*
 * @Author: renhui
 * @Date: 2019-11-26 10:53:18
 * @LastEditors: osier
 * @LastEditTime: 2019-12-07 10:57:09
 * @Description: ..
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
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
  components: { App },
  template: '<App/>'
})
