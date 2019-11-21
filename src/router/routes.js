/* 管理路由的数组 */
let  Original  = ()=>import ('../pages/Original/Original.vue');
let  Romance  = ()=>import ('../pages/Romance/Romance.vue');
let  Tongren  = ()=>import ('../pages/Tongren/Tongren.vue');
export default[
   {
     path:'/original',
     component:Original
   },
   {
    path:'/romance',
    component:Romance
  },
  {
    path:'/tongren',
    component:Tongren
  },
  {
    path:'/',
    redirect:'/original'
  }

]