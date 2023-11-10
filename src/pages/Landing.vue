<template>
    <div class="min-h-screen flex flex-col bg-[#6a6a6a]">
        <header class="p-4 bg-blue-500 text-white">
            <nav>
                <ul class="flex space-x-4">
                    <li><a href="#" class="hover:underline">Link 1</a></li>
                    <li><a href="#" class="hover:underline">Link 2</a></li>
                    <li><a href="#" class="hover:underline">Link 3</a></li>
                </ul>
            </nav>
        </header>

        <main class="mt-xxl">
            <div class="ml-l">
                <h1 class="text-2xl text-white mb-2">BBS 1 Lüneburg</h1>
                <h1 class="text-5xl font-bold border-blue-500 pb-8 text-white">Candyshop</h1>

                <offer-button />
            </div>

            <div class="mt-l"></div>

            <transition-component />
        </main>

        <section class="bg-[#2A2A2A] flex-grow pt-8">
            <about-us class="mb-20" />
            <products />

            <!-- content.. -->
        </section>

        <footer class="p-4 bg-[#6a6a6a] text-white">
            <p>Copyright &copy; {{ copyRight }}</p>
        </footer>
    </div>
</template>

<script setup lang="ts">
    import OfferButton from '../components/OfferButton.vue'
    import AboutUs from '../components/AboutUs.vue'
    import Products from '../components/Producs.vue'
    import TransitionComponent from '../components/TransitionComponent.vue'
    import { computed, ref } from 'vue'

    const copyRight = computed(() => {
        return new Date().getFullYear()
    })
</script>
