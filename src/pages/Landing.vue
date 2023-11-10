<template>
    <div class="min-h-screen flex flex-col bg-[#6a6a6a]">
        <header class="p-4 bg-blue-500 text-white">
            <nav>
                <ul class="flex space-x-4">
                    <li><a href="#" class="hover:underline">Link 1</a></li>
                    <li><a href="#" class="hover:underline">Link 2</a></li>
                    <li><a href="#" class="hover:underline">Link 3</a></li>
                </ul>
            </nav>
        </header>

        <main class="mt-xxl">
            <div class="ml-l">
                <h1 class="text-2xl text-white mb-2">BBS 1 Lüneburg</h1>
                <h1 class="text-5xl font-bold border-blue-500 pb-8 text-white">Candyshop</h1>

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

        <section class="bg-[#2A2A2A] flex-grow pt-8">
            <about-us class="mb-20" />
            <products />

            <!-- content.. -->
        </section>

        <footer class="p-4 bg-[#6a6a6a] text-white">
            <p>Copyright &copy; {{ copyRight }}</p>
        </footer>
    </div>
</template>

<script setup lang="ts">
    import OfferButton from '../components/OfferButton.vue'
    import AboutUs from '../components/AboutUs.vue'
    import Products from '../components/Producs.vue'
    import { computed, ref } from 'vue'

    const copyRight = computed(() => {
        return new Date().getFullYear()
    })
</script>
