<template>
<div class="v-text">
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
.v-text{
    touch-action: none;
}
</style>