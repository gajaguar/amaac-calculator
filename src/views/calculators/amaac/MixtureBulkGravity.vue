<template>
  <div>
    <p class="title">Densidad Relativa Bruta del Agregado (G<sub>sb</sub>)</p>
    <form>
      <!-- data -->
      <app-field :label="labels[0]" step="0.1" v-model="wd" />
      <app-field :label="labels[1]" step="0.1" v-model="wi" />
      <app-field :label="labels[2]" step="0.1" v-model="wssd" />

      <!-- results -->
      <app-field
        color="is-primary"
        :label="labels[3]"
        :readonly="true"
        :value="gmb"
      />
    </form>
  </div>
</template>

<script>
import AppField from '@/components/AppField.vue'

export default {
  name: 'MixtureBulkGravity',

  components: { AppField },

  data: () => ({
    labels: [
      'Masa de la muestra seca (g)',
      'Masa de la muestra inmersa (g)',
      'Masa de la muestra saturada superficialmente seca (g)',
      'Densidad relativa bruta de la mezcla compacta [G _mb_ ]'
    ],
    wd: '0.0',
    wi: '0.0',
    wssd: '0.0'
  }),

  computed: {
    gmb() {
      // Gmb = Wd / (Wssd - Wi)
      const wd = Number(this.wd)
      const wssd = Number(this.wssd)
      const wi = Number(this.wi)
      if (wd === 0 || wssd === 0 || wi === 0) return '0.000'
      const gmb = wd / (wssd - wi)
      return gmb.toFixed(3)
    }
  }
}
</script>
