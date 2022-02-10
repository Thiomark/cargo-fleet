<template>
    <div class="bg-gray-50 lg:border-none">
        <div class="container mx-auto px-6">
            <div class="py-10 lg:py-16">
                <div style="max-width: 1200px"  class="flex flex-col px-6 py-10 mx-auto space-y-6 lg:py-16 lg:flex-row lg:items-center lg:space-x-6">    
                    <div class="flex lg:max-w-md items-center justify-center w-full h-96">
                        <img class="object-cover w-full h-full max-w-2xl rounded-md" src="../../assets/images/Truck-Rental.jpg">
                    </div>
                    <div class="w-full">
                        <div class="lg:pl-16 pt-8 lg:pt-0">
                            <h1 class="text-2xl font-semibold tracking-wide text-gray-500 dark:text-white lg:text-3xl">Lorem, ipsum dolor</h1>
                            <p class="mt-8 text-gray-400 text-md">It doesn’t matter if you’re an individual looking to rent a vehicle for a day, a company looking to make daily deliveries or a company that requires a rental onset. {{$store.state.helpers.siteName}} rental service has the right vehicle for you with:</p>
                            <div class="grid gap-6 mt-8 sm:grid-cols-2">
                                <div v-for="(x, i) in items" :key="i" class="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span class="text-gray-500 text-md">{{x}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'InformationTwo',
        data() {
            return {
                images: 'https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000',
                items: [
                    "Premium selection",
                    "Insurance",
                    "All legal documents",
                    "Fast shipping (+ Express)"
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>