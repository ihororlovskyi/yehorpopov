import firebase, { DB } from '@/services/fireinit.js'

export default {

  state: {
    loadedProjects: []
  },

  mutations: {
    setLoadedProjects (state, payload) {
      state.loadedProjects = payload
    },
    createProject (state, payload) {
      state.loadedProjects.push(payload)
    },
    updateProject (state, payload) {
      const item = state.loadedProjects.find(item => {
        return item.id === payload.id
      })
      item.title = payload.title
      item.slug = payload.slug
      item.shorttitle = payload.shorttitle
      item.description = payload.description
      item.price = payload.price
      item.homeTopImg = payload.homeTopImg
      item.imgSlider = payload.imgSlider
      item.imgSlim = payload.imgSlim
    },
    removeProject (state, payload) {
      const index = state.loadedProjects.findIndex(item => {
        return item.id === payload
      })
      if (index !== -1) {
        state.loadedProjects.splice(index, 1)
      }
    }
  },

  actions: {
    loadProjects ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('projects2').once('value')
        .then((data) => {
          const items = []
          const obj = data.val()
          for (let key in obj) {
            items.push({
              id: key,
              title: obj[key].title,
              slug: obj[key].slug,
              shorttitle: obj[key].shorttitle,
              description: obj[key].description,
              price: obj[key].price,
              homeTopImg: obj[key].homeTopImg,
              imgSlider: obj[key].imgSlider,
              imgSlim: obj[key].imgSlim,
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
    loadedProjectsSortedByDate (state, getters) {
      return getters.loadedProjects.sort((itemA, itemB) => {
        return new Date(itemA.date) - new Date(itemB.date)
      }).reverse()
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
