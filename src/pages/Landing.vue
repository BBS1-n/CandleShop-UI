<template>
    <div class="min-h-screen flex flex-col bg-[#2A2A2A]">
        <header class="p-4 bg-blue-500 text-white">
            <nav>
                <ul class="flex space-x-4">
                    <li><a href="#" class="hover:underline">Link 1</a></li>
                    <li><a href="#" class="hover:underline">Link 2</a></li>
                    <li><a href="#" class="hover:underline">Link 3</a></li>
                </ul>
            </nav>
        </header>

        <main class="">
            <h1 class="text-4xl font-bold border-blue-500 pb-2 text-white">Candyshop</h1>
            <h1 class="text-2xl text-white mb-8">BBS 1 Lüneburg</h1>

            <p class="text-white">blabla</p>
            <p class="text-white">blabla</p>
            <p class="text-white">blabla</p>
            <p class="text-white">blabla</p>
            <p class="text-white">blabla</p>

            <div class="relative">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160" style="width: 100%; margin-bottom: -1px">
                    <path
                        fill="#1c3d73"
                        fill-opacity="1"
                        d="M0,32L60,42.7C120,53,240,75,360,69.3C480,64,600,32,720,37.3C840,43,960,85,1080,85C1200,85,1320,43,1380,26.7L1440,10L1440,160L1380,160C1320,160,1200,160,1080,160C960,160,840,160,720,160C600,160,480,160,360,160C240,160,120,160,60,160L0,160Z"
                    ></path>
                </svg>
            </div>
        </main>

        <section class="bg-[#1c3d73] flex-grow">
            <p class="text-white">BLABLABLA</p>
            <!-- content.. -->
        </section>

        <footer class="p-4 bg-blue-500 text-white">
            <p>Copyright &copy; 2022</p>
        </footer>
    </div>
</template>

<script setup lang="ts"></script>
