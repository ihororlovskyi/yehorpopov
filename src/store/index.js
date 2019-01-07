import Vue from 'vue'
import Vuex from 'vuex'
import loading from './loading'
import projects from './projects'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
     modules: {
      loading: loading,
      projects: projects
    }
   })
}

export default createStore
