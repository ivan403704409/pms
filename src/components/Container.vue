<template>
<div class="v-container">
    <!-- 按列数循环 -->
    <div　class="f-flex-box flex-item auto-width flex-wrap align-strech">
        <div class="col flex-item" :class="{ placeholder: !group.length }" v-for="(group, index) in children">
            <template v-for="(component, index2) in group" v-if="group.length">
                <unit :config="component"></unit>
            </template>
        </div>
    </div>
</div>
</template>


<style lang="scss" scoped>
.col{
    &.placeholder::after{
        display: flex;
        align-self: stretch;
        align-items: center;
        justify-content: center;
        content: 'Empty';
        color: #bababa;
        width: 100%;
        min-height: 5em;
        background-color: rgba(144,145,153,0.125);
        border: dashed 1px rgba(144,145,153,0.5);
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 0.8rem;
        pointer-events: none;
    }
}
</style>

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
import unit from '@/views/workspace/unit.vue'
import widgets from '@/widgets'
export default {
    components: {
        unit,
    },
    props: {
        col: {
            type: Number,
            default: 1,
        },
        children: Array,
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
