import { createStore } from 'vuex'
import cars from './modules/cars'
import user from './modules/user'

export default createStore({
  modules: {
    cars,
    user
  }
})
