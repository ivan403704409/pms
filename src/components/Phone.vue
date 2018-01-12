<template>
  <div id="j-frame" class="m-phone" @mousewheel="mousewheel">
    <div class="screen">
        <div ref="body" class="body">
            <slot></slot>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    mousewheel(ev){
      let $body = this.$refs.body
      let tmp = getComputedStyle($body)['top']
      tmp = tmp === 'auto' ? '0px' : tmp
      let lastT = parseInt(tmp)
      let t = lastT + ev.wheelDelta
      if(t>0)t=0;
      $body.style.top = t + 'px'
    },
  },
}
</script>

<style lang="scss" scoped>
.m-phone{
  position: relative;
  left: calc(50vw - 182.5px);
  width: 375px;
  height: 667px;
  border-width: 20px 12px 50px;
  border-style: solid;
  border-color: #353642;
  border-radius: 20px;
  background-color: #353642;
  box-shadow: 0px 1px 20px #b2dcff;
  .screen{
    position: relative;
    width: 375px;
    height: 667px;
    border-radius: 8px;
    overflow: hidden;
  }
  .body{
    position: relative;
    min-height: 100%;
    height: 20000px;
    background-color: #fff;
    top: 0;
    border-top: 30px solid #353642;
    border-radius: 8px;
  }
  &::before{
      content: '';
      display: block;
      position: absolute;
      z-index: 1;
      left: 50%;
      top: -18px;
      margin-left: -25px;
      width: 50px;
      height: 12px;
      background-color: #3d3e4c;
      border-radius: 8px;
  }
  &::after{
    content: '';
    position: absolute;
    z-index: 1;
    left: 50%;
    bottom: -40px;
    margin-left: -16px;
    width: 32px;
    height: 32px;
    box-shadow: inset 0px 0px 6px #8b9faf;
    border-radius: 50%;
  }
}
</style>
