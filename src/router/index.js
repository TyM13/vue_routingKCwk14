import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomePage.vue';
import MenuPage from '@/views/MenuPage.vue'

Vue.use(VueRouter)

const routes = [
  {  
    path: "/",
  component: HomePage,
},
{
  path: "/menu",
  component: MenuPage,
}

]

const router = new VueRouter({
  routes
})

export default router
