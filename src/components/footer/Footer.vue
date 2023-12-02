<template>
    <footer class="p-4 bg-beige dark:bg-light_gray w-full">
        <div
            class="text-white justify-between items-center flex max-sm:flex-col-reverse max-sm:gap-4 max-w-screen-2xl mx-auto w-full"
        >
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Copyright &copy; {{ copyRight }}</a>

            <div class="flex gap-x-6 gap-y-3 flex-wrap justify-center">
                <footer-button v-for="button in footerButtons" :text="button.text" :route="button.route" />
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup>
    interface FooterButton {
        text: string
        route: string
    }

    import { computed, ref } from 'vue'
    import FooterButton from './FooterButton.vue'

    const footerButtons = ref<FooterButton[]>([
        { text: 'Impressum', route: '/impressum' },
        { text: 'Kontakt', route: '/kontakt' },
        { text: 'Datenschutz', route: '/datenschutz' },
    ])

    const copyRight = computed(() => {
        return new Date().getFullYear()
    })
</script>
