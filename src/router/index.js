import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Welcome from '../views/Welcome.vue'
import Movie from '../components/Movie.vue'
import TV from '../components/TV.vue'
import Moviearound from '../components/Moviearound.vue'
import Nav from '../components/Nav.vue'
import Novel from '../components/Novel.vue'

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
      { path: '/welcome', name: 'Welcome', component: Welcome },
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
