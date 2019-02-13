import firebase, { DB } from '@/services/fireinit.js'

export default {

  state: {
    loadedProjects: []
  },

  mutations: {
    setLoadedProjects (state, payload) {
      state.loadedProjects = payload
    }
  },

  actions: {
    loadProjects ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('projects').once('value')
        .then((data) => {
          const items = []
          const obj = data.val()
          for (let key in obj) {
            items.push({
              id: key,
              title: obj[key].title,
              description: obj[key].description,
              price: obj[key].price,
              atHero: obj[key].atHero,
              heroColor: obj[key].heroColor,
              imgCover: obj[key].imgCover,
              date: obj[key].date
            })
          }
          commit('setLoadedProjects', items)
          commit('setLoading', false)
        })
        .catch(
          (error) => {
            console.log(error)
            commit('setLoading', false)
          }
        )
    }
  },

  getters: {
    loadedProjects (state) {
      return state.loadedProjects
    },
    loadedProjectsSortedByOld (state, getters) {
      return getters.loadedProjects.sort((itemA, itemB) => {
        return new Date(itemA.date) - new Date(itemB.date)
      })
    },
    loadedProjectsSortedByNew (state, getters) {
      return getters.loadedProjectsSortedByOld.reverse()
    },
    loadedProjectsAtHero (state, getters) {
      return getters.loadedProjectsSortedByOld.filter((project) => {
        return project.atHero
      }).slice(0, 3)
    },
    loadedProject (state) {
      return (itemId) => {
        return state.loadedProjects.find((item) => {
          return item.id === itemId
        })
      }
    }
  }

}
