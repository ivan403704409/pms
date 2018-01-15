
// initial state
const state = {
    isDragging: false,
    point: null,
    config: null,
    dragId: null,
    targetId: null,
    targetPos: '',
    lock: false,
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

  updateTargetId(state, {id, targetPos, remove}){
    // let exit = state.targetId.includes(id)
    // if( remove && exit ){
    //   state.targetId.splice( state.targetId.indexOf(id), 1)
    //   return
    // }
    // if(exit)return
    // state.targetId.push(id)
    console.log(targetPos, remove)
    if(remove && targetPos==='inner'){
      state.lock = false
      state.targetId = ''
      state.targetPos = ''
      return
    }

    // 插入到空白处
    if(targetPos==='inner'){
      state.targetId = id
      state.targetPos = 'inner'
      state.lock = true
      return;
    }

    if(state.lock){
      return
    }

    //　如果自己是拖拽的元素的子元素，则不用检查
    function isParent(id) {
      let reg = new RegExp('\^' + id)
      return reg.test(state.targetId)
    }
    if(!state.targetId || 
      !isParent(id) || id===state.targetId
    ){
      state.targetId = id
      state.targetPos = targetPos
      state.lock = false
    }

  },
  updateSort(state, isChange){
    state.isChange = !!isChange
    if(!isChange){
      state.targetId = ''
      state.targetPos = ''
      state.lock = false
    }
  },

}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}