import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Admin from './components/Admin.vue' 
import Overview from './components/Overview.vue'
import Products from './components/Products.vue'

Vue.use(Router)

export default new Router({


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
      children:[
        {
          path: "overview",
          name: "Overview",
          component: Overview
        },
        
        {
          path: "products",
          name: "Products",
          component: Products
        },


      ]
    },

    {
      path: '/about',
      name: 'About',
      component: About
    },

    
  ]
})