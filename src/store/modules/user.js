import users from '@/data/users.json'

export default {
  state: {
    user: null,
    token: null,
    users: users
  },
  getters: {
    isAuthenticated: state => !!state.token,
    currentUser: state => state.user,
    allUsers: state => state.users
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
      state.users.push(newUser)
      state.user = newUser
    },
    LOGIN_USER(state, userData) {
      state.user = userData
      state.token = 'mock-token-' + Date.now()
    },
    LOGOUT(state) {
      state.user = null
      state.token = null
    }
  },
  actions: {
    registerUser({ commit, state }, userData) {
      return new Promise((resolve, reject) => {
        // Проверка на дубликат email
        const existingUser = state.users.find(u => u.email === userData.email)
        if (existingUser) {
          reject(new Error('Пользователь с таким email уже существует'))
          return
        }

        const newUser = {
          id: Date.now(),
          ...userData,
          createdAt: new Date().toISOString()
        }
        commit('REGISTER_USER', newUser)
        resolve(newUser)
      })
    },
    loginUser({ commit, state }, credentials) {
      return new Promise((resolve, reject) => {
        const user = state.users.find(u => 
          u.email === credentials.email && u.password === credentials.password
        )
        
        if (user) {
          commit('LOGIN_USER', user)
          resolve(user)
        } else {
          reject(new Error('Неверный email или пароль'))
        }
      })
    },
    logout({ commit }) {
      commit('LOGOUT')
    }
  }
}
