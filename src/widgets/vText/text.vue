<template>
<div class="m-page">
    {{value}}
</div>
</template>

<script>

export default {
    components: {

    },
    props: {
        value: String,
    },
    data(){
        return {

        }
    },
    computed: {

    },
    methods: {

    },
    // mounted(){

    // },
    // beforeRouteEnter(to, from, next){
    //     next( => {
    //     })
    // },
    // beforeRouteLeave(to, from, next){
    //     next()
    // }
}    
</script>

<style scoped lang="scss">
.m-page{
    touch-action: none;
}
</style>