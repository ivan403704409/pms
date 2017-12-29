<template>
<!-- <div>
  <vue-drr :w='180' :h='180' :r='0' :rotatable='false' v-on:change="showchange">
    I can be dragged anywhere
  </vue-drr>
</div> -->
<!-- https://github.com/taye/interact.js -->
  <div style="position: absolute; background-color: #fff;" class="m-item" v-resize="onResize">
      <slot></slot>
  </div>
</template>

<script>

import resize from 'vue-resize-directive'

// import VueDRR from 'vue-drag-resize-rotate'
export default {

  directives: {
    resize
  },
  // components: {
  //   'vue-drr': VueDRR
  // },

  props: {

  },
  data () {
    return {
      resizeCount: 0,
    }
  },
  methods: {
    onResize () {
      this.resizeCount++;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.m-item{
  position: absolute!important;
}
</style>
