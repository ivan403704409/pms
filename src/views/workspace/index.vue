<template>
<div class="m-page" id="--id">
    <draggable v-model="pageData">
        <!-- <transition-group> -->
            <interator :config="item" v-for="(item, index) in pageData" ></interator>
        <!-- </transition-group> -->
    </draggable>
</div>

</template>

<script>
import draggable from 'vuedraggable'
import widgets from '@/widgets'
import Phone from '@/components/Phone.vue'
import interator from './interator.vue'

var button = {
    type: 'vButton',
    data: {
        value: 'button',
        styles: {
            'font-size': '12px',
            'text-align': 'center',
        },
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
    children: [
        [component],
        [],
        []
    ]
}
var container3 = {
    type: 'container',
    children: [
        [component],
        [],
    ]
}
var container2 = {
    type: 'container',
    children: [
        [component],
        [component],
        [container3, component, container]
    ]
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

// import interator from './interator.js'
export default {
    name: 'workspace',
    components: {
        draggable,
        Phone,
        interator,
    },
    data() {
        return {
            widgets,
            // blocks
            pageData: [
                container2,
                button,
                // container,
                // component,
                // block,
            ],
            components: [{
                type: 'vText',
                data: {
                    value: '1235'
                }
            }, {
                type: 'vButton',
                data: {
                    value: 'button'
                }
            }, ],
        }
    },
    methods: {
        addComponent() {
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
