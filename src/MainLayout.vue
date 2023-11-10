<template>
    <div class="min-h-screen flex flex-col">
        <header-component />

        <main class="pt-xxl bg-cover bg-center mainBg">
            <div class="ml-l mb-l">
                <div v-if="currentRouteName == 'landing'">
                    <span class="text-2xl text-white mb-2">BBS 1 Lüneburg</span>
                    <h1 class="text-5xl font-bold border-blue-500 pb-8 text-white">CandleShop</h1>
                </div>
                <div v-else>
                    <span class="text-2xl text-white mb-2">CandleShop</span>
                    <h1 class="text-5xl font-bold border-blue-500 pb-8 text-white">{{ sexyRouteName }}</h1>
                </div>

                <offer-button v-if="currentRouteName == 'landing'" />
            </div>

            <transition-component />
        </main>

        <section class="bg-[#2A2A2A] flex-grow pt-8">
            <router-view />
        </section>

        <footer-component />
    </div>
</template>

<script lang="ts" setup>
    import HeaderComponent from './components/header/Header.vue'
    import FooterComponent from './components/footer/Footer.vue'
    import OfferButton from './components/OfferButton.vue'
    import TransitionComponent from './components/TransitionComponent.vue'
    import { useRoute } from 'vue-router'
    import { computed } from 'vue'

    const route = useRoute()
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
