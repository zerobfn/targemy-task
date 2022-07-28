import Vue from 'vue'
import VueRouter from 'vue-router'

import MainContainer from '@/views/Index.vue'
import MainPage from '@/views/MainPage/Index.vue'
import SignIn from '@/views/auth/SignIn.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        component: MainContainer,
        children: [
            {
                path: '',
                name: 'mainpage',
                component: MainPage
            },
            {
                path: '/login',
                name: 'login',
                component: SignIn
            }
        ]
    },
    {
        path: '*',
        redirect: {
            name: 'mainpage'
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
