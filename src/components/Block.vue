<template>
<div class="v-block">
    <slot></slot>
</div>
</template>


<style scoped>
.v-block{
    outline: 1px solid #ddd;
    background-color: #fff;
    height: 100px;
    outline:1px solid #00d8ff;
    margin: 10px 0;
    cursor: pointer;
}
</style>

<script>

export default {
    name: 'block',
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
