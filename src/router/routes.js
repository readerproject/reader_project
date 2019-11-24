/* 管理路由的数组 */
let  Original  = ()=>import ('../pages/Original/Original.vue');
let  Romance  = ()=>import ('../pages/Romance/Romance.vue');
let  Tongren  = ()=>import ('../pages/Tongren/Tongren.vue');
let  Login  = ()=>import ('../pages/Login/Login.vue');
let  Register  = ()=>import ('../pages/Register/Register.vue');

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
     }
     
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
    path:'/',
    redirect:'/original'
  },
  

]