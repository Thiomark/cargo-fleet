<template>
    <div class="container py-10 pt-24 lg:pt-36 lg:px-0 px-6 mx-auto lg:flex justify-center flex-col">
        <div class="grid gap-8 md:gap-6 sm:grid-cols-2 lg:gap-x-14 lg:grid-cols-3 xl:grid-cols-4 ">
            <div class="p-2 space-y-2" v-for="(item, index) in items" :key="index">
                <div >
                    <div class="h-44 bg-center bg-no-repeat w-full" :style="{ background: `url('${item.image}')`}" ></div>
                    <h1 class="font-bold hidden mt-6 text-gray-900 text-xl pb-3">{{item.title}}</h1>
                    <p class=" text-sm mt-4 text-gray-500">{{item.paragraph}}</p>
                </div>
                <div>
                    <router-link class="text-blue-500 hover:underline text-sm font-semibold" to="/about">More</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'GroupSixTemp',
        data() {
            return {
                items: [
                    {
                        image: 'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&h=750&w=260',
                        title: 'Static and dynamic headers',
                        paragraph: `${this.$store.state.helpers.siteName} Full Maintenance Leasing ensures that clients no longer have to worry about vehicle maintenance, running costs and any other cost involved in owning vehicles.`
                    },
                    {
                        image: 'https://images.pexels.com/photos/9716369/pexels-photo-9716369.jpeg?auto=compress&cs=tinysrgb&h=750&w=260',
                        title: 'Static and dynamic headers',
                        paragraph: `${this.$store.state.helpers.siteName} offers a wide range of materials handling equipment. We provide excellent technical support, thereby ensuring a hands-on, proactive approach.`
                    },
                    {
                        image: 'https://images.pexels.com/photos/2226457/pexels-photo-2226457.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200',
                        title: 'Static and dynamic headers',
                        paragraph: `${this.$store.state.helpers.siteName} offers customised vehicles that are specially equipped to service the film industry with their production of commercials, documentaries, feature films and stills`
                    },
                    {
                        image: 'https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&h=750&w=260',
                        title: 'Static and dynamic headers',
                        paragraph: `${this.$store.state.helpers.siteName} has established itself in South Africa as a market leader in the industry and is always ready to go the extra mile for its clients`
                    }
                ]
            }
        },
    }
</script>

<style  scoped>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;400;600&display=swap');

    h1, p {
        font-family: 'Inter', sans-serif;
    }
</style>