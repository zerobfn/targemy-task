import Vue from 'vue'
import VueRouter from 'vue-router'

import MainContainer from '@/views/Index.vue'
import MainPage from '@/views/MainPage/Index.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: MainContainer,
        children: [
            {
                path: ':id?',
                name: 'mainpage',
                component: MainPage
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
