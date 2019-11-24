
const state = {
  isCollapse : false
}

const getters = {
  isCollapse: ({ isCollapse }) => isCollapse
}

const mutations = {
  setIsCollapse (state, data) {
    state.isCollapse = data
  }
}

export default {
  state,
  getters,
  mutations
}
