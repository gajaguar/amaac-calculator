export default {
  gravity: {
    bulk: (wd, wssd, wi) => {
      // Gmb = Wd / (Wssd - Wi)
      wd = Number(wd)
      wssd = Number(wssd)
      wi = Number(wi)
      if (wd === 0 || wssd === 0 || wi === 0) return ''
      return (wd / (wssd - wi)).toFixed(3)
    },
    max: (ws, wsp, wsps) => {
      // Gmm = Ws / (Ws - (Wsps - Wsp))
      ws = Number(ws)
      wsp = Number(wsp)
      wsps = Number(wsps)
      if (ws === 0 || wsp === 0 || wsps === 0) return ''
      return (ws / (ws - (wsps - wsp))).toFixed(3)
    }
  }
}
