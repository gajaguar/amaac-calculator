export default {
  namespaced: true,

  state: {
    pb_: '',
    pb: '',
    ps: ''
  },

  getters: {
    pb_: state => state.pb_,
    pb: state => state.pb,
    ps_: state => state.ps
  },

  mutations: {
    updatePb_: (state, payload) => {
      state.pb_ = payload.value
    },
    updatePb: (state, payload) => {
      state.pb = payload.value
    },
    updatePs: (state, payload) => {
      state.ps = payload.value
    }
  },

  actions: {
    updateValue({ commit }, payload) {
      commit('updateValue', payload)
    }
  }
}
