<template>
<div class="v-button" :style="styles">
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
.v-button{
    touch-action: none;
}
</style>