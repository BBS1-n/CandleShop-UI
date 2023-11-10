<template>
    <div class="min-h-screen flex flex-col">
        <header-component />

        <main class="pt-xxl bg-cover bg-center mainBg">
            <div class="ml-l mb-l">
                <h1 class="text-2xl text-white mb-2">BBS 1 Lüneburg</h1>
                <h1 class="text-5xl font-bold border-blue-500 pb-8 text-white">Candyshop</h1>

                <offer-button v-if="currentRouteName == 'landing'" />
            </div>

            <transition-component />
        </main>

        <section class="bg-[#2A2A2A] flex-grow pt-8">
            <div>
                <router-view />
            </div>
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
</script>

<style>
    .mainBg {
        background-image: url('./assets/teaser.jpg');
        background-size: cover;
        background-position: center;
    }
</style>
