import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainLayout from './MainLayout.vue'

const routes: Array<RouteRecordRaw> = [
    {
        name: 'main',
        path: '/',
        component: MainLayout,
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router
