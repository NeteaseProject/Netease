/*
 * @Author: 陈晶华
 * @Date: 2019-11-26 09:28:31
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-12-07 09:51:36
 * @Description: 
 */
import Vue from 'vue'
import Router from 'vue-router'

import Class from '@/pages/Class'
import Person from '@/pages/Person'
import AllCls from '@/pages/AllCls'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Class',
      component: Class
    },
    {
      path: '/Class',
      name: 'Class',
      component: Class
    },
    {
      path: '/Person',
      name: 'Person',
      component: Person
    },
    {
      path: '/AllCls/:id',
      name: 'AllCls',
      props:true,
      component: AllCls
    }
  ]
})
