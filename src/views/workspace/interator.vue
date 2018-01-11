<template>
<unit :config="config">
    <!-- 如果是containter,处理列数 -->
    <template v-if="config.type=='container'">
        <!-- 没有列数 -->
        <template  v-if="config.children.length==1">
            <!-- 如果有子集，则继续递归 -->
            <template v-for="(item, index) in config.children[0]" v-if="config.children[0].length">
                <!-- 如果有子集，则继续递归 -->
                <interator :config="item" v-if="item.children"></interator>
                <!-- 否则直接渲染当前组件 -->
                <unit :config="item" v-else></unit>
            </template>
            <!-- 否则直接渲染当前组件 -->
            <unit :config="config.children[0].data" v-else></unit>
        </template>
        <!-- 按列数循环 -->
        <div　class="f-flex-box flex-item auto-width flex-wrap align-strech" v-else>
            <div class="col flex-item" :class="{ placeholder: !box.length }" v-for="(box, index) in config.children">
                <template v-for="(item, index2) in box" v-if="box.length">
                    <!-- 如果有子集，则继续递归 -->
                    <interator :config="item" v-if="item.children"></interator>
                    <!-- 否则直接渲染当前组件 -->
                    <unit :config="item" v-else></unit>
                </template>
            </div>
        </div>
    </template>
</unit>
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

<script>
import widgets from '@/widgets'
import unit from './unit.vue'
export default {
    name: 'interator',
    components:{
        unit,
    },
    props: {
        config: Object,
    },
    data() {
        return {
            widgets,
        }
    },
    methods:{
        curItem(index){
            return  this.config.children[index]
        },
    },
}
</script>