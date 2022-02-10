<template>
    <div class="min-h-screen w-full flex">
        <SidebarComponent />
        <div class="flex-grow flex">
            <div class="w-full flex flex-grow flex-col">
                <header class="h-12 flex items-center px-8 border-b" v-if="title">
                    <h1 class="font-semibold text-gray-600 text-md">{{title}}</h1>
                </header>
                <slot name="main"></slot>
            </div>
            <div class="max-w-xl flex flex-col max-h-screen border-l w-full">
                <slot name="side"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    import SidebarComponent from '../components/SidebarComponent.vue'
    export default {
        components: { 
            SidebarComponent 
        },
        name: 'FullScreen',
        props: {
            title: {
                type: String
            },
            side: {
                type: Object
            }
        }
    }
</script>
