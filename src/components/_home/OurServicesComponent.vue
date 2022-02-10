<template>
    <div class="_group_six_temp py-16 container xl:px-10 px-6 mx-auto lg:py-32 lg:flex justify-center flex-col">
        <h1 class="font-bold lg:pb-10 text-center text-gray-900 text-5xl pb-4">{{title}}</h1>
        <p class="text-md lg:pb-10 max-w-5xl mx-auto text-center text-gray-500 pb-8">{{paragraph}}</p>
        <hr class="w-full hidden lg:block max-w-lg mx-auto">
        <div class="grid lg:pt-20 text-center lg:text-left md:16 gap-6 md:grid-cols-2 lg:gap-x-14 lg:grid-cols-3 ">
            <div class="p-2" v-for="(item, index) in items" :key="index">
                <h1 class="font-bold text-gray-900 text-xl pb-3">{{item.title}}</h1>
                <p class=" text-sm text-gray-500">{{item.paragraph}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OurServices',
        data() {
            return {
                ss: '<h1>hh</h1>',
                title: 'Reasons to Choose Us',
                paragraph: 'Make the Smart Choice and Rent a Truck from us',
                items: [
                    {
                        title: 'Trusted Rental Services',
                        paragraph: 'At Smart Truck Hire, we take extreme pride in our fleet and make sure that our vehicles are regularly maintained and serviced at our premises. All vehicles pass a rigorous inspection before they leave out depot on any rental'
                    },
                    {
                        title: 'Additional Services',
                        paragraph: 'To ensure that our clients do not lose valuable resources, we provide the option of renting our vehicle along with an experienced driver. Also, an assistant can be hired along with our drivers to take care of the loading and off-loading of the vehicle'
                    },
                    {
                        title: 'Flexible Solutions',
                        paragraph: ' We provide customers with Cost-Effective, Custom and Convenient vehicle rental solutions.  Our flexible ad-hoc rental periods include daily, weekly and monthly. We also proudly offer Full Maintenance Rental for long term and fleet requirements.'
                    },
                    {
                        title: 'Vehicle Configurations',
                        paragraph: 'We have a wide range of clean, carefully maintained and reliable vehicles to meet your transportation requirements. From half-ton Bakkies to 15-ton rigid Trucks, we have a transportation solution for you!'
                    },
                    {
                        title: 'High Service Levels',
                        paragraph: 'Quality services levels are critical to our team at Smart Truck Hire. We ensure that every interaction with us from the first interaction right through till the vehicle is returned is Efficient, Helpful and Reliable.'
                    },
                    {
                        title: 'Additional Services',
                        paragraph: 'To ensure that our clients do not lose valuable resources, we provide the option of renting our vehicle along with an experienced driver. Also, an assistant can be hired along with our drivers to take care of the loading and off-loading of the vehicle.'
                    }
                ]
            }
        },
    }
</script>

<style  scoped>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;400;600&display=swap');

    ._group_six_temp {
        min-height: 80vh;
    }
    ._group_six_temp h1, p {
        font-family: 'Inter', sans-serif;
    }
</style>