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
  // {
  //   path: '/forgotpassword',
  //   name: 'ForgotPassword',
  //   component: () => import('../views/login/ForgotPassword.vue'),
  //   meta: { anonymous: true }
  // },
  // {
  //   path: '/resetpassword',
  //   name: 'ResetPassword',
  //   component: () => import('../views/login/ResetPassword.vue'),
  //   meta: { anonymous: true }
  // },
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
    path: '/projectdetail/:Id',
    name: 'ProjectDetail',
    props: true,
    component: () => import('../views/dashboard/ProjectsList.vue')
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
    path: '/aboutUs',
    name: 'AboutUs',
    component: () => import('../views/aboutUs/Index.vue'),
    meta: { anonymous: true }
  },
  {
    path: '/contactUs',
    name: 'ContactUs',
    component: () => import('../views/contactUs/Index.vue'),
    meta: { anonymous: true }
  },
  {
    path: '/productDetails',
    name: 'Product-Details',
    component: () => import('../views/productDetails/Index.vue'),
    meta: { anonymous: true }
  },
  {
    path: '/company',
    name: 'CompnayDetails',
    component: () => import('../views/company/CompanyBuilder.vue'),
    meta: { anonymous: true }
  },
  {
    path: '/projectslist',
    name: 'ProjectsList',
    component: () => import('../views/dashboard/ProjectsList.vue')
  }

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
