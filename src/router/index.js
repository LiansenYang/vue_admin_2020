import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/index.vue'

Vue.use(VueRouter)

  const routes = [
  {
      path: '/',
      hidden:true,
      redirect:'login',
      meta:{
          name:"首页"
      }
  },
  {
      path: '/login',
      name: 'Login',
      hidden:true,
      component: Login,
      meta:{
          name:"登录"
      }
  },
  {
      path:'/console',
      name:'Console',
      meta:{
        icon:'console',
        name:"控制台"
      },
      redirect:'index',
      component: () => import("../views/layout/index.vue"),
      children:[
          {
              path:'/index',
              name:'Index',
              component: () => import("../views/console/index.vue"),
              meta:{
                  name:"控制台首页"
              },
          }

      ]
  },
  {
      path: "/info",
      name: "Info",
      meta: {
          name: "信息管理",
          icon: 'info'
      },
      component:() => import("../views/layout/index.vue"),
      children: [
          {
              path: "/infoIndex",
              name: "InfoIndex",
              meta: {
                  keepAlive: true,
                  role: ['sale', 'manager'],
                  name: "信息列表"
              },
              component: () => import("../views/Info/index.vue")
          },
          {
              path: "/infoCategory",
              name: "InfoCategory",
              meta: {
                  keepAlive: true,
                  role: ['sale'],
                  name: "信息分类"
              },
              component: () => import("../views/Info/category.vue")
          },
          {
              path: "/infoDetailed",
              name: "InfoDetailed",
              hidden: true,
              meta: {
                  keepAlive: true,
                  role: ['sale'],
                  name: "信息详情"
              },
              component: () => import("../views/Info/detailed.vue")
          }
      ]
  },
  /**
   * 用户管理
   */
  {
      path: "/user",
      name: "User",
      meta: {
          name: "用户管理",
          icon: 'user'
      },
      component: () => import("../views/layout/index.vue"),
      children: [
          {
              path: "/userIndex",
              name: "UserIndex",
              meta: {
                  name: "用户列表"
              },
              component: () => import("../views/User/index.vue")
          }
      ]
  },

]

const router = new VueRouter({
  routes
})

export default router
