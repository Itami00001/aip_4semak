import { createStore } from 'vuex'
import cars from './modules/cars'

export default createStore({
  modules: {
    cars
  }
})
