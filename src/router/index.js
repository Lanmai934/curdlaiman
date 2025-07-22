import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import UserPage from '../views/UserPage.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/UserPage',
            name: 'UserPage',
            component: UserPage
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('../views/Login.vue')
        },
        {
        path: '/RecursiveTableWrapper',
        component: Layout,
        children: [
        {
            path: '',
            name: 'RecursiveTableWrapper',
            component: () => import('@/views/RecursiveTableWrapper/index'),
            meta: { title: '递归表格', icon: 'RecursiveTableWrapper' }
        }
    ]
  },
    ]
})