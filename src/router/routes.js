/* 管理路由的数组 */
let  Original  = ()=>import ('../pages/Original/Original.vue');
let  Romance  = ()=>import ('../pages/Romance/Romance.vue');
let  Tongren  = ()=>import ('../pages/Tongren/Tongren.vue');
let  Login  = ()=>import ('../pages/Login/Login.vue');
let  Register  = ()=>import ('../pages/Register/Register.vue');
let  Personal =()=>import('../pages/Personal/Personal.vue')
let  Search =()=>import('../pages/Search/Search.vue')

let  BookItem =()=>import('../pages/BookItem/BookItem.vue');
let  NovalDetail =()=>import('../pages/NovalDetail/NovalDdetail.vue');
let  Recommend =()=>import('../pages/BookItem/Recommend/Recommend.vue');
let  Hot =()=>import('../pages/BookItem/Hot/Hot.vue');
let  Newest =()=>import('../pages/BookItem/Newest/Newest.vue');

let Ranking = () => import('../pages/Ranking/Ranking.vue');
import Yesterday from '../pages/Ranking/Yesterday/Yesterday.vue'
import Hebdomad from '../pages/Ranking/Hebdomad/Hebdomad.vue'
import Thirtydays from '../pages/Ranking/Thirtydays/Thirtydays.vue'
export default[
   {
     path:'/original',
     component:Original,
     meta:{
       isShowTitle:true,
       isShowHeader:true
     },

   },
   {
    path:'/romance',
    component:Romance,
    meta:{
      isShowHeader:true,
      isShowTitle:true,
    },
    
    
  },
  {
    path:' ',
    component:Ranking,
    children: [
      {
        path: '/ranking/yesterday',
        component: Yesterday
      },
      {
        path: '/ranking/hebdomad',
        component: Hebdomad
      },
      {
        path: '/ranking/thirtydays',
        component: Thirtydays
      },
      {
        path: '/ranking',
        redirect: '/ranking/yesterday'
      }
    ]
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
    component:Search
  },
  {
    path: '/bookitem',
    component: BookItem,
    children: [
      {
        path: '/bookitem/recommend',
        component: Recommend,
      },
      {
        path: '/bookitem/hot',
        component: Hot,
      },
      {
        path: '/bookitem/newest',
        component: Newest,
      },
      {
        path:'/',
        redirect:'/bookitem/recommend'
      }
    ]
  },
  {  
    path:'/novaldetail',
    component:NovalDetail
  },
  {
    path:'/',
    redirect:'/original'
  },
  

]