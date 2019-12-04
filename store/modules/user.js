
const state = {
  username : sessionStorage.getItem('username')||''
}

const getters = {
  username: ({ username }) => username
}

const mutations = {
  saveUserInfo (state, data) {
    const { token,username } = data
    sessionStorage.setItem('token',token)
    sessionStorage.setItem('username',username)
  }
}

export default {
  state,
  getters,
  mutations
}
