<template>
<div class="v-container">
    <!-- 按列数循环 -->
    <div　class="f-flex-box flex-item auto-width flex-wrap align-strech">
        <div class="col flex-item" :class="{ placeholder: !group.length }" v-for="(group, index) in children">
            <template v-if="group.length">
                <unit :config="component"　v-for="(component, index2) in group"></unit>
            </template>
            <empty :id="id + '_children_' + index" v-else></empty>
        </div>
    </div>
</div>
</template>


<script>
import widgets from '@/widgets'
import unit from './unit.vue'
import empty from './empty.vue'
export default {
    components: {
        unit,
        empty,
    },
    props: {
        col: {
            type: Number,
            default: 1,
        },
        children: Array,
        id: String,
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