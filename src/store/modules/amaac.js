export default {
  namespaced: true,

  state: {
    abs: '',
    gsa: '',
    gsb: '',
    pb: '',
    pb_: '',
    ps: ''
  },

  getters: {
    abs: state => state.abs,
    gsa: state => state.gsa,
    gsb: state => state.gsb,
    pb: state => state.pb,
    pb_: state => state.pb_,
    ps: state => state.ps
  },

  mutations: {
    updateAbs: (state, payload) => {
      state.abs = payload.value
    },
    updateGsa: (state, payload) => {
      state.gsa = payload.value
    },
    updateGsb: (state, payload) => {
      state.gsb = payload.value
    },
    updatePb: (state, payload) => {
      state.pb = payload.value
    },
    updatePb_: (state, payload) => {
      state.pb_ = payload.value
    },
    updatePs: (state, payload) => {
      state.ps = payload.value
    }
  },

  actions: {}
}
