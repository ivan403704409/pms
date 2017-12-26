<template>
  <div id="j-frame" class="m-frame">
      <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.m-frame{
  position: relative;
  width: 375px;
  height: 667px;
  background-color: #e8e8e8;
}
.m-frame > * {
  position: absolute;
}
</style>
