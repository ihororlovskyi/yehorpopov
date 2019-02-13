import firebase, { DB } from '@/services/fireinit.js'

export default {

  state: {
    loadedSocialLinks: []
  },

  mutations: {
    setLoadedSocialLinks (state, payload) {
      state.loadedSocialLinks = payload
    }
  },

  actions: {
    loadSocialLinks ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('social').once('value')
        .then((data) => {
          const items = []
          const obj = data.val()
          for (let key in obj) {
            items.push({
              id: key,
              title: obj[key].title,
              link: obj[key].link,
              icon: obj[key].icon,
              date: obj[key].date
            })
          }
          commit('setLoadedSocialLinks', items)
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
    loadedSocialLinks (state) {
      return state.loadedSocialLinks
    },
    loadedSocialLinksSortedByOld (state, getters) {
      return getters.loadedSocialLinks.sort((itemA, itemB) => {
        return new Date(itemA.date) - new Date(itemB.date)
      })
    },
    loadedSocialLinksSortedByNew (state, getters) {
      return getters.loadedSocialLinksSortedByOld.reverse()
    }
  }

}
