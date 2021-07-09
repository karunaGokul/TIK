import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
<<<<<<< HEAD
import Home from '../views/Home/Index.vue'
import Login from '../views/Login/Index.vue'
import Registration from '../views/Login/Registration.vue'
import ForgotPassword from '../views/Login/Forgot-Password.vue'
import Profile from '../views/Profile/Index.vue'
=======
import Home from '../views/home/index.vue'
import Login from '../views/login/index.vue'
import Registration from '../views/login/Registration.vue'
>>>>>>> 763639aa3d600a0f268d1f68460254246c023c9e

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
<<<<<<< HEAD
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
=======
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/dashboard/index.vue')
>>>>>>> 763639aa3d600a0f268d1f68460254246c023c9e
  }
]

const router = new VueRouter({
  routes
})

export default router
