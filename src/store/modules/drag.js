
// initial state
const state = {
    isDragging: false,
    point: null,
    config: null,
    dragId: null,
    targetId: null,
    targetPos: '',
    isChange: false,
}

// actions
const actions = {
  updatePoint({ commit }, data) {
    commit('updatePoint', data)
  },
  updateTargetId({ commit }, data) {
    commit('updateTargetId', data)
  },

  updateSort({ commit }, data) {
    commit('updateSort', data)
    if(!data){
      commit('updatePoint', {
        isDragging: false,
        point: null,
        config: null
      })
    }
  },
}

// mutations
const mutations = {
  updatePoint(state, { isDragging, point,　config }) {
    state.isDragging = isDragging
    state.point = point
    state.config = config
    if(config){
      state.dragId = config.id
    }
  },

  updateTargetId(state, {id, remove, isTop}){
    // let exit = state.targetId.includes(id)
    // if( remove && exit ){
    //   state.targetId.splice( state.targetId.indexOf(id), 1)
    //   return
    // }
    // if(exit)return
    // state.targetId.push(id)

    //　如果自己是拖拽的元素的子元素，则不用检查
    function isChild(id) {
      let reg = new RegExp('\^' + state.targetId)
      return reg.test(id)
    }

    if(!state.targetId || 
      isChild(id)
    ){
      state.targetId = id
      state.targetPos = isTop ? 'before' : 'after'
    }

  },
  updateSort(state, isChange){
    state.isChange = !!isChange
  },

}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}