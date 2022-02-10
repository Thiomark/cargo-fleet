<template>
    <form-template>
        <div>
            <h1 class="font-bold text-xl text-gray-600 mt-6">Request a Quote</h1>
            <hr class="mt-6">
            <div style="grid-template-columns: 2fr 1fr" class="xl:grid gap-6">
                <form class="w-full">
                    <div class="mt-8">
                        <div class="items-center md:grid grid-cols-2 gap-6">
                            <div v-for="(x, i) in form" :key="i" class="w-full">
                                <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">{{x.title}}</label>
                                <input :required="false" v-model="x.variable" class="w-full block px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" :type="x.type">
                            </div>
                        </div>
                        <hr class="mt-10">
                        <div class="items-center md:grid mt-6 grid-cols-2 gap-6">
                            <div v-for="(x, i) in selection" :key="i" class="w-full">
                                <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">{{x.title}}</label>
                                <input :required="false" :value="x.variable" v-model="x.variable"  class="w-full block px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" :type="x.type">
                            </div>
                        </div>
                        <hr class="mt-10">
                        <div class="w-full mt-6">
                            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Additional Comments</label>
                            <textarea placeholder="Any instructions..." class="block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
                        </div>

                        <div class="flex  mt-6">
                            <button class="px-8 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Submit</button>
                        </div>
                    </div>
                </form>
                <div class="space-y-4 py-4 mt-6">
                    <p class="text-gray-500 text-sm">We stock a large fleet of trucks that consists of various truck configurations and load capacities that caters for a wide variety of transportation requirements. Clients are welcome to contact us for assistance with the right truck configuration choice for their rental.</p>
                    <p class="text-gray-500 text-sm">Our truck hire service is aimed at clients’ who have short to medium truck rental requirements. As a value-added service, we give clients the option of renting a truck along with an experienced driver as well as a crew, if required</p>
                    <h1 class="font-semibold text-gray-600 text-lg">Truck Rental Locations</h1>
                    <p class="text-gray-500 text-sm">{{ $store.state.helpers.siteName }} proudly offers truck rental across South Africa. Our depots are situated in, <span class="underline text-blue-400">Johannesburg</span>, <span class="underline text-blue-400">Pretoria</span>, <span class="underline text-blue-400">Durban</span> and <span class="underline text-blue-400">Cape Town.</span></p>
                    <p class="text-gray-500 text-sm">Trucks rented with a driver will be dispatched to the required locations. Self-driven vehicles need to be collected at our conveniently located depots. Customers who require a vehicle to be delivered should discuss their delivery requirements with our sales representative.</p>
                    <h1 class="font-semibold text-gray-600 text-lg">Truck Hire Cost</h1>
                    <p class="text-gray-500 text-sm">The cost to rent a truck is dependent on the clients’ transportation requirements. We take various factors into account, such as travel distances, insurance, rental duration, etc.</p>
                    <p class="text-gray-500 text-sm">To get an accurate quote, complete our <span class="underline text-blue-400">online Truck Hire quote request</span> form, and our sales team will contact you with a quote. Alternatively, give us a call on, <span class="underline text-blue-400">{{$store.state.helpers.siteInfo[0].phone}}</span> or email <router-link class="hover:underline text-red-600 font-semibold" :to="`mailto:${ $store.state.helpers.siteInfo[0].email }`">{{$store.state.helpers.siteInfo[0].email}}</router-link></p>
                </div>
            </div>
        </div>
    </form-template>
</template>

<script>
    import FormTemplate from '../templates/FormTemplate.vue'
    import WrapperTemplate from '../templates/WrapperTemplate.vue'
    export default {
        name: 'OnlineQuote',
        components: { 
            FormTemplate,
            WrapperTemplate 
        },
        data() {
            return {
                form: [
                    {
                        title: 'Full Name', variable: '', type: 'text'
                    },
                    {
                        title: 'Contact Number', variable: '', type: 'text'
                    },
                    {
                        title: 'Email Address', variable: '', type: 'email'
                    },
                    {
                        title: 'Province', variable: '', type: 'text'
                    },
                    {
                        title: 'Town', variable: '', type: 'text'
                    },
                    {
                        title: 'Postal Code', variable: '', type: 'text'
                    },
                ],
                selection: [
                    {
                        title: 'Collection Date', variable: '2021-08-31' , type: 'date'
                    },
                    {
                        title: 'Collection Time', variable: '16:00:00', type: 'time'
                    },
                    {
                        title: 'Return Date', variable: '2021-09-01' , type: 'date'
                    },
                    {
                        title: 'Return Time', variable: '16:00:00', type: 'time'
                    },
                ]
            }
        },
        methods: {
            fetchSingleContact: () => {
                const singleContact = this.$store.state.helpers.siteInfo[0];
                return [singleContact.email, singleContact.phone]
            }
        }
    }
</script>