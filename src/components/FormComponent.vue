<template>
    <div class="p-6 h-full">
        <form class="space-y-6 h-full relative lg:py-5">
            <div >
                <div class="mb-6">
                    <label class="block text-sm font-medium text-gray-700">Photo</label>
                    <div class="mt-1 flex items-center">
                        <span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                            <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </span>
                        <button type="button" class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:border-gray-400 transition duration-200 ease-in focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Change</button>
                    </div>
                </div>
                <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                    <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-3 p-3 border focus:outline-none focus:border-gray-400 transition duration-200 ease-in block w-full sm:text-sm border-gray-200 rounded-md">
                </div>

                <div class="col-span-6 sm:col-span-3">
                    <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
                    <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-3 p-3 border focus:outline-none focus:border-gray-400 transition duration-200 ease-in block w-full sm:text-sm border-gray-200 rounded-md">
                </div>

                <div class="col-span-6 sm:col-span-4">
                    <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                    <input type="text" name="email-address" id="email-address" autocomplete="email" class="mt-3 p-3 border focus:outline-none focus:border-gray-400 transition duration-200 ease-in block w-full sm:text-sm border-gray-200 rounded-md">
                </div>

                <div class="col-span-6 sm:col-span-4">
                    <label for="email-address" class="block text-sm font-medium text-gray-700">Phone</label>
                    <input type="text" name="email-address" id="email-address" autocomplete="email" class="mt-3 p-3 border focus:outline-none focus:border-gray-400 transition duration-200 ease-in block w-full sm:text-sm border-gray-200 rounded-md">
                </div>

                <div class="col-span-6">
                    <label for="street-address" class="block text-sm font-medium text-gray-700">Street address</label>
                    <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="mt-3 p-3 border focus:outline-none focus:border-gray-400 transition duration-200 ease-in block w-full sm:text-sm border-gray-200 rounded-md">
                </div>

                <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label for="city" class="block text-sm font-medium text-gray-700">City</label>
                    <input type="text" name="city" id="city" autocomplete="address-level2" class="mt-3 p-3 border focus:outline-none focus:border-gray-400 transition duration-200 ease-in block w-full sm:text-sm border-gray-200 rounded-md">
                </div>

                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label for="region" class="block text-sm font-medium text-gray-700">Province</label>
                    <input type="text" name="region" id="region" autocomplete="address-level1" class="mt-3 p-3 border focus:outline-none focus:border-gray-400 transition duration-200 ease-in block w-full sm:text-sm border-gray-200 rounded-md">
                </div>

                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label for="postal-code" class="block text-sm font-medium text-gray-700">ZIP / Postal code</label>
                    <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="mt-3 p-3 border focus:outline-none focus:border-gray-400 transition duration-200 ease-in block w-full sm:text-sm border-gray-200 rounded-md">
                </div>
                </div>
            </div>
            <div class="px-4 bottom-0 absolute w-full py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:border-gray-400 transition duration-200 ease-in focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Save
                </button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>