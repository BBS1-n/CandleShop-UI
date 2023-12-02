<template>
    <div class="text-center mx-auto px-4 md:max-w-xl">
        <h1 class="text-4xl font-bold uppercase text-accent">Herstellung</h1>
        <p class="text-base mt-4 text-[#2A2A2A] dark:text-[#F2F2F2]">
            Unsere Kerzen bestehen aus Sojawachs und werden in liebevoller Handarbeit hergestellt. Dafür wird das Wachs
            auf unseren Induktionskochplatten erhitzt und eingefärbt. Dann folgt das Gießen in die Gefäße oder Formen.
            Nach 48 Stunden sind die Kerzen vollständig ausgekühlt und können aus den Formen herausgelöst werden. Fertig
            sind die veganen und von uns Schülern*innen handgefertigten Kerzen.
        </p>
    </div>

    <carousel class="mt-4 mb-12 mx-auto max-w-xl" :itemsToShow="1" :wrapAround="true">
        <Slide v-for="product in productList" :key="product.id">
            <div
                class="cursor-grab carousel__item max-w-sm rounded overflow-hidden shadow-lg bg-[#C3B98E] dark:bg-[#393939]"
            >
                <img class="w-full p-2" :src="product.image" :alt="product.description" :title="product.description" />
            </div>
        </Slide>
        <template #addons>
            <Navigation />
            <Pagination />
        </template>
    </carousel>
</template>

<script lang="ts" setup>
    import { computed, onMounted, ref } from 'vue'
    import zutatenHilfsmittel from '../assets/zutaten-hilfsmittel.jpg'
    import draufsicht from '../assets/draufsicht-kocher.jpeg'
    import seitenansicht from '../assets/seitenansicht-kocher.jpg'
    import wachsMetal from '../assets/wachs-in-metalschale.jpg'
    import wachsGussform from '../assets/wachs-in-gussform.jpg'
    import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
    import 'vue3-carousel/dist/carousel.css'

    interface Product {
        id: number
        description: string
        image: string
    }

    let isMobile = ref(window.innerHeight > window.innerWidth)

    const productList: Product[] = [
        { id: 1, description: 'Zutaten und Hilfsmittel', image: zutatenHilfsmittel },
        { id: 2, description: 'Draufsicht vom Kocher', image: draufsicht },
        { id: 3, description: 'Seitenansicht vom Kocher', image: seitenansicht },
        { id: 4, description: 'Geschmolzenes Wachs im Kocher', image: wachsMetal },
        { id: 5, description: 'Wachs in Gussform', image: wachsGussform },
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

    .carousel__icon {
        background-color: #f2f2f2;
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
</style>
