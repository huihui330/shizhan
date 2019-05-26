import home from "../pages/Home/home.vue"
import categorylist from "../pages/Categorylist/categorylist.vue"
import recommend from "../pages/Recommend/recommend.vue"
import shopcart from "../pages/Shopcart/shopcart.vue"
import profile from "../pages/Profile/profile.vue"
import category from "../pages/Categorylist/category/category.vue"
import Login from '../pages/Profile/Login/Login.vue';
import Register from '../pages/Profile/Register/Register.vue';
import phoneregister from '../pages/Profile/Register/phoneregister.vue'
import emailregister from '../pages/Profile/Register/emailregister.vue'
import phonelogin from '../pages/Profile/Login/phonelogin.vue';
import emaillogin from '../pages/Profile/Login/emaillogin.vue';
import find from '../pages/Recommend/find.vue'
import zhenxuan from '../pages/Recommend/zhenxuan.vue'

const routes = [
  {path:"/home",component:home,meta: {
    isShowFooter: true
  }},
  {path:"/categorylist",component:categorylist,meta: {
    isShowFooter: true},
    children: [
      {
        path: '/categorylist/category',
        component: category,
        meta: {
          isShowFooter: true
        }
      },
      {
        path: '',
        redirect: '/categorylist/category'
      }
    ]
  },
  {path:"/recommend",component:recommend,meta: {
    isShowFooter: true
  },children: [
    {
      path: '/recommend/find/:id',
      component:find,
      meta: {
        isShowFooter: true
      }
    },
    {
      path: '/recommend/zhenxuan',
      component:zhenxuan,
      meta: {
        isShowFooter: true
      }
    }
  ]
  },
  {path:"/shopcart",component:shopcart,meta: {
    isShowFooter: true
  }},
  {path:"/profile",component:profile,meta: {
    isShowFooter: false
  }},
  {path:"/login",component:Login,meta: {
    isShowFooter: false
  },children: [
    {
      path: '/login/phonelogin',
      component: phonelogin,
    },
    {
      path: '/login/emaillogin',
      component: emaillogin,
    },
    { path: '/', redirect: '/login/phonelogin'},
  ]},
  {path:"/register",component:Register,meta: {
    isShowFooter: false
  },children: [
    {
      path: '/register/emailregister',
      component: emailregister,
    },
    {
      path: '/register/phoneregister',
      component: phoneregister,
    },
    { path: '/', redirect: '/register/phoneregister'},
  ]},

  { path: '/', redirect: '/home'},
]
export default routes
