<template>
    <button
        @click="scrollToProducts"
        class="bg-accent border-2 border-accent hover:border-blue-600 text-white font-bold py-2 px-4 rounded-lg transition"
    >
        Zum Angebot
    </button>
</template>

<script lang="ts" setup>
    function scrollToProducts() {
        document.getElementById('products')?.scrollIntoView({
            behavior: 'smooth',
        })
    }
</script>
