<template>
<div class="v-container">
    <slot></slot>
</div>
</template>


<style scoped>
.v-container{
    padding: 20px;
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
    },
    data(){
        return {
            widgets,
            last: {
                x: 0,
                y: 0,
            },
        }
        
    },
    methods: {
        
    },

}    
</script>
