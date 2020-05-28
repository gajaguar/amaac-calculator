<template>
  <div>
    <p class="title">
      Densidad Relativa Bruta de la Mezcla Compacta (G<sub>mb</sub>)
    </p>
    <form>
      <app-field
        @input="calculateAll"
        label="Masa de la muestra seca (g)"
        step="0.1"
        v-model="wd"
      />
      <app-field
        @input="calculateAll"
        label="Masa de la muestra inmersa (g)"
        step="0.1"
        v-model="wi"
      />
      <app-field
        @input="calculateAll"
        label="Masa de la muestra saturada superficialmente seca (g)"
        step="0.1"
        v-model="wssd"
      />
    </form>
  </div>
</template>

<script>
import AppField from '@/components/AppField.vue'
import { mapMutations } from 'vuex'
import { mixtureBulkGravity } from '@/utils/amaac'

export default {
  name: 'MixtureBulkGravity',

  components: { AppField },

  data: () => ({
    mixtureBulkGravity,
    wd: '',
    wi: '',
    wssd: ''
  }),

  methods: {
    ...mapMutations('amaac', ['updateGmb']),
    calculateGmb() {
      const gmb = this.mixtureBulkGravity(this.wd, this.wssd, this.wi)
      this.updateGmb({ value: gmb })
    },
    calculateAll() {
      this.calculateGmb()
    }
  }
}
</script>
