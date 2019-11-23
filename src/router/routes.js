/* 管理路由的数组 */
let  Original  = ()=>import ('../pages/Original/Original.vue');
let  Romance  = ()=>import ('../pages/Romance/Romance.vue');
let  Tongren  = ()=>import ('../pages/Tongren/Tongren.vue');
let  Login  = ()=>import ('../pages/Login/Login.vue');
let  Register  = ()=>import ('../pages/Register/Register.vue');
let  Personal =()=>import('../pages/Personal/Personal.vue')
let  Search =()=>import('../pages/Search/Search.vue')
import Ranking from '../pages/Ranking/Ranking'
export default[
   {
     path:'/original',
     component:Original,
     meta:{
       isShowTitle:true,
       isShowHeader:true
     }
     
   },
   {
    path:'/romance',
    component:Romance,
    meta:{
      isShowHeader:true,
      isShowTitle:true,
    }
  },
  {
    path:'/tongren',
    component:Tongren,
    meta:{
      isShowHeader:true,
      isShowTitle:true,
    }
   
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/register',
    component:Register
  },
  {
    path:'/personal',
    component:Personal
  },
  {
    path:'/search',
    component:Search,
  },
  {
    path:'/',
    redirect:'/original'
  },
  // {
  //   path:'',
  //   component:
  // }

]