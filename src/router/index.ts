import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/home/Index.vue'
import Login from '../views/login/Index.vue'
import Registration from '../views/login/Registration.vue'
import ForgotPassword from '../views/login/Forgot-Password.vue'
import Profile from '../views/Profile/Index.vue'


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
    component: Registration
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
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
    path: '/employee',
    name: 'Employee',
    component: () => import('../views/employee/Index.vue')
  },
  {
    path: '/createemployee',
    name: 'CreateEmployee',
    component: () => import('../views/employee/CreateEmployee.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
