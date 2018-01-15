
// initial state
const state = {
    id: null,
    config: null,
}

// actions
const actions = {
  updateCurComponent({ commit }, data) {
    commit('updateCurComponent', data)
  },
}

// mutations
const mutations = {
  updateCurComponent(state, { id,　config }) {
    state.id = id
    state.config = config
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}