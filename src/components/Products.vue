<template>
    <div id="products" class="text-center text-white mx-auto max-w-prose">
        <h1 class="text-4xl font-bold underline text-blue-500">Produkte</h1>
        <p class="text-base mt-4">ToDO</p>
        <!--<div v-for="product in productList">
            <img :src="product.image" />
            <p>{{ product.description }}</p>
            {{ product.price }}
        </div>
    -->
        <Carousel :autoplay="parseInt('2000')" :itemsToShow="3.95" :wrapAround="true" :transition="500">
            <Slide v-for="product in productList" :key="product.price">
                <div class="carousel__item">
                    <img :src="product.image" />
                    <p>{{ product.description }}</p>
                    <p>{{ product.price }}</p>
                </div>
            </Slide>
        </Carousel>
    </div>
</template>

<script lang="ts" setup>
    import kerze_bubble from '../assets/kerze_bubble.jpeg'
    import kerze_tannenbaum from '../assets/kerze_tannenbaum.jpg'
    import kerze_tannenzapfen from '../assets/kerze_tannenzapfen.jpg'
    import defineComponent from 'vue'
    import { Carousel, Pagination, Slide } from 'vue3-carousel'

    import 'vue3-carousel/dist/carousel.css'

    const productList = [
        { id: 1, description: 'Wunderschöne Kugelkerze', price: '500€', image: kerze_bubble },
        { id: 2, description: 'Gigantischer Kerzen-Tannebaum', price: '5000€', image: kerze_tannenbaum },
        { id: 3, description: 'Kleine aber wunderschöne Tannenzäpchen', price: '200€', image: kerze_tannenzapfen },
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
