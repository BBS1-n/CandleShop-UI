<template>
    <div class="min-h-screen flex flex-col">
        <navbar />

        <main class="pt-xxl bg-cover bg-center mainBg">
            <div class="lg:ml-l lg:mb-l max-lg:items-center max-lg:text-center">
                <div v-if="currentRouteName == 'landing'">
                    <span class="text-2xl text-white mb-2">BBS 1 Lüneburg</span>
                    <h1 class="text-5xl font-bold border-blue-500 pb-8 text-white">CandleShop</h1>
                </div>
                <div v-else>
                    <a @click="router.push('/')" class="text-2xl text-white mb-2">CandleShop</a>
                    <h1 class="text-5xl font-bold border-blue-500 pb-8 text-white">{{ sexyRouteName }}</h1>
                </div>

                <offer-button v-if="currentRouteName == 'landing'" />
                <ad-button class="ml-6" v-if="currentRouteName == 'landing'" />
            </div>

            <transition-component />
        </main>

        <section class="bg-[#DDD199] dark:bg-[#2A2A2A] flex-grow pb-12">
            <router-view />
        </section>

        <footer-component />
    </div>
</template>

<script lang="ts" setup>
    import FooterComponent from './components/footer/Footer.vue'
    import OfferButton from './components/OfferButton.vue'
    import AdButton from './components/AdButton.vue'
    import TransitionComponent from './components/TransitionComponent.vue'
    import { useRoute, useRouter } from 'vue-router'
    import { computed } from 'vue'
    import Navbar from './components/Navbar.vue'

    const route = useRoute()
    const router = useRouter()
    const currentRouteName = computed(() => {
        return route.name
    })

    const sexyRouteName = computed(() => {
        const path = route.path.slice(1, route.path.length)

        const firstLetter = path[0].toUpperCase()
        const restPath = path.slice(1, path.length)

        return `${firstLetter}${restPath}`
    })
</script>

<style>
    .mainBg {
        background-image: url('./assets/teaser.jpg');
        background-size: cover;
        background-position: center;
    }
</style>
