import { createRouter, createWebHistory } from 'vue-router'
import AllproductsVue from '../components/Allproducts.vue'
import AboutVue from '../components/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path : '/all',
    name : '/allproducts',
    component : AllproductsVue

  },
  {
    path: '/about',
    name: '/about',
    component : AboutVue
  }

   
  ]
})

export default router
