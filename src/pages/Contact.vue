<template>
    <div class="min-h-screen flex flex-col bg-[#6a6a6a]">
        <main class="mt-l">
            <div class="ml-l">
                <h1 class="text-2xl text-white mb-2">BBS 1 Lüneburg – Candleshop</h1>
                <span class="text-5xl font-bold border-blue-500 pb-8 text-white">Kontakt</span>

                <offer-button />
            </div>

            <div class="mt-l"></div>

            <div class="relative">
                <svg
                    width="100%"
                    height="80"
                    viewBox="0 0 977 70"
                    fill="none"
                    style="display: block; margin-bottom: -1px"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clip-path="url(#clip0_153_27)">
                        <path
                            opacity="0.33"
                            d="M514.879 22.89C714.089 -38.92 771.928 46.69 827.812 22.89C912.518 -13.37 1000 28.21 977 28.21V70L0 70V28.21C0 28.21 60.6718 9.94 92.7173 7.7C124.763 5.39 154.073 16.31 166.774 23.17C189.538 35.28 248.842 63.91 298.083 66.71C347.323 69.51 495.925 28.7 514.879 22.89Z"
                            fill="#2A2A2A"
                        />
                        <path
                            opacity="0.66"
                            d="M259.882 22.89C304.336 22.89 335.306 39.13 386.013 50.26C413.955 56.35 532.856 57.33 634.171 22.89C735.486 -11.55 723.762 46.97 779.939 22.89C863.961 -12.81 977 42.14 977 42.14V70L0 70V44.45C0 44.45 27.5514 57.4 89.9817 57.4C185.435 57.33 219.141 22.89 259.882 22.89Z"
                            fill="#2A2A2A"
                        />
                        <path
                            d="M228.52 49.77C423.92 90.02 488.402 3.92 614.533 36.12C740.566 68.74 740.566 66.22 796.45 55.58C851.944 44.94 847.743 38.57 889.168 33.25C949.058 25.41 977 70 977 70L0 70C0 70 9.6723 41.37 81.6772 36.33C153.682 31.29 166.481 37.1 228.52 49.77Z"
                            fill="#2A2A2A"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_153_27">
                            <rect width="977" height="70" fill="white" transform="matrix(-1 0 0 -1 977 70)" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </main>

        <section class="bg-gray flex-grow py-16">
            <h2 class="text-4xl text-center text-accent font-bold mb-2">Kontaktieren Sie uns gern</h2>
            <p class="text-lg text-white text-center mb-6 max-w-lg m-auto">Haben Sie Fragen zu unserer Schulfirma, der Herstellung der Kerzen oder ein anderes Anliegen?</p>
            <form class="max-w-lg w-full m-auto flex flex-wrap gap-4" method="post">
                <div class="relative bg-light_gray rounded max-w-1/2 grow">
                    <input
                        @focusin="labelInTransition('firstName')"
                        @focusout="labelOutTransition('firstName')"
                        v-model="firstName"
                        type="text"
                        name="firstName"
                        id="firstName"
                        class="bg-transparent w-full px-2 py-1 border border-gray outline-0 text-white rounded focus:border-[#6a6a6a]"
                    />
                    <label
                        for="firstName"
                        class="absolute cursor-text text-[#808080] inset-0 my-auto h-4 flex items-center ms-1 px-1 w-max transition-all bg-light_gray rounded"
                    >
                        Vorname
                    </label>
                </div>
                <div class="relative bg-light_gray rounded max-w-1/2 grow">
                    <input
                        @focusin="labelInTransition('lastName')"
                        @focusout="labelOutTransition('lastName')"
                        v-model="lastName"
                        type="text"
                        name="lastName"
                        id="lastName"
                        class="bg-transparent w-full px-2 py-1 border border-gray outline-0 text-white rounded focus:border-[#6a6a6a]"
                    />
                    <label
                        for="lastName"
                        class="absolute cursor-text text-[#808080] inset-0 my-auto h-4 flex items-center ms-1 px-1 w-max transition-all bg-light_gray rounded"
                    >
                        Nachname*
                    </label>
                </div>
                <div class="relative bg-light_gray rounded w-full">
                    <input
                        @focusin="labelInTransition('email')"
                        @focusout="labelOutTransition('email')"
                        v-model="email"
                        type="email"
                        name="email"
                        id="email"
                        class="bg-transparent w-full px-2 py-1 border border-gray outline-0 text-white rounded focus:border-[#6a6a6a]"
                    />
                    <label
                        for="email"
                        class="absolute cursor-text text-[#808080] inset-0 my-auto h-4 flex items-center ms-1 px-1 w-max transition-all bg-light_gray rounded"
                    >
                        E-Mail-Adresse*
                    </label>
                </div>
                <div class="relative bg-light_gray rounded w-full">
                    <input
                        @focusin="labelInTransition('message')"
                        @focusout="labelOutTransition('message')"
                        v-model="message"
                        type="text"
                        name="message"
                        id="message"
                        class="bg-transparent w-full px-2 py-1 border border-gray outline-0 text-white rounded focus:border-[#6a6a6a]"
                    />
                    <label
                        for="email"
                        class="absolute cursor-text text-[#808080] inset-0 my-auto h-4 flex items-center ms-1 px-1 w-max transition-all bg-light_gray rounded"
                    >
                        Nachricht*
                    </label>
                </div>
                <!-- <div class="relative bg-light_gray rounded w-full">
                    <textarea
                    @focusin="labelInTransition('message')"
                        @focusout="labelOutTransition('message')"
                        v-model="message"
                        name="message"
                        id="message"
                        class="bg-transparent w-full px-2 py-1 border-0 outline-0 text-white"
                        required
                        ></textarea>
                        <label
                        for="message"
                        class="absolute cursor-text text-[#808080] inset-0 my-auto h-4 flex items-center ms-1 px-1 w-max transition-all bg-light_gray rounded"
                        >
                        Nachricht*
                    </label>
                </div> -->
                <div class="flex gap-2 items-baseline">
                    <input
                        type="checkbox"
                        name="privacy"
                        id="privacy"
                        class="bg-transparent cursor-pointer accent-accent"
                        required
                    />
                    <label for="privacy" class="cursor-text text-white cursor-pointer select-none">
                        Ich bin damit einverstanden, dass meine personenbezogenen Daten gemäß der
                        <a class="hover:underline" href="/datenschutz" target="_blank">Datenschutzerklärung</a>
                        verarbeitet und genutzt werden.*
                    </label>
                </div>
                <input type="submit" class="m-auto bg-accent px-4 py-2 rounded text-white cursor-pointer" value="Abschicken" />
            </form>
        </section>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    const firstName = ref('')
    const lastName = ref('')
    const email = ref('')
    const message = ref('')

    function labelInTransition(id: string) {
        const input = document.getElementById(id)
        const label = input?.nextElementSibling as HTMLElement

        if (label && !input?.textContent) {
            label.classList.add('-translate-y-5', 'text-xs')
            // label.classList.remove('opacity-50')
        }
    }
    function labelOutTransition(id: string) {
        const input = document.getElementById(id)
        const label = input?.nextElementSibling as HTMLElement

        if (label && firstName.value.length == 0) {
            label.classList.remove('-translate-y-5', 'text-xs')
            // label.classList.add('opacity-50')
        }
    }
</script>