<template>
<div class="v-empty"　:class="{dropTarget: isDropTarget}" :data-id="id">
    Empty
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
// 获取两个元素相交区域面积
function getCutArea(mouse, point){
    let { x, y } = mouse
    let { l, t, w, h } = point

    if(
        x<l ||
        y<t ||
        x>l+w ||
        y>t+h
        ){
        return false
    }
    let isTop = y>(t+h/2) ? false : true
    return {
        isTop
    }
}

export default {
    components: {

    },
    props: {
        id: String,
    },
    data(){
        return {
            isHover: false,
        }
    },
    computed: {
        ...mapState('drag', {
            isDragging: 'isDragging',
            point: 'point',
            dragConfig: state => state.config,
            drag: state => state,
        }),
        isDropTarget(){
            // 还没有dom　或　没开始拖
            if(!this.isDragging || !this.$el)return false;

            let selfId = this.id
            let dragId = this.dragConfig.id
            
            //　如果自己是拖拽的元素的子元素，则不用检查
            let reg = new RegExp('\^' + dragId)
            if(reg.test(selfId))return false;

            //　获取自己的位置信息
            let tmp = this.$el.getBoundingClientRect()
            let point2 = {
                l: tmp.left,
                t: tmp.top,
                w: tmp.width,
                h: tmp.height,
            }
                
            // 判断是否有碰撞
            // let area = getCutArea(this.point, point2)
            // if(!area)return false
            return getCutArea(this.point, point2)
        },
    },
    watch:{
        isDropTarget(newVal){
            if(newVal){
                this.updateTargetId({id: this.id, targetPos: 'inner' })
            }else{
                this.updateTargetId({id: this.id, targetPos: 'inner', remove: true})
            }
        }
    },
    mounted(){

    },
    methods: {
        ...mapActions('drag', ['updateTargetId']),
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
.v-empty{
    display: flex;
    align-self: stretch;
    align-items: center;
    justify-content: center;
    content: 'Empty';
    color: #bababa;
    width: 100%;
    min-height: 5em;
    background-color: rgba(144,145,153,0.125);
    border: dotted 1px rgba(144,145,153,0.5);
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.8rem;
    pointer-events: none;
    &.dropTarget{
        border: none;
        box-shadow: inset 0 0 0 4px #33ada9;
    }
}
</style>
