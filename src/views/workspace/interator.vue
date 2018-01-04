<template>
<component :data-type="config.type" v-bind="config.data" :is="widgets[config.type]">
    <!-- 如果是containter,处理列数 -->
    <template v-if="config.type=='container' && config.data.col>1">
        <div　class="f-flex-box flex-wrap align-strech">
            <div class="col" v-for="(item, index) in config.data.col">
                <template v-if="config.children[index]">
                    <component :data-type="config.children[index].type" v-bind="config.children[index].data" :is="widgets[config.children[index].type]">
                        <interator :config="config.children[index]" v-if="config.children[index].children">
                        </interator>
                    </component>
                </template>
                <template v-else>
                    <div>Empty</div>
                </template>
            </div>
        </div>
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
}
</script>