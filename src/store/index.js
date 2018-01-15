import Vue from 'vue'
import Vuex from 'vuex'
import drag from './modules/drag'
import curComponent from './modules/curComponent'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    drag,
    curComponent,
  },
  strict: debug,
})