/*
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
 * @Author: 陈晶华
 * @Date: 2019-11-26 09:28:31
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-12-07 09:51:36
=======
 * @Author: 菲菲呀
 * @Date: 2019-11-26 09:31:07
 * @LastEditors: 菲菲呀
 * @LastEditTime: 2019-12-05 14:59:56
>>>>>>> feifei
 * @Description: 
 */
import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD

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
=======
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
>>>>>>> osior
=======
import Index from '@/pages/Index'
import Fnews from '@/pages/Fnews'
import Faiperson from '@/pages/Faiperson'
import Page1 from '@/pages/Page1'
import Page2 from '@/pages/Page2'
import Page3 from '@/pages/Page3'
import Fnologin from '@/pages/Fnologin'
import Fsaoyisao from '@/pages/Fsaoyisao'
import Fnextpage from '@/pages/Fnextpage'
>>>>>>> feifei

Vue.use(Router)

export default new Router({
  routes: [
    {
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
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
>>>>>>> osior
  ]
})
=======
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
>>>>>>> feifei
