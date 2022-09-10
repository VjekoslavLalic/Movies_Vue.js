import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/svapiva',
    name: 'Piva',
    component: () => import(/* webpackChunkName: "about" */ '../views/Piva.vue')
  },
  {
    path: '/pivnice',
    name: 'Pivnice',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pivnice.vue')
  },
  {
    path: '/jelovnici',
    name: 'Jelovnici',
    component: () => import(/* webpackChunkName: "about" */ '../views/Jelovnici.vue')
  },
  {
    path: '/ilica',
    name: 'Ilica',
    component: () => import(/* webpackChunkName: "about" */ '../views/Ilica.vue')
  },
  {
    path: '/fakincraftbar',
    name: 'FakinCraftBar',
    component: () => import(/* webpackChunkName: "about" */ '../views/FakinCraftBar.vue')
  },
  {
    path: '/malimedo',
    name: 'MaliMedo',
    component: () => import(/* webpackChunkName: "about" */ '../views/MaliMedo.vue')
  },
  {
    path: '/samoborska',
    name: 'Samoborska',
    component: () => import(/* webpackChunkName: "about" */ '../views/Samoborska.vue')
  },
  {
    path: '/sezonskapiva',
    name: 'SezonskaPiva',
    component: () => import(/* webpackChunkName: "about" */ '../views/SezonskaPiva.vue')
  },
  {
    path: '/stalnapiva',
    name: 'StalnaPiva',
    component: () => import(/* webpackChunkName: "about" */ '../views/StalnaPiva.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
