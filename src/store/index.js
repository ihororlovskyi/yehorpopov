import Vue from 'vue'
import Vuex from 'vuex'
import loading from './loading'
import projects from './projects'
import social from './social'

Vue.use(Vuex)

const store = () => {
  return new Vuex.Store({
     modules: {
      loading: loading,
      projects: projects,
      social: social
    }
   })
}

export default store
