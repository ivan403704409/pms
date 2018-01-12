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

// 给每个组件添加id
function generateId(pageData) {
    let res = deepClone(pageData)
    res.forEach((item,index) => {
        item.id = index + ''
        addId(item)
    })

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
    return res
}

// 格式化id为数组
function parseId(id){
    let arr = id.split('_')
    arr.forEach((item, index) => {
        if(item!=='children')arr[index] = +item
    })
    return arr
}

// 根据id获取父级和其在父级对应的index
function getParent(id, data) {
    let parent = data
    let aId = parseId(id)
    let len = aId.length
    let index = aId[len-1]
    for(let i=0; i<len-1; i++){
        let id = aId[i]
        parent = parent[id]
    }
    return {
        parent,
        index: aId[len-1]
    }
}

// 根据拖拽id和释放id来改变数据
function change(dragId, dropId, data, targetPos) {
    let { parent, index } = getParent(dragId, data)
    let { parent: parent2, index: index2 } = getParent(dropId, data)

    if(targetPos==='before'){
        // 位置是原来的位置
        if(parent===parent2 && index===index2-1){
            console.log('原来的位置')
            return
        }
        let dragTarget = parent.splice(index, 1)[0]
        parent2.splice(index2, 0, dragTarget)
    }else{
       // 位置是原来的位置
        if(parent===parent2 && index===index2+1){
            console.log('原来的位置')
            return
        }
        let dragTarget = parent.splice(index, 1)[0]
        parent2.splice(index2+1, 0, dragTarget)
    }

    
}

import { mapState, mapActions } from 'vuex'
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
            pageData: generateId(pageData),
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
    computed: {
        ...mapState('drag', {
            dragData: state => state,
            isChange: state => state.isChange,
        }),
        
    },
    watch: {
        isChange(newVal){
            if(newVal){
                // let aTargetId = this.dragData.targetId
                // if(!aTargetId.length){
                //     this.updateSort(false)
                //     return
                // }

                // let dropId = ''
                // if(aTargetId.length==1){
                //     dropId = aTargetId[0]
                // }else{
                //     aTargetId.forEach(item => {
                //         if(item.length > dropId){
                //             dropId = item
                //         }
                //     })
                // }                
                let dropId = this.dragData.targetId
                change(this.dragData.dragId, dropId, this.pageData, this.dragData.targetPos)

                this.pageData = generateId(this.pageData)

                this.updateSort(false)
            }else{

            }
        },
    },
    methods: {
        ...mapActions('drag', ['updateSort']),
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
