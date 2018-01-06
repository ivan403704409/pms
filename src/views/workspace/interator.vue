<template>
<component :data-type="config.type" v-bind="config.data" :is="widgets[config.type]">
    <!-- 如果是containter,处理列数 -->
    <template v-if="config.type=='container'">
        <div　class="f-flex-box flex-wrap align-strech" v-if="config.data.col>1">
            <!-- 按列数循环 -->
            <div class="col" v-for="(num, index) in config.data.col">
                <template v-if="curItem(index)">
                    <!-- 如果有子集，则继续递归 -->
                    <interator :config="curItem(index)" v-if="curItem(index).children"></interator>
                    <!-- 否则直接渲染当前组件 -->
                    <component :data-type="curItem(index).type" v-bind="curItem(index).data" :is="widgets[curItem(index).type]" v-else>
                        <interator :config="curItem(index)" v-if="curItem(index).children">
                        </interator>
                    </component>
                </template>
                <template v-else>
                    <div>Empty</div>
                </template>
            </div>
        </div>
        <!-- <div v-else> -->
            <!-- 按列数循环 -->
            <template v-for="(item, index) in config.children" v-else>
                <template v-if="curItem(index)">
                    <!-- 如果有子集，则继续递归 -->
                    <interator :config="curItem(index)" v-if="curItem(index).children"></interator>
                    <!-- 否则直接渲染当前组件 -->
                    <component :data-type="curItem(index).type" v-bind="curItem(index).data" :is="widgets[curItem(index).type]" v-else>
                        <interator :config="curItem(index)" v-if="curItem(index).children">
                        </interator>
                    </component>
                </template>
                <template v-else>
                    <div>Empty</div>
                </template>
            </template>
        <!-- </div> -->
    </template>
    <!--　非container -->
    <template v-else>
        <component :data-type="item.type" v-bind="item.data" :is="widgets[item.type]" v-for="item in config.children">
            <interator :config="item" v-if="item.children">
            </interator>
        </component>
    </template>
    
</component>
</template>

<script>
import widgets from '@/widgets'
export default {
    name: 'interator',
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