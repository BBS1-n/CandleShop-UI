<template>
    <div id="winterMagic" class="text-center mx-auto px-4 md:max-w-xl">
        <h1 class="text-4xl font-bold uppercase text-accent">Winterzauber</h1>
        <p class="text-base mt-4 text-[#2A2A2A] dark:text-[#F2F2F2]">
            Lasst uns gemeinsam in Weihnachtsstimmung kommen und miteinander die Vorweihnachtszeit genießen. Dich
            erwarten viele Leckereien und tolle Weihnachtsartikel und vieles mehr, zum Beispiel von unseren
            Schülerfirmen!
        </p>

        <button
            @click="openPopup"
            class="bg-blue-500 hover:bg-blue-600 text-white mt-6 font-bold py-2 px-4 rounded-lg transition"
        >
            Zum Flyer
        </button>
    </div>
</template>

<script setup lang="ts">
    function openPopup() {
        window.open('/CandleShop-UI/winterzauber.jpg', '_blank')
    }
</script>
