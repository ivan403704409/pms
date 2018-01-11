<template>
<div class="v-component-wrapper" :class="className" @mouseover.stop="mouseover"  @mouseout.stop="mouseout" v-drag>
    <component class="v-component" :class="className2" :data-type="config.type" v-bind="config.data" :is="widgets[config.type]" >
        <slot></slot>
    </component>
    <div class="tips">{{config.type}}</div>
</div>
</template>

<script>
import widgets from '@/widgets'
export default {
    components: {

    },
    props: {
        config: Object,
    },
    data(){
        return {
            widgets,
            isHover: false,
        }
    },
    computed: {
        className(){
            let res = []
            if(this.isHover)res.push('hover');
            if(this.config.block==='inline-block')res.push('inline-block');
            return res
        },
        className2(){
            if(this.config && this.config.children && this.config.children.length>1){
                return ['f-flex-box', 'auto-width', 'flex-wrap', 'align-strech', 'flex-item', ]
            }
            return []
        },
    },
    mounted(){

    },
    methods: {
        mouseover(ev){
            this.isHover = true
        },
        mouseout(ev){
            this.isHover = false
        },
    },
    // mounted(){

    // },
    // beforeRouteEnter(to, from, next){
    //     next( => {
    //     })
    // },
    // beforeRouteLeave(to, from, next){
    //     next()
    // }
}    
</script>

<style scoped lang="scss">
$color-tips: #33ada9;
.v-component-wrapper{
    position: relative;
    // min-height: 100px;
    background-color: #fff;
    cursor: pointer;
    user-select: none;
    &.inline-block{
        display: inline-block;
    }
    &.put::before{
        content: "";
        position: absolute;
        z-index: 2;
        left: 0;
        top: -4px;
        width: 100%;
        height: 4px;
        background-color: $color-tips;
    }
    .tips{
        display: none;
    }
    &.hover{
        outline:1px dashed $color-tips;
        z-index: 3;
        > .tips{
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            transform: translateY(-100%);
            color: $color-tips;
        }
    }
    
}
</style>