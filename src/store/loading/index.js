export default {

  state: {
    loading: true
  },

  mutations: {
    setLoading (state, payload) {
      state.loading = payload
    }
  },

  actions: {
  },

  getters: {
    loading (state) {
      return state.loading
    }
  }

}
