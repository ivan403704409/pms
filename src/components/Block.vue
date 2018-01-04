<template>
<div class="m-block">
    <slot></slot>
</div>
</template>


<style scoped>
.m-block{
    outline: 1px solid #ddd;
    background-color: #fff;
    height: 100px;
    outline:1px solid #00d8ff;
    margin: 10px 0;
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
}    
</script>
