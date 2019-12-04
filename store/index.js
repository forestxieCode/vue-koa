import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import siderbar from './modules/siderbar'
import lange from './modules/lange'

Vue.use(Vuex)

const store = ()=> new Vuex.Store({
  modules: {
    user,
    siderbar,
    lange
  }
})

export default store


