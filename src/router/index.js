/*
<<<<<<< HEAD
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
=======
 * @Author: your name
 * @Date: 2019-11-19 20:37:42
 * @LastEditTime: 2019-12-06 15:35:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wangyiyanxuan\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Personal from '@/pages/Personal'
import Login from '@/pages/Login'
import Forget from '@/pages/Forget'
import Registered1 from '@/pages/Registered1'
// import banner from '@/pages/banner'
>>>>>>> b421aef870892733c2a40e148d86f4daa135ffd5

Vue.use(Router)

export default new Router({
  routes: [
    {
<<<<<<< HEAD
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
=======
      path: '/Personal',
      name: 'Personal',
      component: Personal
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Forget',
      name: 'Forget',
      component: Forget
    },
    {
      path: '/',
      name: 'Registered1',
      component: Registered1,
      // beforeEnter(to,from,next){
      //   if(!localStorage.getItem('name')){
      //     next('/Login')
      //   }
      //   next()
      // }
    }
    // {
    //     path: '/',
    //     name: 'banner',
    //     component: banner
    // }
>>>>>>> b421aef870892733c2a40e148d86f4daa135ffd5
  ]
})
