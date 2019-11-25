import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import siderbar from './modules/siderbar'

Vue.use(Vuex)

const store = ()=> new Vuex.Store({
  modules: {
    user,
    siderbar
  }
})

export default store


