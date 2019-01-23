// import { auth } from '@/services/fireinit.js'

export default (context) => {
  const {store} = context
  store.dispatch('loadProjects')
  store.dispatch('loadSocialLinks')

  // return new Promise((resolve, reject) => {
  //   auth.onAuthStateChanged(user => {
  //     store.commit('setUser', user)
  //     resolve()
  //   })
  // })
}
