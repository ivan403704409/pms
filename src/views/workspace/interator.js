import Vue from 'vue'

import draggable from 'vuedraggable'
import widgets from '@/widgets'
Vue.component('interator', {
    name: 'interator',
    props: {
        config: Object,
    },
    render (h) { // <-- h must be in scope
        let comp = widgets[this.config.type]
        let config = this.config
        return (
            <component vBind={config.data} is={widgets[config.type]}>
                
            </component>
        )
    }
})