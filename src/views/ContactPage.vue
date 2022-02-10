<template>
    <form-template>
        <form >
            <div style="grid-template-columns: 2fr 1fr" class="xl:grid gap-6">
                <div>
                    <h1 class="font-bold text-xl text-gray-600 mt-6">{{ $route.path === '/contact' ? 'Enquiry Form' : 'Request a Quote'}}</h1>
                    <p v-if="$route.path === '/contact'" class="text-gray-500 text-sm mt-4">For general enquiries, please complete the form below. For vehicle rental quote requests, please visit our <router-link to="/online-quote" class="text-red-500 underline hover:text-red-600">Online Quote page</router-link>. </p>
                    <hr class="mt-6">
                    <div class="w-full pt-4">
                        <div class="mt-4">
                            <div class="items-center md:grid grid-cols-2 gap-6">
                                <div v-for="(x, i) in form" :key="i" class="w-full">
                                    <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">{{x.title}}</label>
                                    <input :required="false" v-model="x.varible" class="w-full block px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" :type="x.type">
                                </div>
                            </div>

                            <div class="w-full mt-4">
                                <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Enquiry</label>
                                <textarea placeholder="Enquiry Details..." class="block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-2">
                    <iframe v-if="$route.path === '/contact'" class="w-full h-full py-4 mt-6 rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5685.44524905782!2d28.032340654467266!3d-26.144385775869637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c92f2c40d13%3A0x7463dc372a25eb5d!2sRosebank%2C%20Johannesburg%2C%202196!5e0!3m2!1sen!2sza!4v1636359335502!5m2!1sen!2sza"  style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
            <div class="flex items-center mt-6">
                <button class="px-8 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Submit</button>
            </div>
        </form>
    </form-template>
</template>

<script>
    import FormTemplate from '../templates/FormTemplate.vue'
    import WrapperTemplate from '../templates/WrapperTemplate.vue'
    export default {
        name: 'Contact',
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
                    }
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