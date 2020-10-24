import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
//路由懒加载
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Shopcart = () => import('views/shopcart/Shopcart')
const Profile = () => import('views/profile/Profile')

const routes = [{
  path: '',
  redirect: '/Home'
},
  {
    path: '/Home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/Category',
    component: Category,
    meta: {
      title: '分类'
    }
  },
  {
    path: '/Shopcart',
    component: Shopcart,
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/Profile',
    component: Profile,
    meta: {
      title: '我的'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
