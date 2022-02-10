<template>
    <div class="flex items-center justify-center pt-10 mb-4">
        <button :class="`${y} rounded-l`" type="button">
            <svg xmlns="http://www.w3.org/2000/svg"  class="fill-current w-4 h-4 text-gray-50" fill="none" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg>
        </button>
        <button :class="y" type="button">1</button>
        <button :class="y" type="button">2</button>
        <button :class="y" type="button">3</button>
        <button :class="`${y} rounded-r`" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"  class="fill-current w-4 h-4 text-gray-50" ><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'Pagination',
        data() {
            return {
                y: 'bg-gray-500 text-white hover:bg-gray-600 hover:text-white active:bg-gray-600 font-bold uppercase text-xs px-5 py-4 outline-none focus:outline-none ease-linear transition-all duration-150'
            }
        },
    }
</script>
