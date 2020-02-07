import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Admin from './components/Admin.vue' 
import Overview from './components/Overview.vue'
import Products from './components/Products.vue'
import Profile from './components/Profile.vue'
import Orders from './components/Orders.vue'
import {fb} from './firebase'


Vue.use(Router)

const router =  new Router({
  mode: "history",
  base: process.env.BASE_URL,


  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      meta: { requiresAuth: true },
      children:[
        {
          path: "overview",
          name: "overview",
          component: Overview
        },
        
        {
          path: "products",
          name: "products",
          component: Products
        },

        {
          path: "profile",
          name: "profile",
          component: Profile
        },
        {
          path: "orders",
          name: "orders",
          component: Orders
        }


      ]
    },

    {
      path: '/about',
      name: 'About',
      component: About
    },

    
  ]
})


router.beforeEach((to, from, next) => {

  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = fb.auth().currentUser

  if (requiresAuth && !currentUser) {
      next('/')
  } else if (requiresAuth && currentUser) {
      next()
  } else {
      next()
  }
})

export default router;