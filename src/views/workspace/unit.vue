<template>
<div class="v-component-wrapper" :class="className" @mouseover.stop="mouseover"  @mouseout.stop="mouseout" v-drag="config">
    <component class="v-component" :class="className2" :data-type="config.type" v-bind="config.data" :is="widgets[config.type]" >
        <slot></slot>
    </component>
    <div class="tips">{{config.type}}</div>
</div>
</template>

<script>
import { mapState } from 'vuex'
import widgets from '@/widgets'

// 获取两个元素相交区域面积
function getCutArea(p1, p2){
    let { l: l1, t: t1, w: w1, h: h1 } = p1
    let { l: l2, t: t2, w: w2, h: h2 } = p2

    if( l1+w1 < l2 
        || t1+h1 < t2 
        || l2+w2 < l1 
        || t2+h2 < t1
    ){
        return 0
    }
    let w = l1<l2 ? (l1+w1-l2) : (l2+w2-l1)
    let h = t1<t2 ? (t1+h1-t2) : (t2+h2-t1)
    let isTop = t1>(t2+h2/2) ? false : true
    return {
        area: w*h,
        isTop,
    }

}

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
        ...mapState('drag', {
            isDragging: 'isDragging',
            point: 'point',
            dragConfig: state => state.config,
        }),
        className(){
            let res = []
            if(this.isHover)res.push('hover')
            if(this.config.block==='inline-block')res.push('inline-block')

            if(!this.isDragging || !this.$el)return res;
            let tmp = this.$el.getBoundingClientRect()
            let point2 = {
                l: tmp.left,
                t: tmp.top,
                w: tmp.width,
                h: tmp.height,
            }
            if( getCutArea(this.point, point2) ){
                res.push('isDropTarget')
                res.push('before')
            }


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

<style lang="scss" >

</style>
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
    &.isDropTarget.before::before{
        content: "";
        position: absolute;
        z-index: 2;
        left: 0;
        top: -4px;
        width: 100%;
        height: 4px;
        background-color: $color-tips;
    }
    &[data-draging]::before{
        display: none;
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