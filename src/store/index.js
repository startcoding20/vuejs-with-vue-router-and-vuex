import Vue from 'vue'
import Vuex from 'vuex'
import app from './app.store.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    debug:false,
    modules: {
      app
    }
  })
export default store;