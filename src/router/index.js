/*
 * @Author: renhui
 * @Date: 2019-11-26 10:53:19
 * @LastEditors: osier
 * @LastEditTime: 2019-12-05 15:05:35
 * @Description: ..
 */
import Vue from 'vue'
import Router from 'vue-router'
import Shoppingcar from '@/pages/Shoppingcar'
import Search from '@/pages/Search'
import Detiles from '@/pages/Detiles'
import Shoppingcarlogin from '@/pages/Shoppingcarlogin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Shoppingcar',
      name: 'Shoppingcar',
      component: Shoppingcar
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },{
      path: '/Detiles',
      name: 'Detiles',
      component: Detiles
    },{
      path: '/Shoppingcarlogin',
      name: 'Shoppingcarlogin',
      component: Shoppingcarlogin
    }
  ]
})
