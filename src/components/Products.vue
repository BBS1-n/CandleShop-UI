<template>
    <div id="products" class="text-center text-white mx-auto px-4 md:max-w-xl">
        <h1 class="text-4xl font-bold uppercase text-accent">Produkte</h1>

        <carousel
            class="mt-4"
            :autoplay="5000"
            :pauseAutoplayOnHover="true"
            :itemsToShow="numOfProducts"
            :wrapAround="true"
        >
            <slide v-for="product in productList" :key="product.price">
                <div
                    class="cursor-grab carousel__item max-w-sm rounded overflow-hidden shadow-lg bg-[#C3B98E] dark:bg-[#393939] p-2"
                >
                    <img class="w-full" :src="product.image" :alt="product.description" />
                    <div class="px-6 mx-auto">
                        <div class="font-bold text-xl mb-2 text-gray dark:text-white">
                            {{ product.description }}
                        </div>
                        <p class="text-gray dark:text-white">Preis: {{ product.price }}</p>
                    </div>
                </div>
            </slide>
        </carousel>
    </div>
</template>

<script lang="ts" setup>
    import { computed, onMounted, ref } from 'vue'
    import kerzeDose3er from '../assets/kerze-dose-3er.jpg'
    import kerzeGlas from '../assets/kerze-glas.jpg'
    import kerzeGlas2er from '../assets/kerze-dose-glas-2er.jpeg'
    import kerzeGlas3er from '../assets/kerze-glas-3er.jpg'
    import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
    import 'vue3-carousel/dist/carousel.css'

    interface Product {
        id: number
        description: string
        price: string
        image: string
    }

    let isMobile = ref(window.innerHeight > window.innerWidth)
    const numOfProducts = computed(() => (isMobile.value ? 1.25 : 1.9))

    onMounted(() => {
        window.addEventListener('resize', () => {
            isMobile.value = window.innerHeight > window.innerWidth
        })
    })

    const productList: Product[] = [
        { id: 1, description: 'Kerze im Glas', price: '4€', image: kerzeGlas },
        { id: 2, description: 'Kerze in der Dose', price: '5€', image: kerzeDose3er },
        { id: 3, description: '2er-Pack: Kerze im Glas', price: '7,50€', image: kerzeGlas2er },
        { id: 4, description: '2er-Pack: Kerze in der Dose', price: '9€', image: kerzeGlas2er },
        { id: 5, description: '3er-Pack: Kerze im Glas', price: '11€', image: kerzeGlas3er },
        { id: 6, description: '3er-Pack: Kerze in der Dose', price: '12€', image: kerzeDose3er },
    ]
</script>

<style>
    .carousel__item {
        pointer-events: none;
        display: flex;
        flex-direction: column;
        justify-content: flex-start !important;
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

    #products .carousel__track {
        height: 380px;
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
