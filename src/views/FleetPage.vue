<template>
    <container-screen>
        <wrapper-template :container="true" :y="10" :x="6">
            <main class="space-y-6 md:space-y-0 gap-4 md:grid grid-cols-2 lg:grid-cols-3">
                <div style="background-color: #DDDDDD;" v-for="(vehicle, i) in vehicles" :key="i" class="w-full rounded-lg max-w-2xl">
                    <div class="pt-4 px-10" title="Truck">
                        <img class="w-full pb-12" src="../assets/8-ton-crane-hazchem-truck.jpg" alt="" srcset="" >
                        <div v-if="false" class="flex items-center w-full justify-center pb-4">
                            <div class="rounded-t-lg mx-auto bg-gray-700 flex items-center justify-center px-10 h-10 rounded-sm">
                                <p class="text-sm font-bold text-gray-50">{{removeItems(vehicles[i])}}</p>
                            </div>
                        </div>
                    </div>
                    <div style="border-color: #DDDDDD;" class="border-b-2 z-10 -mt-4 bg-gray-50 border-l-2 border-r-2 rounded-xl p-4">
                        <div v-for="(a, b) in returnArray(removeField(vehicle, ['radion', 'images', 'tare', 'aircon']))" :key="b" >
                            <div :class="b % 2 === 0 && 'bg-gray-100'" class="grid grid-cols-2 place-items-center justify-items-start rounded-md p-2">
                                <p class="text-gray-700 text-sm leading-none uppercase">{{ a[0] }} :</p>
                                <p class="text-gray-600 text-sm  font-semibold capitalize">{{ a[1] }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center w-full justify-center p-4">
                        <router-link to="/online-quote" class="py-2 cursor-pointer text-sm px-6 rounded-md font-semibold shadow-md text-gray-600 bg-gray-50" >Get Quote</router-link>
                    </div>
                </div>
            </main>
            <PaginationComponent />
        </wrapper-template>
    </container-screen>
</template>

<script>
    import ContainerScreen from '../templates/ContainerScreen.vue'
    import WrapperTemplate from '../templates/WrapperTemplate.vue'
    import vehicles from '../assets/vehicles.js'
    import PaginationComponent from '../components/helper/PaginationComponent.vue'
    export default {
        name: 'Fleet',
        components: {
            ContainerScreen,
            WrapperTemplate,
            PaginationComponent
        },
        data() {
            return {
                vehicles: vehicles.splice(0, 9),
            }
        },
        methods: {
            returnArray: (x) => Object.entries(x).map(([key, value]) => [key, value]),
            returnName: (x) => `${x.name}`,
            removeItems: (vehicles) => {
                // console.log(vehicle)
                return 'newArray';
            },
            removeField: (vehicle, remove) => {
                const newArray = vehicle;
                remove.forEach(item => delete newArray[item]);
                return newArray;
            }
        }  
    }
</script>

<style scoped>
    ._img {
        background: url('../assets/8-ton-crane-hazchem-truck.jpg');
        
    }
</style>
