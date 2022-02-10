<template>
    <div style="background-color: #141618;" class="py-16 md:py-32">
        <div class="container text-center px-6 mx-auto">
            <h1 class="text-gray-100 text-3xl md:text-5xl font-bold pb-8">Global partners</h1>
            <p class="text-gray-500 tracking-widest text-sm md:text-lg lg:max-w-4xl leading-10 mx-auto font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque tempore, sequi, itaque quia quasi explicabo inventore, velit minus nostrum quo fugiat.</p>
            <div class="flex items-center justify-center py-8 px-4 pb-12 space-x-6">
                <div class=" h-2 w-2 opacity-50 rounded-full bg-gray-400"></div>
                <div class=" h-2 w-2 opacity-75 rounded-full bg-gray-400"></div>
                <div class=" h-2 w-2 rounded-full bg-gray-400"></div>
            </div>
            <ul class="flex flex-wrap max-w-6xl items-center justify-center gap-8 mx-auto">
                
                <li class="md:h-28 md:w-48 flex items-center justify-center" v-for="(x, i) in 'Lorem ipsum dolor sit amet consectetur adipisicing elit Nemo illum deleniti placeat sit nam'.split(' ')" :key="i">
                    <i v-if="false" :class="`icofont-brand-${x} text-gray-500 text-5xl md:text-7xl lg:text-8xl`"></i>
                    <h1 class="text-gray-500 text-2xl">{{x}}</h1>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Sponsorship',
        data() {
            return {
                icons: [
                    'audi', 'honda', 'lexus', 'tango', 'tata-indicom', 'techcrunch', 'tesla', 'volkswagen'
                ]
            }
        },
    }
</script>

<style scoped>

</style>