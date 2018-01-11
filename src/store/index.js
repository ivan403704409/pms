import Vue from 'vue'
import Vuex from 'vuex'
import drag from './modules/drag'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    drag,
  },
  strict: debug,
})