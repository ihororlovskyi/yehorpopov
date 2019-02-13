import Vue from 'vue'

import Vuetify, {
  VApp,
  VContainer,
  VLayout,
  VFlex,
  VToolbar,
  VBtn,
  VIcon,
  VNavigationDrawer,
  VList
} from 'vuetify/lib'
import { Ripple } from 'vuetify/lib/directives'

Vue.use(Vuetify, {
  components: {
    VApp,
    VContainer,
    VLayout,
    VFlex,
    VToolbar,
    VBtn,
    VIcon,
    VNavigationDrawer,
    VList
    
  },
  directives: {
    Ripple,
  },
  theme: {
    primary: '#9c27b0',
    accent: '#ce93d8',
    secondary: '#424242',
    info: '#0D47A1',
    warning: '#ffb300',
    error: '#B71C1C',
    success: '#2E7D32'
  }
})

// import Vue from 'vue'
// import Vuetify from 'vuetify/lib'
// import { Ripple } from 'vuetify/lib/directives'
//
// Vue.use(Vuetify, {
//     theme: {
//       primary: '#9c27b0',
//       accent: '#ce93d8',
//       secondary: '#424242',
//       info: '#0D47A1',
//       warning: '#ffb300',
//       error: '#B71C1C',
//       success: '#2E7D32'
//     }
// })
