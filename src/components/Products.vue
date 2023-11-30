<template>
    <div id="products" class="text-center text-white mx-auto max-w-3xl">
        <h1 class="text-4xl font-bold underline text-accent">Produkte</h1>

        <carousel
            class="mt-4"
            :autoplay="5000"
            :pauseAutoplayOnHover="true"
            :itemsToShow="numOfProducts"
            :wrapAround="true"
        >
            <Slide v-for="product in productList" :key="product.price">
                <div class="carousel__item max-w-sm rounded overflow-hidden shadow-lg bg-[#C3B98E] dark:bg-[#393939]">
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
    import kerze_bubble from '../assets/kerze-bubble.jpg'
    import kerze_dose from '../assets/kerze-dose.jpg'
    import kerze_glas from '../assets/kerze-glas.jpg'
    import kerze_tannenbaum from '../assets/kerze-tannenbaum.jpeg'
    import kerze_tannenzapfen from '../assets/kerze-tannenzapf.jpg'
    import { Carousel, Slide } from 'vue3-carousel'

    import 'vue3-carousel/dist/carousel.css'

    interface Product {
        id: number
        description: string
        price: string
        image: string
    }

    // müll will nicht
    //const getNumOfProducts = () => {
    //    let windowWidth = ref({w: window.innerWidth, h: window.innerHeight})

    //    const onResizeEvent = () => {
    //        console.log("ress");
    //        windowWidth.value.w = window.innerWidth
    //    }
    //    onMounted(() => window.addEventListener('resize', onResizeEvent))
    //    onUnmounted(() => window.removeEventListener('resize', onResizeEvent))

    //    const numOfProducts = computed(() => {
    //      return windowWidth.value.h > windowWidth.value.w ? 1.9 : 3.5;
    //    })

    //    const width = computed(() => windowWidth.value.w)
    //    const height = computed(() => windowWidth.value.h)
    //    console.log("resize");
    //    return { width, height, numOfProducts }
    //}

    let isMobile = window.innerHeight > window.innerWidth
    let numOfProducts = isMobile ? 1.9 : 3.5

    const productList: Product[] = [
        { id: 1, description: 'Bubble Kerze', price: '6€', image: kerze_bubble },
        { id: 2, description: 'Tannenbaum Kerze', price: '6€', image: kerze_tannenbaum },
        { id: 3, description: 'Tanzapf Kerze', price: '6€', image: kerze_tannenzapfen },
        { id: 4, description: 'Kerze in Dose mit Duft', price: '4€', image: kerze_dose },
        { id: 5, description: 'Kerze im Glas', price: '5€', image: kerze_glas },
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
