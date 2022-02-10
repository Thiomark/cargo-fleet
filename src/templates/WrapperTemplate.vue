<template>
    <div>
        <div :class="conditions(container, x, y)" class="">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Wrapper',
        props: {
            container: {
                type: Boolean
            },
            y: {
                type: Number
            },
            x: {
                type: Number
            }
        },
        methods: {
            conditions: (container, x, y) => `${container && 'container mx-auto'} ${x && 'px-' + x } ${y && 'py-' + y}`,
        }
    }
</script>

<style lang="scss" scoped>

</style>