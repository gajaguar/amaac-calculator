<template>
  <div>
    <p class="title">Contenido de Asfalto en la Mezcla (P<sub>b</sub>)</p>
    <form>
      <!-- data -->
      <app-field :label="labels[0]" step="0.1" v-model="wp" />
      <app-field :label="labels[1]" step="0.1" v-model="wbi" />
      <app-field :label="labels[2]" step="0.1" v-model="wbf" />

      <!-- results -->
      <app-field
        color="is-primary"
        :label="labels[3]"
        :readonly="true"
        :value="wni"
      />
      <app-field
        color="is-primary"
        :label="labels[4]"
        :readonly="true"
        :value="wnf"
      />
      <app-field
        color="is-primary"
        :label="labels[5]"
        :readonly="true"
        :value="wa"
      />
      <app-field
        color="is-primary"
        :label="labels[6]"
        :readonly="true"
        :value="pb_"
      />
      <app-field
        color="is-primary"
        :label="labels[7]"
        :readonly="true"
        :value="pb"
      />
      <app-field
        color="is-primary"
        :label="labels[8]"
        :readonly="true"
        :value="ps"
      />
    </form>
  </div>
</template>
<script>
import AppField from '@/components/AppField.vue'

export default {
  name: 'AsphaltContent',

  components: { AppField },

  data: () => ({
    labels: [
      'Masa del papel filtro (g)',
      'Masa bruta previa al lavado (g)',
      'Masa bruta posterior al lavado (g)',
      'Masa neta previa al lavado (g)',
      'Masa neta posterior al lavado (g)',
      'Masa del asfalto lavado (g)',
      "Contenido de asfalto por agregado seco (%) [P _b_ ']",
      'Contenido de asfalto en la mezcla (%) [P _b_ ]',
      'Contenido de agregado en la mezcla (%) [P _s_ ]'
    ],
    wbi: '0.0',
    wbf: '0.0',
    wp: '0.0'
  }),

  computed: {
    pb_() {
      // Pb' = (Wbi - Wbf) / (Wbf - Wp) * 100
      const wbi = Number(this.wbi)
      const wbf = Number(this.wbf)
      const wp = Number(this.wp)
      if (wbi === 0 || wbf === 0 || wp === 0) return '0.000'
      const pb_ = ((wbi - wbf) / (wbf - wp)) * 100
      return pb_.toFixed(3)
    },
    pb() {
      // Pb = Pb' / (100 + Pb') * 100
      const pb_ = Number(this.pb_)
      if (pb_ === 0) return '0.000'
      const pb = (pb_ / (100 + pb_)) * 100
      return pb.toFixed(3)
    },
    ps() {
      // Ps = 100 - Pb
      const pb = Number(this.pb)
      if (pb === 0) return '0.000'
      const ps = 100 - pb
      return ps.toFixed(3)
    },
    wa() {
      // Wa = Wbi - Wbf
      const wbi = Number(this.wbi)
      const wbf = Number(this.wbf)
      if (wbi === 0 || wbf === 0) return '0.000'
      const wa = wbi - wbf
      return wa.toFixed(3)
    },
    wni() {
      // Wni = Wbi - Wp
      const wbi = Number(this.wbi)
      const wp = Number(this.wp)
      if (wbi === 0 || wp === 0) return '0.000'
      const wni = wbi - wp
      return wni.toFixed(3)
    },
    wnf() {
      // Wnf = Wbf - Wp
      const wbf = Number(this.wbf)
      const wp = Number(this.wp)
      if (wbf === 0 || wp === 0) return '0.000'
      const wnf = wbf - wp
      return wnf.toFixed(3)
    }
  }
}
</script>
