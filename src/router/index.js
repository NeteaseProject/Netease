
import Vue from 'vue'
import Router from 'vue-router'

import Class from '@/pages/Class'
import Person from '@/pages/Person'
import AllCls from '@/pages/AllCls'
// import HelloWorld from '@/components/HelloWorld'
import Personal from '@/pages/Personal'
import Login from '@/pages/Login'
import Forget from '@/pages/Forget'
import Registered1 from '@/pages/Registered1'
// import banner from '@/pages/banner'
import Shoppingcar from '@/pages/Shoppingcar'
import Search from '@/pages/Search'
import Detiles from '@/pages/Detiles'
import Shoppingcarlogin from '@/pages/Shoppingcarlogin'
import Index from '@/pages/Index'
import Fnews from '@/pages/Fnews'
import Faiperson from '@/pages/Faiperson'
import Fnologin from '@/pages/Fnologin'
import Fsaoyisao from '@/pages/Fsaoyisao'
import Fnextpage from '@/pages/Fnextpage'
Vue.use(Router)

export default new Router({
  routes: [
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
    },
    {
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
      path: '/Registered1',
      name: 'Registered1',
      component: Registered1,
      // beforeEnter(to,from,next){
      //   if(!localStorage.getItem('name')){
      //     next('/Login')
      //   }
      //   next()
      // }
    },
    // {
    //     path: '/',
    //     name: 'banner',
    //     component: banner
    // }
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/Detiles',
      name: 'Detiles',
      component: Detiles
    },
    {
      path: '/Shoppingcarlogin',
      name: 'Shoppingcarlogin',
      component: Shoppingcarlogin,
      beforeEnter(to,from,next){
        if(!localStorage.getItem("name")){
          next('/Shoppingcar')
        }
        console.log("购物车守卫")
        next();
      }
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/Fnews',
      name: 'Fnews',
      component: Fnews
    },
    {
      path: '/Faiperson',
      name: 'Faiperson',
      component: Faiperson
    },
    {
      path: '/Fnologin',
      name: 'Fnologin',
      component: Fnologin
    },
    {
      path: '/Fsaoyisao',
      name: 'Fsaoyisao',
      component: Fsaoyisao
    },
    {
      path: '/Fnextpage',
      name: 'Fnextpage',
      component: Fnextpage
    }
  ]
})

