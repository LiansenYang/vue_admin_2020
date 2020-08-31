import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/index.vue'

Vue.use(VueRouter)

  const routes = [
  {
      path: '/',
      hidden:true,
      redirect:'login',
  },
  {
      path: '/login',
      name: 'Login',
      hidden:true,
      component: Login,
  },
  {
      path:'/console',
      name:'Console',
      meta:{
        icon:'el-icon-eleme'
      },
      redirect:'index',
      component: () => import("../views/layout/index.vue"),
      children:[
          {
              path:'/index',
              name:'Index',
              component: () => import("../views/console/index.vue")
          }

      ]
  }

]

const router = new VueRouter({
  routes
})

export default router
