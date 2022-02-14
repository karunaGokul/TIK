import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import store from '@/store'
import Home from '../views/home/Index.vue'
import Login from '../views/login/Index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { anonymous: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { anonymous: true }
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import('../views/login/Registration.vue'),
    meta: { anonymous: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/profile/Index.vue'),
    meta: { anonymous: true }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/dashboard/Index.vue')
  },
  {
    path: '/projectdetail/:status/:id',
    name: 'ProjectDetail',
    props: true,
    component: () => import('../views/dashboard/ProjectDetail.vue')
  },
  {
    path: '/projectlist/:status',
    name: 'ProjectList',
    props: true,
    component: () => import('../views/dashboard/ProjectList.vue')
  },
  {
    path: '/project',
    name: 'Project',
    component: () => import('../views/project/ProjectBuilder.vue')
  },
  {
    path: '/employee',
    name: 'Employee',
    component: () => import('../views/employee/Index.vue')
  },
  {
    path: '/createemployee/:Id',
    name: 'CreateEmployee',
    props: true,
    component: () => import('../views/employee/CreateEmployee.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/about/Index.vue'),
    meta: { anonymous: true }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/contact/Index.vue'),
    meta: { anonymous: true }
  },
  {
    path: '/mill',
    name: 'MillDetails',
    component: () => import('../views/company/MillBuilder.vue'),
    meta: { anonymous: true }
  },
  {
    path: '/knitting',
    name: 'Knitting',
    component: () => import('../views/company/KnittingBuilder.vue'),
    meta: { anonymous: true }
  },
  {
    path: '/dyeing',
    name: 'Dyeing',
    component: () => import('../views/company/DyeBuilder.vue'),
    meta: { anonymous: true }
  },
]

const router = new VueRouter({
  routes
})

export default router


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => !record.meta.anonymous)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})
