<template>
<div class="v-container">
    <slot></slot>
</div>
</template>


<style scoped>
.v-container{
    outline: 1px solid #ddd;
    background-color: #fff;
    height: 100px;
    user-select: none;
    outline:1px dashed blue;
    cursor: pointer;
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
