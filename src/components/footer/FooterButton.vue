<template>
    <button
        @click="route(props.route)"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
    >
        {{ props.text }}
    </button>
</template>

<script setup lang="ts">
    import { useRouter } from 'vue-router'

    const router = useRouter()

    function route(route: string) {
        router.push(route)
    }

    const props = defineProps({
        text: { type: String, required: true },
        route: { type: String, required: true },
    })
</script>
