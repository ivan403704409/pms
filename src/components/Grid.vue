<template>
<div class="m-grid" :class="className">
    <slot></slot>
</div>
</template>


<style scoped>
.m-grid{
    outline: 1px solid #ddd;
    background-color: #fff;
    height: 100px;
}
</style>

<script>

export default {
    components: {

    },
    props: {
        col: Boolean,
        rows: {
            type: Number,
            default: 1,
        },
        cols: {
            type: Number,
            default: 0,
        },
    },
    data(){
        return {

        }
    },
    computed: {
        className(){
            let res = []
            if(this.col){
                res = ['f-flex-box auto-width']
            }else{
                res = ['f-flex-box dir-col']
            }
            return res;
        },
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
