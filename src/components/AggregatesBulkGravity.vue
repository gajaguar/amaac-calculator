<template>
  <div>
    <p class="title">Densidad Relativa Bruta del Agregado (G<sub>sb</sub>)</p>
    <form>
      <app-field
        @input="calculateAll"
        label="Masa de la muestra saturada superficialmente seca (g)"
        step="0.1"
        v-model="wssd"
      />
      <app-field
        @input="calculateAll"
        label="Masa de la muestra inmersa (g)"
        step="0.1"
        v-model="wi"
      />
      <app-field
        @input="calculateAll"
        label="Masa de la muestra seca (g)"
        step="0.1"
        v-model="wd"
      />
    </form>
  </div>
</template>
<script>
import AppField from '@/components/AppField.vue'
import { mapMutations } from 'vuex'
import aggregates from '@/utils/amaac/calculations/aggregates'

export default {
  name: 'AggregatesBulkGravity',

  components: { AppField },

  data: () => ({
    aggregates,
    wd: '',
    wi: '',
    wssd: ''
  }),

  methods: {
    ...mapMutations('amaac', ['updateAbs', 'updateGsa', 'updateGsb']),
    calculateAbs() {
      const abs = this.aggregates.absorption(this.wssd, this.wd)
      this.updateAbs({ value: abs })
    },
    calculateGsa() {
      const gsa = this.aggregates.gravity.apparent(this.wd, this.wi)
      this.updateGsa({ value: gsa })
    },
    calculateGsb() {
      const gsb = this.aggregates.gravity.bulk(this.wd, this.wssd, this.wi)
      this.updateGsb({ value: gsb })
    },
    calculateAll() {
      this.calculateAbs()
      this.calculateGsa()
      this.calculateGsb()
    }
  }
}
</script>
