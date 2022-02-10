<template>
    <container-screen>
        <wrapper-template :container="true" :x="6" class="py-6 lg:py-16">
            <h2 class="text-3xl font-semibold hidden text-center text-gray-800 dark:text-white">Get in touch</h2>
            <p class="mt-3 text-center hidden text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <div class="flex flex-col-reverse md:block">
                <div class="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
                    <p class="flex flex-col items-center px-4 py-6 text-gray-700 rounded-md dark:text-gray-200 bg-gray-100 hover:bg-gray-200">
                        <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>

                        <span class="mt-2">{{ $store.state.helpers.siteInfo[0].phone }}</span>
                    </p>

                    <p class="flex flex-col items-center px-4 py-6 text-gray-700 rounded-md dark:text-gray-200 bg-gray-100 hover:bg-gray-200">
                        <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>

                        <span class="mt-2">{{ $store.state.helpers.siteInfo[0].email }}</span>
                    </p>

                    <p class="flex flex-col items-center px-4 py-6 text-gray-700 rounded-md dark:text-gray-200 bg-gray-100 hover:bg-gray-200">
                        <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                        </svg>

                        <span class="mt-2">121 Street, Braamfontein</span>
                    </p>
                </div>
                <slot ></slot>
            </div>
        </wrapper-template>
    </container-screen>
</template>

<script>
    import ContainerScreen from './ContainerScreen.vue'
    import WrapperTemplate from './WrapperTemplate.vue'
    export default {
        name: 'FormTemplate',
        components: { 
            ContainerScreen,
            WrapperTemplate 
        },
    }
</script>