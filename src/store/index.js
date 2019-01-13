import Vue from 'vue'
import Vuex from 'vuex'
import loading from './loading'
import projects from './projects'

Vue.use(Vuex)

const store = () => {
  return new Vuex.Store({
     modules: {
      loading: loading,
      projects: projects
    }
   })
}

export default store

// import Vue from 'vue'
// import Vuex from 'vuex'
//
// Vue.use(Vuex)
//
// import loading from './loading'
// import projects from './projects'
//
// const store = () => new Vuex.Store({
//   modules: {
//     loading: loading,
//     projects: projects
//   }
// })
//
// export default store
