
const state = {
  username:JSON.parse(sessionStorage.getItem('userinfo')).username ||'',
  userinfo : JSON.parse(sessionStorage.getItem('userinfo')) ||''
}

const getters = {
  userinfo: ({ userinfo }) => userinfo,
  username: ({ username }) => username
}

const mutations = {
  saveUserInfo (state, data) {
    state.userinfo = data
    state.username = data.username
    sessionStorage.setItem('token',data.token)
    sessionStorage.setItem('userinfo',JSON.stringify(data))
  }
}

export default {
  state,
  getters,
  mutations
}
