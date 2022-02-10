<template>
   <div class="w-full flex bg-center bg-cover" style="min-height: 70vh; background-image: url(https://images.pexels.com/photos/172074/pexels-photo-172074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);">
        <div class="container mx-auto flex-grow flex items-center">
            <form class="max-w-md md:ml-10 mx-6 space-y-3 rounded-lg bg-gray-50 shadow-md px-6 py-10 md:px-10">
                <input required class="px-6 border w-full rounded-lg py-3 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent" type="text" name="collection address" placeholder="What is the collection address" aria-label="What is the collection address">
                <input required class="px-6 border w-full rounded-lg py-3 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent" type="text" name="delivery address" placeholder="What is the delivery address" aria-label="What is the delivery address">
                <input required class="px-6 border w-full rounded-lg py-3 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent" type="email" name="email" placeholder="Email address" aria-label="Email Address">
                <div class="grid grid-cols-3 space-x-3">
                    <input required class="px-6 col-span-2 border w-full rounded-lg py-3 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent" type="text" name="email" placeholder="Cargo weight (in kg)" aria-label="cargo weight (in kg)">
                    <button class="px-4 py-3 rounded-lg text-sm font-medium text-gray-100 uppercase transition-colors duration-200 transform bg-gray-700 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">Send</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Landing',
        data() {
            return {
                images: [
                    'https://images.pexels.com/photos/172074/pexels-photo-172074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                    'https://images.pexels.com/photos/172074/pexels-photo-172074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                    'https://images.pexels.com/photos/172074/pexels-photo-172074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>