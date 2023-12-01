<template>
    <div id="products" class="text-center text-white mx-auto max-w-xl">
        <h1 class="text-4xl font-bold underline text-accent">Produkte</h1>

        <carousel
            class="mt-4"
            :autoplay="5000"
            :pauseAutoplayOnHover="true"
            :itemsToShow="numOfProducts"
            :wrapAround="true"
        >
            <Slide v-for="product in productList" :key="product.price">
                <div
                    class="cursor-grab carousel__item max-w-sm rounded overflow-hidden shadow-lg bg-[#C3B98E] dark:bg-[#393939]"
                >
                    <img class="w-full p-2" :src="product.image" :alt="product.description" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 text-gray dark:text-white">
                            {{ product.description }}
                        </div>
                        <p class="text-gray dark:text-white">Preis: {{ product.price }}</p>
                    </div>
                </div>
            </Slide>
        </carousel>
    </div>
</template>

<script lang="ts" setup>
    import { computed, onMounted, ref } from 'vue'
    import kerze_dose from '../assets/kerze_dose.jpg'
    import kerze_glas from '../assets/kerze_glas.jpg'
    import kerze_glas2 from '../assets/kerze_glas2.jpg'
    import { Carousel, Slide } from 'vue3-carousel'
    import 'vue3-carousel/dist/carousel.css'

    interface Product {
        id: number
        description: string
        price: string
        image: string
    }

    let isMobile = ref(window.innerHeight > window.innerWidth)
    const numOfProducts = computed(() => (isMobile.value ? 1.9 : 1.9))

    onMounted(() => {
        window.addEventListener('resize', () => {
            isMobile.value = window.innerHeight > window.innerWidth
        })
    })

    const productList: Product[] = [
        { id: 1, description: 'Kerze im Glas', price: '5€', image: kerze_glas },
        { id: 2, description: 'Kerze in Dose mit Duft', price: '4€', image: kerze_dose },
        { id: 3, description: 'Kerze im Glas', price: '5€', image: kerze_glas2 },
    ]
</script>

<style>
    .carousel__item {
        pointer-events: none;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 100%;
        min-height: 100%;
        height: 100% !important;
    }

    .carousel__slide {
        padding: 5px;
        min-height: 200px;
        width: 100%;
        height: 100%;
        scale: 0.9;
    }

    .carousel__viewport {
        perspective: 2000px;
    }

    .carousel__track {
        transform-style: preserve-3d;
    }

    .carousel__slide--sliding {
        transition: 0.5s;
    }

    .carousel__item img {
        height: 250px !important;
        width: 100% !important;
        object-fit: cover;
    }
    .carousel__item > div {
        padding: 5px;
    }

    .carousel__slide--active {
        scale: 1;
    }
</style>
