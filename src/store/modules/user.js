export default {
  state: {
    user: null,
    token: null
  },
  getters: {
    isAuthenticated: state => !!state.token,
    currentUser: state => state.user
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
    },
    SET_TOKEN(state, token) {
      state.token = token
    },
    REGISTER_USER(state, userData) {
      const newUser = {
        id: Date.now(),
        ...userData,
        createdAt: new Date().toISOString()
      }
      state.user = newUser
    }
  },
  actions: {
    registerUser({ commit }, userData) {
      commit('REGISTER_USER', userData)
      return Promise.resolve()
    }
  }
}
