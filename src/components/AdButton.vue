<template>
    <button
        @click="scrollToProducts"
        class="bg-light_gray bg-opacity-75 border-2 border-gray hover:border-blue-600 text-white font-bold py-2 px-4 rounded-lg transition"
    >
        Winterzauber
    </button>
</template>

<script lang="ts" setup>
    function scrollToProducts() {
        document.getElementById('winterMagic')?.scrollIntoView({
            behavior: 'smooth',
        })
    }
</script>
