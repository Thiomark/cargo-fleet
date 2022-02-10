<template>
    <container-screen>
        <div style="background-color: #DDDDDD;" >
            <div class="flex items-center justify-evenly grid-cols-3 container h-60 px-6 mx-auto">
                <div class="w-full hidden md:flex items-center justify-center">
                    <img src="../assets/images/14-ton-refrigerated-truck.jpg" alt="truck">
                </div>
                <div class="w-full flex items-center justify-center md:hidden lg:flex">
                    <img src="../assets/images/8-ton-crane-hazchem-truck.jpg" alt="truck">
                </div>
                <div class="w-full hidden md:flex items-center justify-center">
                    <img src="../assets/images/4-ton-drop-side-truck+-labour-canopy.jpg" alt="truck">
                </div>
            </div>
        </div>
        <wrapper-template :container="true" :y="10" :x="6">
            <div class="pb-20 ">
                <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">A world class truck rental service</span>
                <h1 class="block mt-2 text-2xl font-semibold text-gray-800 dark:text-white">About {{$store.state.helpers.siteName && $store.state.helpers.siteName}}</h1>
                <div class="mt-3 space-y-4">
                    <p class="text-sm text-gray-600 dark:text-gray-400">{{$store.state.helpers.siteName && $store.state.helpers.siteName}} is one of South Africa’s leading truck rental and logistics companies with a national footprint covering all major centres. {{$store.state.helpers.siteName && $store.state.helpers.siteName}} offers short, medium and long term truck rentals as well as full maintenance leasing and outsourced distribution service. Our fleet includes a wide range of specialist vehicles for hire including refrigerated trucks, crane trucks and Hazchem vehicles.</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Drivers can be hired for trips by prior arrangement.</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">We serve small, medium and large businesses in commercial, agricultural and industrial sectors, as well as individuals who can hire a truck in their personal capacity.</p>
                </div>
                <h1 class="block text-2xl font-semibold text-gray-800 dark:text-white mt-10">The following extras can be provided on request:</h1>
                <ul class="pl-5 py-4 md:grid grid-cols-2">
                    <li v-for="(x, i) in list" :key="i" class="mt-2 list-disc text-sm text-gray-600 dark:text-gray-400">{{x}}</li>
                </ul>
                <p class="text-md font-semibold text-gray-700 mt-6">For quotes or enquiries:</p>
                <ul class="py-4 w-full max-w-lg">
                    <li v-for="(x, i) in $store.state.helpers.siteInfo" :key="i" class="mt-2 md:grid grid-cols-3 space-y-3 md:space-y-0 md:gap-x-16 text-sm text-gray-600 dark:text-gray-400">
                        <p class="text-md font-bold text-gray-800">{{x.title}}</p>
                        <p class="text-md font-semibold text-gray-700">{{x.phone}}</p>
                        <router-link class="hover:underline text-red-600 font-semibold" :to="`mailto:${ x.email }`">{{x.email}}</router-link>
                    </li>
                </ul>
            </div>
        </wrapper-template>
    </container-screen>
</template>

<script>
    import ContainerScreen from '../templates/ContainerScreen.vue'
    import WrapperTemplate from '../templates/WrapperTemplate.vue'
    export default {
        name: 'About',
        components: {
            ContainerScreen,
            WrapperTemplate
        },
        data() {
            return {
                list: [
                    'Drivers and assistants',
                    'Trolleys',
                    'Corner Pieces',
                    'Tarpaulins & cargo Nets',
                    'Straps & Ratchets'
                ],
                images: [
                    'https://images.pexels.com/photos/6169177/pexels-photo-6169177.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                    'https://images.pexels.com/photos/188679/pexels-photo-188679.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
                ]
            }
        },  
    }
</script>

<style>
    .image_1 {
        background-image: url('../assets/images/14-ton-refrigerated-truck.jpg');
    }
    .image_2 {
        background-image: url('../assets/images/8-ton-crane-hazchem-truck.jpg');
    }
    .image_3 {
        background-image: url('../assets/images/4-ton-drop-side-truck+-labour-canopy.jpg');
    }
</style>