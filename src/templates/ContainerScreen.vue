<template>
    <div class="__container__screen">
        <div class="min-h-screen flex flex-col w-full">
            <nav class="bg-white shadow dark:bg-gray-800">
                <div class="container px-6 py-4 mx-auto">
                    <div class="lg:flex lg:items-center lg:justify-between">
                        <div class="flex items-center justify-between">
                            <div class="text-xl font-semibold text-gray-700">
                                <router-link class="text-2xl flex items-center justify-center font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" to="/">
                                    <h1 class="-tracking-widest hidden">{{logo($store.state.helpers.siteName)}}</h1>
                                    <h1 class=" text-gray-600">B</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-gray-600 w-12 h-12" viewBox="0 0 24 24" fill="none"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-.5 1.5l1.96 2.5H17V9.5h2.5zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2.22-3c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3V6h12v9H8.22zM18 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>
                                    <h1 class=" text-gray-600">B</h1>
                                </router-link>
                            </div>

                            <!-- Mobile menu button -->
                            <div class="flex lg:hidden" @click="menuClosed = !menuClosed">
                                <button type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                    <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                        <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                        <div :class="menuClosed && 'hidden'" class="-mx-4 lg:flex lg:items-center">
                            <router-link v-for="(x, i) in links" :key="i" :to="x.path" class="block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400">{{x.name}}</router-link>
                        </div>
                    </div>
                </div>
            </nav>
            <main class="flex-grow ">
                <slot></slot>
            </main>
        </div>
        <footer class="dark:bg-white pt-10 bg-gray-800">
            <div class="container px-6 py-4 mx-auto">
                <div class="lg:flex">
                    <div class="w-full -mx-6 lg:w-2/5">
                        <div class="px-6">
                            <div>
                                <router-link to="/" class="text-xl font-bold dark:text-gray-800 text-white dark:hover:text-gray-700 hover:text-gray-300">{{$store.state.helpers.siteName}}</router-link>
                            </div>
                            
                            <p class="max-w-md mt-2 dark:text-gray-500 text-gray-400">Join 31,000+ other and never miss out on new tips, tutorials, and more.</p>
                            
                            <div class="flex mt-4 -mx-2">
                                <router-link to="#" class="mx-2 dark:text-gray-700 dark:hover:text-gray-200 text-gray-600 hover:text-gray-400" aria-label="Linkden">
                                    <svg class="w-4 h-4 fill-current" viewBox="0 0 512 512">
                                        <path d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"/>
                                    </svg>
                                </router-link>

                                <router-link to="#" class="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400" aria-label="Facebook">
                                    <svg class="w-4 h-4 fill-current" viewBox="0 0 512 512">
                                        <path d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"/>
                                    </svg>
                                </router-link>

                                <router-link to="#" class="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400" aria-label="Twitter">
                                    <svg class="w-4 h-4 fill-current" viewBox="0 0 512 512">
                                        <path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"/>
                                    </svg>
                                </router-link>
                            </div>
                        </div>
                    </div>

                    <div class="mt-6 lg:mt-0 lg:flex-1">
                        <div class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-3">
                            <div>
                                <h3 class="dark:text-gray-700 uppercase text-white">About</h3>
                                <router-link to="#" class="block mt-2 text-sm dark:text-gray-600 text-gray-400 hover:underline">Lorem</router-link>
                                <router-link to="#" class="block mt-2 text-sm dark:text-gray-600 text-gray-400 hover:underline">Lorem</router-link>
                                <router-link to="#" class="block mt-2 text-sm dark:text-gray-600 text-gray-400 hover:underline">Lorem</router-link>
                            </div>

                            <div>
                                <h3 class="dark:text-gray-700 uppercase text-white">Products</h3>
                                <router-link to="#" class="block mt-2 text-sm dark:text-gray-600 text-gray-400 hover:underline">Lorem</router-link>
                                <router-link to="#" class="block mt-2 text-sm dark:text-gray-600 text-gray-400 hover:underline">Lorem</router-link>
                                <router-link to="#" class="block mt-2 text-sm dark:text-gray-600 text-gray-400 hover:underline">Lorem</router-link>
                            </div>

                            <div>
                                <h3 class="dark:text-gray-700 uppercase text-white">Contact</h3>
                                <span class="block mt-2 text-sm dark:text-gray-600 text-gray-400 hover:underline">+27-56 654 8965</span>
                                <span class="block mt-2 text-sm dark:text-gray-600 text-gray-400 hover:underline">example@email.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <hr class="h-px my-6 dark:bg-gray-300 border-none bg-gray-700">

                <div>
                    <p class="text-center dark:text-gray-800 text-white">© {{$store.state.helpers.siteName}} {{new Date().getFullYear()}} - All rights reserved</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                menuClosed: true,
                links: [
                    { name: 'Home', path: '/' },
                    { name: 'About', path: '/about' },
                    { name: 'Fleet', path: '/fleet' },
                    { name: 'Contact', path: '/contact' },
                    { name: 'Online Quote', path: '/online-quote' },
                ]
            }
        },
        methods: {
            logo: (name) => {
                const x =  name.split(' ').map(e => e.split('')[0]);
                return `${x[0]}${x[1]}${x[2]}`
            }
        }
    }
</script>

<style>
    .__container__screen {
        font-family: 'Poppins', sans-serif;
    }
</style>


