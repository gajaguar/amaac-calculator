<template>
  <div>
    <p class="title">Densidad Máxima de la Mezcla (G<sub>mm</sub>)</p>
    <form>
      <app-field
        @input="calculateGmm"
        label="Masa de la muestra (g)"
        step="0.1"
        v-model="ws"
      />
      <app-field
        @input="calculateGmm"
        label="Masa del picnómetro inmerso (g)"
        step="0.1"
        v-model="wsp"
      />
      <app-field
        @input="calculateGmm"
        label="Masa del picnómetro y la muestra inmersos (g)"
        step="0.1"
        v-model="wsps"
      />
    </form>
  </div>
</template>
<script>
import AppField from '@/components/AppField.vue'
import { mapMutations } from 'vuex'
import mixture from '@/utils/amaac/calculations/mixture'

export default {
  name: 'AggregatesMaxGravity',

  components: { AppField },

  data: () => ({
    mixture,
    ws: '',
    wsp: '',
    wsps: ''
  }),

  methods: {
    ...mapMutations('amaac', ['updateGmm']),
    calculateGmm() {
      const gmm = this.mixture.gravity.max(this.ws, this.wsp, this.wsps)
      this.updateGmm({ value: gmm })
    }
  }
}
</script>
