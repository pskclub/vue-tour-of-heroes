import Vue from 'vue'
import Vuex from 'vuex'
import { heroState } from './app/heroes/hero-state'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    heroState
  }
})
