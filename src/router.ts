import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AppVue from './App.vue'

const routes: Array<RouteRecordRaw> = [
    {
        name: 'main',
        path: '/',
        component: AppVue,
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router
