<template>
  <div class="hello">
      <button @click="addComponent">Add</button>
      <phone>
          <item v-for="item in cps">
            <img src="../assets/logo.png">
          </item>
      </phone>
  </div>
</template>

<script>
import Phone from './Phone.vue'
import Item from './Item.vue'
export default {
  name: 'HelloWorld',
  components:{
    Phone,
    Item,
  },
  data () {
    return {
      cps: [],
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    addComponent(){
      this.cps.push({})
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
