<template>
<div class="m-page">
    <template v-for="item in pageData">
        <component v-bind="item.data" :is="widgets[item.type]">
            <template v-for="item2 in item.children">
                <component v-bind="item2.data" :is="widgets[item2.type]">
                    <template v-for="item3 in item2.children">
                        <component v-bind="item3.data" :is="widgets[item3.type]">
                        </component>
                    </template>
                </component>
            </template>
        </component>
    </template>
</div>

</template>

<script>
import widgets from '@/widgets'
import Phone from '@/components/Phone.vue'
import Item from '@/components/Item.vue'
import Block from '@/components/Block.vue'
import Container from '@/components/Container.vue'

var button = {
    type: 'vButton',
    data: {
        value: 'button',
    }
}
var component = {
    type: 'vText',
    data: {
        value: '1',
    }
}

var container = {
    type: 'container',
    data: {
        col: 3,
    },
    children: [component]
}

var block = {
        type: 'block',
        data: {
            style: {

            }
        },
        children: [
            container,
            component,
            container,
        ]
    }

export default {
  name: 'workspace',
  components:{
    Phone,
    Item,
    Block,
    Container,
  },
  data () {
    return {
        widgets,
        // blocks
        pageData: [
            button,
            component,
            container,
            block,
        ],
        components: [
            { type: 'vText', data: { value: '1235' } },
            { type: 'vButton', data: { value: 'button' } },
        ],
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
