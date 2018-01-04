<template>
<div class="m-container">
    <slot></slot>
</div>
</template>


<style scoped>
.m-container{
    outline: 1px solid #ddd;
    background-color: #fff;
    height: 100px;
    user-select: none;
    outline:1px dashed blue;
}
</style>

<script>
import widgets from '@/widgets'
export default {
    props: {
        components: Array,
        col: {
            type: Number,
            default: 1,
        },
        // data: Array,
    },
    data(){
        return {
            widgets,
        }
        
    },

}    
</script>
