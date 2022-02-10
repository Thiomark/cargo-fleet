import Vue from 'vue'
import Vuex from 'vuex'
import helpers from './modules/helpers';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    helpers,
  }
})
