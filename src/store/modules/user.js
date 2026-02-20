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
    },
    LOGIN_USER(state, userData) {
      state.user = userData
      state.token = 'mock-token-' + Date.now()
    }
  },
  actions: {
    registerUser({ commit, dispatch }, userData) {
      return dispatch('shared/requestHandler', async () => {
        // Здесь будет API запрос для регистрации
        commit('REGISTER_USER', userData)
        return userData
      })
    },
    loginUser({ commit, dispatch }, credentials) {
      return dispatch('shared/requestHandler', async () => {
        // Здесь будет API запрос для логина
        const userData = {
          id: Date.now(),
          email: credentials.email,
          name: 'User ' + credentials.email.split('@')[0]
        }
        commit('LOGIN_USER', userData)
        return userData
      })
    }
  }
}
