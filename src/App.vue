<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'App',

    }
</script>

<style>

    html {
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        word-spacing: 1px;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
        background-color: white;
    }
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        
    }
</style>
