import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainLayout from './MainLayout.vue'

const routes: Array<RouteRecordRaw> = [
    {
        name: 'main',
        path: '/',
        component: MainLayout,
        children: [
            {
                name: 'landing',
                path: '',
                component: () => import('./pages/Landing.vue'),
            },
            {
                name: 'impressum',
                path: 'impressum',
                component: () => import('./pages/Impressum.vue'),
            },
            {
                name: 'datenschutz',
                path: 'datenschutz',
                component: () => import('./pages/Privacy.vue'),
            },
        ],
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    },
})

export default router
