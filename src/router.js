import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Menu from './views/Menu.vue'
import List from './views/ListMenu.vue'
import Detail from './views/DetailDoktor.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
  ]
})
