import { createStore } from 'vuex'
import cars from './modules/cars'
import user from './modules/user'
import shared from './modules/shared'

export default createStore({
  modules: {
    cars,
    user,
    shared
  }
})
