<template>
<div class="v-container" @mousedown.stop="mousedown">
    <slot></slot>
</div>
</template>


<style scoped>
.v-container{
    padding: 20px;
    outline: 1px solid #ddd;
    background-color: #fff;
    min-height: 100px;
    user-select: none;
    outline:1px dashed blue;
    cursor: pointer;
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
        // data: Array,
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
        mousedown(ev){
            // let target = ev.srcElement;
            // this.last = {
            //     x: ev.clientX,
            //     y: ev.clientY,
            // }
            // document.addEventListener('mousemove', this.mousemove, false)
            // document.addEventListener('mouseup', this.mouseup, false)
        },
        mousemove(ev){
            let target = ev.srcElement;
            let { clientX: x, clientY: y } = ev
            let disX = x- this.last.x
            let disY = y -this.last.y
            this.$el.style.transform = `translate3d(${disX}px, ${disY}px,0)`
        },
        mouseup(ev){
            this.$el.style.transform = `none`
            document.removeEventListener('mousemove', this.mousemove, false)
            document.removeEventListener('mouseup', this.mouseup, false)
        },
    },

}    
</script>
