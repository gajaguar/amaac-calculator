export default {
  namespaced: true,

  state: {
    abs: '',
    fb: '',
    gb: '',
    gmb: '',
    gmm: '',
    gsa: '',
    gsb: '',
    gse: '',
    p200: '4.5',
    pa: '',
    pb_: '',
    pb: '',
    pba: '',
    pbe: '',
    ps: '',
    vfa: '',
    vma: ''
  },

  getters: {
    abs: (state) => state.abs,
    fb: (state) => {
      // F/B = P-200 / Pb'
      const p200 = Number(state.p200)
      const pb_ = Number(state.pb_)
      if (p200 === 0 || pb_ === 0) return ''
      const fb = p200 / pb_
      state.fb = fb.toFixed(3)
      return fb.toFixed(3)
    },
    gb: (state) => state.gb,
    gmb: (state) => state.gmb,
    gmm: (state) => state.gmm,
    gsa: (state) => state.gsa,
    gsb: (state) => state.gsb,
    gse: (state) => {
      // Gse = (Pmm - Pb) / (Pmm / Gmm - Pb / Gb)
      const gb = Number(state.gb)
      const gmm = Number(state.gmm)
      const pb = Number(state.pb)
      const pmm = 100
      if (gb === 0 || gmm === 0 || pb === 0) return ''
      const gse = (pmm - pb) / (pmm / gmm - pb / gb)
      state.gse = gse.toFixed(3)
      return gse.toFixed(3)
    },
    pa: (state) => {
      // Pa = (Gmm - Gmb) / Gmm * 100
      const gmb = Number(state.gmb)
      const gmm = Number(state.gmm)
      if (gmb === 0 || gmm === 0) return ''
      const pa = ((gmm - gmb) / gmm) * 100
      state.pa = pa.toFixed(3)
      return pa.toFixed(3)
    },
    pb_: (state) => state.pb_,
    pb: (state) => state.pb,
    pba: (state) => {
      // Pba = 100 * ((Gse - Gsb) / (Gsb * Gse)) * Gb
      const gb = Number(state.gb)
      const gsb = Number(state.gsb)
      const gse = Number(state.gse)
      if (gb === 0 || gsb === 0 || gse === 0) return ''
      const pba = 100 * ((gse - gsb) / (gsb * gse)) * gb
      state.pba = pba.toFixed(3)
      return pba.toFixed(3)
    },
    pbe: (state) => {
      // Pbe = Pb - (Pba / 100) * Ps
      const pb = Number(state.pb)
      const pba = Number(state.pba)
      const ps = Number(state.ps)
      if (pb === 0 || pba === 0 || ps === 0) return ''
      const pbe = pb - (pba / 100) * ps
      state.pbe = pbe.toFixed(3)
      return pbe.toFixed(3)
    },
    ps: (state) => state.ps,
    vfa: (state) => {
      // VFA = (VMA - Pa) / VMA * 100
      const pa = Number(state.pa)
      const vma = Number(state.vma)
      if (pa === 0 || vma === 0) return ''
      const vfa = ((vma - pa) / vma) * 100
      state.vfa = vfa.toFixed(3)
      return vfa.toFixed(3)
    },
    vma: (state) => {
      // VMA = 100 - (Gmb * Ps) / Gsb
      const gmb = Number(state.gmb)
      const gsb = Number(state.gsb)
      const ps = Number(state.ps)
      if (gmb === 0 || gsb === 0 || ps === 0) return ''
      const vma = 100 - (gmb * ps) / gsb
      state.vma = vma.toFixed(3)
      return vma.toFixed(3)
    }
  },

  mutations: {
    updateAbs: (state, payload) => {
      state.abs = payload.value
    },
    updateFb: (state, payload) => {
      state.fb = payload.value
    },
    updateGb: (state, payload) => {
      state.gb = payload.value
    },
    updateGmb: (state, payload) => {
      state.gmb = payload.value
    },
    updateGmm: (state, payload) => {
      state.gmm = payload.value
    },
    updateGsa: (state, payload) => {
      state.gsa = payload.value
    },
    updateGsb: (state, payload) => {
      state.gsb = payload.value
    },
    updateGse: (state, payload) => {
      state.gse = payload.value
    },
    updatePa: (state, payload) => {
      state.pa = payload.value
    },
    updatePb: (state, payload) => {
      state.pb = payload.value
    },
    updatePb_: (state, payload) => {
      state.pb_ = payload.value
    },
    updatePba: (state, payload) => {
      state.pba = payload.value
    },
    updatePbe: (state, payload) => {
      state.pbe = payload.value
    },
    updatePs: (state, payload) => {
      state.ps = payload.value
    },
    updateVfa: (state, payload) => {
      state.vfa = payload.value
    },
    updateVma: (state, payload) => {
      state.vma = payload.value
    }
  },

  actions: {}
}
