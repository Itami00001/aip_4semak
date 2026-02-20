export default {
  state: {
    cars: [],
    userId: null
  },
  getters: {
    allCars: state => state.cars,
    getCarById: (state) => (id) => {
      return state.cars.find(car => car.id === id)
    },
    myAds: (state) => {
      if (!state.userId) return []
      return state.cars.filter(car => car.userId === state.userId)
    }
  },
  mutations: {
    SET_CARS(state, cars) {
      state.cars = cars
    },
    CREATE_CAR(state, car) {
      const newCar = {
        id: Date.now(),
        ...car,
        userId: state.userId,
        createdAt: new Date().toISOString()
      }
      state.cars.push(newCar)
    },
    UPDATE_CAR(state, updatedCar) {
      const index = state.cars.findIndex(car => car.id === updatedCar.id)
      if (index !== -1) {
        state.cars.splice(index, 1, updatedCar)
      }
    },
    DELETE_CAR(state, carId) {
      const index = state.cars.findIndex(car => car.id === carId)
      if (index !== -1) {
        state.cars.splice(index, 1)
      }
    },
    SET_USER_ID(state, userId) {
      state.userId = userId
    }
  },
  actions: {
    fetchCars({ commit }) {
      // Здесь будет запрос к API
      const cars = [
        {
          id: 1,
          title: 'Toyota Camry 2022',
          image: 'https://via.placeholder.com/300x200?text=Toyota+Camry',
          price: '2,500,000 ₽',
          year: 2022,
          mileage: '15,000 км',
          description: 'Отличное состояние, один владелец'
        }
      ]
      commit('SET_CARS', cars)
    },
    createCar({ commit, dispatch }, carData) {
      return dispatch('shared/requestHandler', async () => {
        // Здесь будет API запрос для создания объявления
        commit('CREATE_CAR', carData)
        return carData
      })
    },
    updateCar({ commit, dispatch }, carData) {
      return dispatch('shared/requestHandler', async () => {
        // Здесь будет API запрос для обновления объявления
        commit('UPDATE_CAR', carData)
        return carData
      })
    },
    deleteCar({ commit, dispatch }, carId) {
      return dispatch('shared/requestHandler', async () => {
        // Здесь будет API запрос для удаления объявления
        commit('DELETE_CAR', carId)
        return carId
      })
    }
  }
}
