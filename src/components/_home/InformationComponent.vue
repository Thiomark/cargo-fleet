<template>
    <div class="dark:bg-gray-800 border-t lg:border-none">
        <div class="container mx-auto px-6">
            <div class="py-8 md:py-16">
                <div style="max-width: 1200px" class="flex flex-col mx-auto space-y-6 lg:py-16 lg:flex-row lg:items-center lg:space-x-6">    
                    <div class="w-full sm:mb-10 lg:mb-0">
                        <div class="lg:pr-16">
                            <h2 class="text-xs pb-4 uppercase font-bold tracking-wide text-indigo-400 dark:text-white">Cargo Fleet Rentals</h2>
                            <h1 class="text-2xl font-semibold tracking-wide text-gray-500 dark:text-white lg:text-3xl">Welcome to {{$store.state.helpers.siteName}}</h1>
                            <p class="mt-8 text-gray-400 text-md">{{$store.state.helpers.siteName}} has continuously developed over the past years to become South Africa’s leading truck rental and leasing provider. With over 90 vehicles, few can match our capabilities. But we do not stop at that – every day we work tirelessly to improve our quality at every turn.</p>
                            <p class="mt-8 text-gray-400 text-md">Our services include short term commercial vehicle rental, full maintenance leasing and dedicated transport contracts. Put us to the test today by completing our online <router-link to="/online-quote" class="text-blue-500 underline">enquiry form</router-link> or calling our national call centre on <router-link to="/contact" class="text-blue-500 underline">{{$store.state.helpers.siteInfo[0].phone}}</router-link>.</p>
                        </div>
                    </div>
                    <div class="flex sm:border border-dotted lg:max-w-lg items-center sm:relative justify-center w-full h-96">
                        <img style="max-width: 460px; height: 80%;" class="object-cover shadow-lg sm:absolute -top-7 w-full h-full rounded-md" src="../../assets/images/8-seater-bus1.jpg">
                        <img style="height: 80%;" class="object-cover max-w-md shadow-lg hidden sm:block absolute right-10 lg:-right-6 -bottom-7 w-full h-full rounded-md" src="../../assets/images/14-ton-drop-side-flat-deck-truck.jpg">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Information',
        data() {
            return {
                images: [
                    'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000',
                    'https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000'
                ]
            }
        },
    }
</script>
