import { createApp } from 'vue'
import './style.css'
import MainLayout from './MainLayout.vue'
import router from './router'

const app = createApp(MainLayout)

app.use(router)

app.mount('#app')
