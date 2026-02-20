export default {
  state: {
    cars: []
  },
  getters: {
    allCars: state => state.cars,
    getCarById: (state) => (id) => {
      return state.cars.find(car => car.id === id)
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
        createdAt: new Date().toISOString()
      }
      state.cars.push(newCar)
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
    createCar({ commit }, carData) {
      commit('CREATE_CAR', carData)
      return Promise.resolve()
    }
  }
}
