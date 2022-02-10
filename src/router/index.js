import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutPage.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import(/* webpackChunkName: "about" */ '../views/ContactPage.vue')
    },
    {
        path: '/online-quote',
        name: 'OnlineQuote',
        component: () => import(/* webpackChunkName: "about" */ '../views/OnlineQuotePage.vue')
    },
    {
        path: '/fleet',
        name: 'Fleet',
        component: () => import(/* webpackChunkName: "about" */ '../views/FleetPage.vue')
    },
    // {
    //     path: '/login',
    //     name: 'Login',
    //     component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
    // },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    document.title = `${to.name} | ${process.env.VUE_APP_TITLE}`
    window.scrollTo(0, 0);
    next()
})

export default router
