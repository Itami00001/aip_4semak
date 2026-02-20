export default {
  state: {
    loading: false,
    error: null
  },
  mutations: {
    SET_LOADING(state, loading) {
      state.loading = loading
    },
    SET_ERROR(state, error) {
      state.error = error
    },
    CLEAR_ERROR(state) {
      state.error = null
    }
  },
  actions: {
    async requestHandler({ commit }, callback) {
      commit('SET_LOADING', true)
      commit('CLEAR_ERROR')
      
      try {
        const result = await callback()
        commit('SET_LOADING', false)
        return result
      } catch (error) {
        commit('SET_LOADING', false)
        commit('SET_ERROR', error.message)
        throw error
      }
    }
  }
}
