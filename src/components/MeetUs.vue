<template>
    <div id="meetUs" class="text-center mx-auto px-4 md:max-w-xl">
        <h1 class="text-4xl font-bold uppercase text-accent">Vor Ort</h1>
        <p class="text-base mt-4 text-[#2A2A2A] dark:text-[#F2F2F2]">Unsere Kerzen könnt ihr hier kaufen</p>

        <table class="min-w-full divide-y divide-gray-200 dark:divide-[#F2F2F2] shadow-sm mt-2">
            <thead class="bg-gray-50">
                <tr>
                    <th
                        class="px-6 py-3 text-center text-xs font-lg text-[#2A2A2A] dark:text-[#F2F2F2] uppercase tracking-wider"
                    >
                        Datum
                    </th>
                    <th
                        class="px-6 py-3 text-center text-xs font-lg text-[#2A2A2A] dark:text-[#F2F2F2] uppercase tracking-wider"
                    >
                        Ort
                    </th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-[#F2F2F2]">
                <tr v-for="(location, index) in locations" :key="index">
                    <td class="px-6 py-4 whitespace-nowrap text-[#2A2A2A] dark:text-[#F2F2F2]">{{ location.date }}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-[#2A2A2A] dark:text-[#F2F2F2]">{{ location.loc }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    const keys = ref(['Datum, Ort'])

    const locations = ref([
        { date: '06.03.2024', loc: 'Wirtschaft-Live-Messe Soltau' },
        { date: '12.03.2024', loc: 'Osterbasar - BBS1 Lüneburg' },
    ])
</script>
