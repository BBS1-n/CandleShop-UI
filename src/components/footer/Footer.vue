<template>
    <footer class="p-4 bg-[#6a6a6a] text-white">
        <p>Copyright &copy; {{ copyRight }}</p>
    </footer>
</template>

<script lang="ts" setup>
    import { computed } from 'vue'

    const copyRight = computed(() => {
        return new Date().getFullYear()
    })
</script>
