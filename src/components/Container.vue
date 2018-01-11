<template>
<div class="v-container">
    <slot></slot>
</div>
</template>


<style lang="scss">
.v-container{
    & > .v-component-wrapper > .v-component, & .f-flex-box > .col > .v-component-wrapper > .v-component{
        margin-top: 12px;
        margin-bottom: 12px;
    }
    & > .v-component-wrapper:first-of-type > .v-component,
    & .f-flex-box > .col > .v-component-wrapper:first-of-type > .v-component {
        margin-top: 0;
    }

    & > .v-component-wrapper:last-of-type > .v-component,
    & .f-flex-box > .col > .v-component-wrapper:last-of-type > .v-component {
        margin-bottom: 0;
    }
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
