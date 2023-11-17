<template>
    <div id="products" class="text-center text-white mx-auto max-w-3xl">
        <h1 class="text-4xl font-bold underline text-accent">Produkte</h1>

        <carousel class="mt-4" :autoplay="parseInt('2000')" :itemsToShow="3.95" :wrapAround="true" :transition="500">
            <Slide v-for="product in productList" :key="product.price">
                <div class="carousel__item">
                    <img :src="product.image" />
                    <p>{{ product.description }}</p>
                    <p>{{ product.price }}</p>
                </div>
            </Slide>
        </carousel>
    </div>
</template>

<script lang="ts" setup>
    import kerze_bubble from '../assets/kerze_bubble.jpg'
    import kerze_dose from '../assets/kerze_dose.jpg'
    import kerze_glas from '../assets/kerze_glas.jpg'
    import kerze_tannenbaum from '../assets/kerze_tannenbaum.jpeg'
    import kerze_tannenzapfen from '../assets/kerze_tannenzapf.jpg'
    import { Carousel, Slide } from 'vue3-carousel'

    import 'vue3-carousel/dist/carousel.css'

    interface Product {
        id: number
        description: string
        price: string
        image: string
    }

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
    }

    .carousel__slide {
        padding: 5px;
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

    .carousel__slide {
        opacity: 0.9;
        transform: rotateY(-20deg) scale(0.9);
    }

    .carousel__slide--active ~ .carousel__slide {
        transform: rotateY(20deg) scale(0.9);
    }

    .carousel__slide--prev {
        opacity: 1;
        transform: rotateY(-10deg) scale(0.95);
    }

    .carousel__slide--next {
        opacity: 1;
        transform: rotateY(10deg) scale(0.95);
    }

    .carousel__slide--active {
        opacity: 1;
        transform: rotateY(0) scale(1.1);
    }
</style>
