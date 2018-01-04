<template>
<div class="m-page" :style="styles">
    {{value}}
</div>
</template>

<script>

export default {
    name: 'vButton',
    components: {

    },
    props: {
        styles: {
            type: Object,
            default(){
                return {}
            },
        },
        value: String,
    },
    data(){
        return {
            config: [
                '',
            ]
        }
    },
    computed: {

    },
    methods: {

    },
}    
</script>

<style scoped lang="scss">
.m-page{
    touch-action: none;
}
</style>