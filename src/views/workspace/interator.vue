<template>
<component class="f-flex-box auto-width flex-wrap align-strech flex-item" :data-type="config.type" v-bind="config.data" :is="widgets[config.type]" >
    <!-- 如果是containter,处理列数 -->
    <template v-if="config.type=='container'">
        <!-- 没有列数 -->
        <template  v-if="config.children.length==1">
            <!-- 如果有子集，则继续递归 -->
            <interator :config="config.children[0]" v-if="config.children[0].children.length"></interator>
            <!-- 否则直接渲染当前组件 -->
            <component :data-type="config.children[0].type" v-bind="config.children[0].data" :is="widgets[config.children[0].type]" v-else>
            </component>
        </template>
        <!-- 按列数循环 -->
        <draggable v-model="config.children" :options="{ animation: 150 }"　class="f-flex-box flex-item auto-width flex-wrap align-strech" v-else>
            <div class="col flex-item" v-for="(box, index) in config.children">
                <template  v-if="!box.length">
                    <div>Empty</div>
                </template>
                 <draggable v-model="config.children[index]" v-else>
                    <template v-for="(item, index2) in box">
                        <!-- 如果有子集，则继续递归 -->
                        <interator :config="item" v-if="item.children"></interator>
                        <!-- 否则直接渲染当前组件 -->
                        <component :data-type="item.type" v-bind="item.data" :is="widgets[item.type]" v-else>
                        </component>
                    </template>
                 </draggable>
            </div>
        </draggable>
    </template>
</component>
</template>

<script>
import draggable from 'vuedraggable'
import widgets from '@/widgets'
export default {
    name: 'interator',
    components:{
        draggable,
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