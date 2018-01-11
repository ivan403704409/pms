
// initial state
const state = {
    isDragging: false,
    point: null,
    config: null,
}

// actions
const actions = {
  updatePoint({ commit }, data) {
    commit('updatePoint', data)
  }
}

// mutations
const mutations = {
  updatePoint(state, { isDragging, point,　config }) {
    console.log(point)
    state.isDragging = isDragging
    state.point = point
    state.config = config
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}