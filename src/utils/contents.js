const aggregatesByMixture = pb => {
  // Ps = 100 - Pb
  pb = Number(pb)
  if (pb === 0) return ''
  return (100 - pb).toFixed(3)
}

const asphaltByAggregates = (wbi, wbf, wp) => {
  // Pb' = (Wbi - Wbf) / (Wbf - Wp) * 100
  wbi = Number(wbi)
  wbf = Number(wbf)
  wp = Number(wp)
  if (wbi === 0 || wbf === 0 || wp === 0) return ''
  return (((wbi - wbf) / (wbf - wp)) * 100).toFixed(3)
}

const asphaltByMixture = pb_ => {
  // Pb = Pb' / (100 + Pb') * 100
  pb_ = Number(pb_)
  if (pb_ === 0) return ''
  return ((pb_ / (100 + pb_)) * 100).toFixed(3)
}

const asphaltFinalNetWeight = () => {
  // Wnf = Wbf - Wp
  const wbf = Number(wbf)
  const wp = Number(wp)
  if (wbf === 0 || wp === 0) return ''
  const wnf = wbf - wp
  return wnf.toFixed(3)
}

const asphaltInitialNetWeight = () => {
  // Wni = Wbi - Wp
  const wbi = Number(wbi)
  const wp = Number(wp)
  if (wbi === 0 || wp === 0) return ''
  const wni = wbi - wp
  return wni.toFixed(3)
}

const asphaltWeight = (wbi, wbf) => {
  // Wa = Wbi - Wbf
  wbi = Number(wbi)
  wbf = Number(wbf)
  if (wbi === 0 || wbf === 0) return ''
  return (wbi - wbf).toFixed(3)
}

export {
  aggregatesByMixture,
  asphaltByAggregates,
  asphaltByMixture,
  asphaltFinalNetWeight,
  asphaltInitialNetWeight,
  asphaltWeight
}
