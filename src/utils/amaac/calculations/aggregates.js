export default {
  absorption: (wssd, wd) => {
    // ABS = (Wssd - Wd) / Wd * 100
    wssd = Number(wssd)
    wd = Number(wd)
    if (wssd === 0 || wd === 0) return ''
    return (((wssd - wd) / wd) * 100).toFixed(3)
  },
  content: {
    byMixture: (pb) => {
      // Ps = 100 - Pb
      pb = Number(pb)
      if (pb === 0) return ''
      return (100 - pb).toFixed(3)
    }
  },
  gravity: {
    apparent: (wd, wi) => {
      // Gsa = Wd / (Wd - Wi)
      wd = Number(wd)
      wi = Number(wi)
      if (wd === 0 || wi === 0) return ''
      return (wd / (wd - wi)).toFixed(3)
    },
    bulk: (wd, wssd, wi) => {
      // Gsb = Wd / (Wssd - Wi)
      wd = Number(wd)
      wssd = Number(wssd)
      wi = Number(wi)
      if (wd === 0 || wssd === 0 || wi === 0) return ''
      return (wd / (wssd - wi)).toFixed(3)
    }
  }
}
