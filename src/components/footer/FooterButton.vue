<template>
    <a
        @click="route(props.route)"
        class="text-gray dark:text-white font-bold py-2 px-4 rounded hover:underline cursor-pointer"
        >{{ props.text }}</a
    >
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
