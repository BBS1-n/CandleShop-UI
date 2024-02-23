<template>
    <h2 class="mt-4 text-4xl text-center text-accent font-bold uppercase mb-2">Kontaktieren Sie uns gern</h2>
    <p class="text-lg text-gray dark:text-white text-center mb-6 max-w-lg m-auto">
        Haben Sie Fragen zu unserer Schulfirma, der Herstellung der Kerzen oder ein anderes Anliegen?
    </p>
    <form class="max-w-md xl:max-w-lg w-full m-auto flex flex-wrap gap-4" method="post">
        <div class="relative bg-light_gray rounded max-w-1/2 grow">
            <input
                @focusin="labelTransition('firstName', ELabelActionType.IN)"
                @focusout="labelTransition('firstName', ELabelActionType.OUT)"
                v-model="firstName"
                type="text"
                name="firstName"
                id="firstName"
                class="bg-transparent w-full px-2 py-1 border border-transparent outline-0 text-white rounded focus:border-[#6a6a6a]"
            />
            <label for="firstName" class="label text-[#808080]"> Vorname </label>
        </div>
        <div class="relative bg-light_gray rounded max-w-1/2 grow">
            <input
                @focusin="labelTransition('lastName', ELabelActionType.IN)"
                @focusout="labelTransition('lastName', ELabelActionType.OUT)"
                required
                v-model="lastName"
                type="text"
                name="lastName"
                id="lastName"
                class="bg-transparent w-full px-2 py-1 border border-transparent outline-0 text-white rounded focus:border-[#6a6a6a]"
            />
            <label for="lastName" class="label text-[#808080]"> Nachname* </label>
        </div>
        <div class="relative bg-light_gray rounded w-full">
            <input
                @focusin="labelTransition('email', ELabelActionType.IN)"
                @focusout="labelTransition('email', ELabelActionType.OUT)"
                v-model="email"
                required
                type="email"
                name="email"
                id="email"
                class="bg-transparent w-full px-2 py-1 border border-transparent outline-0 text-white rounded focus:border-[#6a6a6a]"
            />
            <label for="email" class="label text-[#808080]"> E-Mail-Adresse* </label>
        </div>
        <div class="relative rounded w-full">
            <textarea
                @focusin="labelTransition('message', ELabelActionType.IN)"
                @focusout="labelTransition('message', ELabelActionType.OUT)"
                v-model="message"
                name="message"
                id="message"
                class="bg-beige dark:bg-light_gray w-full px-2 py-1 border border-transparent outline-0 text-white rounded focus:border-[#6a6a6a]"
            ></textarea>
            <label for="message" class="label textarea-label text-[#808080] mt-2"> Anliegen </label>
        </div>
        <div class="flex gap-2 items-baseline">
            <input
                type="checkbox"
                name="privacy"
                id="privacy"
                class="bg-transparent cursor-pointer accent-accent"
                required
            />
            <label for="privacy" class="privacy text-gray dark:text-white cursor-pointer select-none">
                Ich bin damit einverstanden, dass meine personenbezogenen Daten gemäß der
                <a class="underline text-gray dark:text-white hover:text-accent" href="/datenschutz" target="_blank"
                    >Datenschutzerklärung</a
                >
                verarbeitet und genutzt werden.*
            </label>
        </div>
        <div class="required text-dark dark:text-white">* Pflichtfeld</div>
        <input
            @click="triggerMailTo"
            type="submit"
            class="w-max ml-auto bg-accent px-4 py-2 rounded text-white cursor-pointer"
            value="Abschicken"
        />
    </form>
</template>

<style>
    input[type='text'],
    input[type='email'] {
        @apply accent-accent cursor-text bg-beige dark:bg-light_gray w-full text-gray dark:text-white;
    }
    label.label {
        @apply absolute cursor-text inset-0 my-auto h-4 flex items-center ms-1 p-1 py-3 w-max transition-all duration-700 bg-beige dark:bg-light_gray rounded;
    }
    .dark input[type='date']::-webkit-calendar-picker-indicator {
        filter: invert(1);
    }
    .textarea-label {
        margin-top: 0.5rem !important;
        padding-top: 10px !important;
    }
    textarea {
        min-height: 4rem;
    }
</style>

<script setup lang="ts">
    import { Ref, ref } from 'vue'

    const firstName = ref('')
    const lastName = ref('')
    const email = ref('')
    const message = ref('')
    const fieldsMappings = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message,
    } as Record<string, Ref<string>>

    enum ELabelActionType {
        IN,
        OUT,
    }

    function labelTransition(id: string, action: ELabelActionType) {
        const field = document.getElementById(id)
        const label = field?.nextElementSibling as HTMLElement

        if (label && !fieldsMappings[id]?.value.length) {
            label.classList[action === ELabelActionType.IN ? 'add' : 'remove'](
                '-translate-y-5',
                'text-xs',
                'dark:text-white',
                'text-gray',
            )
            label.classList[action === ELabelActionType.IN ? 'remove' : 'add']('text-[#808080]')
        }
    }

    function triggerMailTo(event: Event) {
        event.preventDefault()

        const destination = 'test@test.test'
        const subject = `Kontaktanfrage: ${firstName.value} ${lastName.value}`
        const body = `E-Mail: ${email.value}\n\n${message.value}`

        window.open(
            `mailto:${destination}?subject=${encodeURIComponent(`${subject}`)}&body=${encodeURIComponent(body)}`,
            '_blank',
        )

        Object.entries(fieldsMappings).forEach(([key, field]) => {
            field.value = ''
            labelTransition(key, ELabelActionType.OUT)
        })
    }
</script>
