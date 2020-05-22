<template>
  <div>
    <p class="title">Densidad Relativa Bruta del Agregado (G<sub>sb</sub>)</p>
    <form>
      <!-- data -->
      <app-field :label="labels[0]" step="0.1" v-model="wssd" />
      <app-field :label="labels[1]" step="0.1" v-model="wi" />
      <app-field :label="labels[2]" step="0.1" v-model="wd" />

      <!-- results -->
      <app-field
        color="is-primary"
        :label="labels[3]"
        :readonly="true"
        :value="abs"
      />
      <app-field
        color="is-primary"
        :label="labels[4]"
        :readonly="true"
        :value="gsb"
      />
      <app-field
        color="is-primary"
        :label="labels[5]"
        :readonly="true"
        :value="gsa"
      />
    </form>
  </div>
</template>
<script>
import AppField from '@/components/AppField.vue'

export default {
  name: 'AggregatesBulkGravity',

  components: { AppField },

  data: () => ({
    labels: [
      'Masa de la muestra saturada superficialmente seca (g)',
      'Masa de la muestra inmersa (g)',
      'Masa de la muestra seca (g)',
      'Absorción (%)',
      'Densidad relativa (seca) bruta del agregado [G _sb_ ]',
      'Densidad relativa aparente del agregado [G _sa_ ]'
    ],
    wd: '0.0',
    wi: '0.0',
    wssd: '0.0'
  }),

  computed: {
    abs() {
      // ABS = (Wssd - Wd) / Wd * 100
      const wssd = Number(this.wssd)
      const wd = Number(this.wd)
      if (wssd === 0 || wd === 0) return '0.000'
      const abs = ((wssd - wd) / wd) * 100
      return abs.toFixed(3)
    },
    gsa() {
      // Gsa = Wd / (Wd - Wi)
      const wd = Number(this.wd)
      const wi = Number(this.wi)
      if (wd === 0 || wi === 0) return '0.000'
      const gsa = wd / (wd - wi)
      return gsa.toFixed(3)
    },
    gsb() {
      // Gsb = Wd / (Wssd - Wi)
      const wd = Number(this.wd)
      const wssd = Number(this.wssd)
      const wi = Number(this.wi)
      if (wd === 0 || wssd === 0 || wi === 0) return '0.000'
      const gsb = wd / (wssd - wi)
      return gsb.toFixed(3)
    }
  }
}
</script>
