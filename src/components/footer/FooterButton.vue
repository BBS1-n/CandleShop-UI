<template>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition">
        {{ props.text }}
    </button>
</template>

<script setup lang="ts">
    const props = defineProps({
        text: { type: String, required: true },
        route: { type: String, required: true },
    })
</script>
