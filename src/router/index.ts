import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/home/Index.vue'
import Login from '../views/login/Index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import('../views/login/Registration.vue')
  },
  {
    path: '/forgotpassword',
    name: 'ForgotPassword',
    component: () => import('../views/login/ForgotPassword.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/profile/Index.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/dashboard/Index.vue')
  },
  {
    path: '/newproject',
    name: 'Newproject',
    component: () => import('../views/newproject/Index.vue')
  },
  {
    path: '/mills',
    name: 'Mills',
    component: () => import('../views/newproject/Mills.vue')
  },
  {
    path: '/employee',
    name: 'Employee',
    component: () => import('../views/employee/Index.vue')
  },
  {
    path: '/createemployee',
    name: 'CreateEmployee',
    component: () => import('../views/employee/CreateEmployee.vue')
  },
  {
    path: '/aboutUs',
    name: 'AboutUs',
    component: () => import('../views/aboutUs/Index.vue')
  },
  {
    path: '/contactUs',
    name: 'ContactUs',
    component: () => import('../views/contactUs/Index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
