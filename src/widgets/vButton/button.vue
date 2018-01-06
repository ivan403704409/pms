<template>
<div class="v-button" :style="customStyle">
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
            customStyle: {
                'font-size': '12px',
                'text-align': 'center',
                // 'height': '88px',
                // 'line-height': '88px',
                'border-radius': '8px',
                'background': '#03A9F4',
                'padding': '10px 12px',
                'color': '#fff',
            },
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
    display: inline-block;
    touch-action: none;
    cursor: pointer;
    &:active{
        opacity: .7;
    }
}
</style>