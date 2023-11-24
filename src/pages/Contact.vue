<template>
    <h2 class="text-4xl text-center text-accent font-bold mb-2">Kontaktieren Sie uns gern</h2>
    <p class="text-lg text-[#2A2A2A] dark:text-[#F2F2F2] text-center mb-6 max-w-lg m-auto">
        Haben Sie Fragen zu unserer Schulfirma, der Herstellung der Kerzen oder ein anderes Anliegen?
    </p>
    <form class="max-w-xs xl:max-w-lg w-full m-auto flex flex-wrap gap-4" method="post">
        <div class="relative bg-light_gray rounded max-w-1/2 grow">
            <input
                @focusin="labelInTransition('firstName')"
                @focusout="labelOutTransition('firstName')"
                v-model="firstName"
                type="text"
                name="firstName"
                id="firstName"
                class="bg-transparent w-full px-2 py-1 border border-gray outline-0 text-[#2A2A2A] dark:text-[#F2F2F2] rounded focus:border-[#6a6a6a]"
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
        <div class="flex gap-2 items-baseline">
            <input
                type="checkbox"
                name="privacy"
                id="privacy"
                class="bg-transparent cursor-pointer accent-accent"
                required
            />
            <label for="privacy" class="text-[#2A2A2A] dark:text-[#F2F2F2] cursor-pointer select-none">
                Ich bin damit einverstanden, dass meine personenbezogenen Daten gemäß der
                <a class="hover:underline text-[#2A2A2A] dark:text-[#F2F2F2]" href="/datenschutz" target="_blank"
                    >Datenschutzerklärung</a
                >
                verarbeitet und genutzt werden.*
            </label>
        </div>
        <input type="submit" class="m-auto bg-accent px-4 py-2 rounded text-white cursor-pointer" value="Abschicken" />
    </form>
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
