
const state = {
  userinfo : JSON.parse(sessionStorage.getItem('userinfo')) ||''
}

const getters = {
  userinfo: ({ userinfo }) => userinfo,
  username: ({ userinfo }) => userinfo.username
}

const mutations = {
  saveUserInfo (state, data) {
    state.userinfo = data
    sessionStorage.setItem('token',data.token)
    sessionStorage.setItem('userinfo',JSON.stringify(data))
  }
}

export default {
  state,
  getters,
  mutations
}
