export default {
  state: {
    orders: []
  },
  getters: {
    allOrders: state => state.orders,
    getOrdersByCarId: (state) => (carId) => {
      return state.orders.filter(order => order.carId === carId)
    }
  },
  mutations: {
    SET_ORDERS(state, orders) {
      state.orders = orders
    },
    CREATE_ORDER(state, order) {
      const newOrder = {
        id: Date.now(),
        ...order,
        createdAt: new Date().toISOString(),
        status: 'pending'
      }
      state.orders.push(newOrder)
    },
    UPDATE_ORDER_STATUS(state, { orderId, status }) {
      const order = state.orders.find(o => o.id === orderId)
      if (order) {
        order.status = status
      }
    }
  },
  actions: {
    fetchOrders({ commit }) {
      // Здесь будет запрос к API
      const orders = [
        {
          id: 1,
          carId: 1,
          carTitle: 'Toyota Camry 2022',
          name: 'Иван Иванов',
          phone: '+7 (999) 123-45-67',
          status: 'pending'
        }
      ]
      commit('SET_ORDERS', orders)
    },
    createOrder({ commit, dispatch }, orderData) {
      return dispatch('shared/requestHandler', async () => {
        // Здесь будет API запрос для создания заказа
        commit('CREATE_ORDER', orderData)
        return orderData
      })
    },
    updateOrderStatus({ commit, dispatch }, { orderId, status }) {
      return dispatch('shared/requestHandler', async () => {
        // Здесь будет API запрос для обновления статуса
        commit('UPDATE_ORDER_STATUS', { orderId, status })
        return { orderId, status }
      })
    }
  }
}
