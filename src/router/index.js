/*
 * @Author: 菲菲呀
 * @Date: 2019-11-26 09:31:07
 * @LastEditors: 菲菲呀
 * @LastEditTime: 2019-12-05 14:59:56
 * @Description: 
 */
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Fnews from '@/pages/Fnews'
import Faiperson from '@/pages/Faiperson'
import Page1 from '@/pages/Page1'
import Page2 from '@/pages/Page2'
import Page3 from '@/pages/Page3'
import Fnologin from '@/pages/Fnologin'
import Fsaoyisao from '@/pages/Fsaoyisao'
import Fnextpage from '@/pages/Fnextpage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
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
      path: '/Page1',
      name: 'Page1',
      component: Page1,
      beforeEnter(to,from,next){
        if(!localStorage.getItem("name")){
          next('/Page3')
        }
        console.log("守卫")
        next();
      }
      //路由守卫
    },
    {
      path: '/Page2',
      name: 'Page2',
      component: Page2,
      beforeEnter(to,from,next){
        if(!localStorage.getItem("name")){
          next('/Fnologin')
        }
        console.log("购物车守卫")
        next();
      }
    },
    {
      path: '/Page3',
      name: 'Page3',
      component: Page3
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

// router.beforeEach((to, from, next) => {
//   console.log("守卫")
//   console.log(to);
//   console.log(from);
//   next();
// });


// export default  router;