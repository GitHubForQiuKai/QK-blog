import Vuex from 'vuex'
import Vue from 'vue'
import database from './modules/database'
import actions from './actions'
Vue.use(Vuex)
export default new Vuex.Store({
  actions,
  modules: {
    database
  }
})
