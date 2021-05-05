import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Calendar from '../views/Welcome.vue'
import Movie from '../views/Movie.vue'
import TV from '../views/TV.vue'
import Moviearound from '../views/Moviearound.vue'
import Nav from '../views/Nav.vue'
import Novel from '../views/Novel.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // 主页为 Home组件
    name: 'Home',
    component: Home,
    // 重定向到欢迎页面
    redirect: '/Nav',
    // 子路由
    children: [
      // 日历
      { path: '/calendar', name: 'Calendar', component: Calendar },
      // 常见网址
      { path: '/Nav', name: 'Nav', component: Nav },
      // 电影网址
      { path: '/Movie', name: 'Movie', component: Movie },
      // 电视网址
      { path: '/TV', name: 'TV', component: TV },
      // 影视周边
      { path: '/Moviearound', name: 'Moviearound', component: Moviearound },
      // 小说
      { path: '/Novel', name: 'Novel', component: Novel }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
