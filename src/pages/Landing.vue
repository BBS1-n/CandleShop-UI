<template>
    <div class="min-h-screen flex flex-col">
        <header-component />

        <main class="pt-xxl bg-cover bg-center mainBg">
            <div class="ml-l mb-l">
                <h1 class="text-2xl text-white mb-2">BBS 1 Lüneburg</h1>
                <h1 class="text-5xl font-bold border-blue-500 pb-8 text-white">Candyshop</h1>

                <offer-button />
            </div>

            <transition-component />
        </main>

        <section class="bg-[#2A2A2A] flex-grow pt-8">
            <about-us class="mb-20" />
            <products />
        </section>

        <footer-component />
    </div>
</template>

<script setup lang="ts">
    import OfferButton from '../components/OfferButton.vue'
    import AboutUs from '../components/AboutUs.vue'
    import Products from '../components/Producs.vue'
    import TransitionComponent from '../components/TransitionComponent.vue'
    import FooterComponent from '../components/footer/Footer.vue'
    import HeaderComponent from '../components/header/Header.vue'
</script>

<style>
    .mainBg {
        background-image: url('../assets/teaser.jpg');
        background-size: cover;
        background-position: center;
    }
</style>
