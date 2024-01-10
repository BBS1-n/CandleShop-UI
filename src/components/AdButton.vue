<template>
    <button
        @click="scrollToMeetUs"
        class="bg-light_gray bg-opacity-75 border-2 border-gray hover:border-blue-600 text-white font-bold py-2 px-4 rounded-lg transition"
    >
        Vor Ort
    </button>
</template>

<script lang="ts" setup>
    function scrollToMeetUs() {
        document.getElementById('meetUs')?.scrollIntoView({
            behavior: 'smooth',
        })
    }
</script>
