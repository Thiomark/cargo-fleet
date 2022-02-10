<template>
    <div class="max-h-screen h-full flex flex-col">
        <div class="px-4 py-5 sm:px-6 border-b">
            <h3 class="text-lg leading-6 font-medium text-gray-900">{{side.title}}</h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">{{side.subTitle}}</p>
        </div>
        <div class="flex-grow">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Side',
        props: {
            side: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>