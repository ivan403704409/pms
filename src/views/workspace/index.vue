<template>
<div class="m-page f-flex-box">
    <phone>
        <interator :config="item" v-for="(item, index) in pageData" ></interator>
    </phone>
</div>

</template>

<script>
import widgets from '@/widgets'
import Phone from '@/components/Phone.vue'
import interator from './interator.vue'

var button = {
    type: 'vButton',
    block: 'inline-block',
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
        [deepClone(component)],
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
        [deepClone(component), deepClone(component), deepClone(component)],
        [deepClone(component)],
        [container3, deepClone(component), container]
    ]
}

function deepClone(data) {
    return JSON.parse(JSON.stringify(data))
}

let pageData = [
    container2,
    button,
]

function fn(pageData) {
    pageData.forEach((item,index) => {
        item.id = index
        addId(item)
    })
}
function addId(data) {
    if(!data.children)return
    let pId = data.id
    data.children.forEach(function (arr, index){
        arr.forEach(function (component, index2) {
            component.id = `${pId}_children_${index}_${index2}`
            addId(component);
        })
    })    
}

fn(pageData)
console.log(JSON.stringify(pageData))
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
        Phone,
        interator,
    },
    data() {
        return {
            widgets,
            // blocks
            pageData,
            // pageData: [
            //     container2,
            //     button,
            //     // container,
            //     // component,
            //     // block,
            // ],
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
