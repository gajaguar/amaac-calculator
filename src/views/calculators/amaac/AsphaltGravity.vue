<template>
  <div>
    <p class="title">Densidad Relativa del Asfalto (G<sub>b</sub>)</p>
    <form>
      <app-field
        @input="calculateAll"
        label="Masa del picnómetro (g)"
        step="0.1"
        v-model="wp"
      />
      <app-field
        @input="calculateAll"
        label="Masa del picnómetro + agua (g)"
        step="0.1"
        v-model="wpw"
      />
      <app-field
        @input="calculateAll"
        label="Masa del picnómetro + asfalto (g)"
        step="0.1"
        v-model="wpb"
      />
      <app-field
        @input="calculateAll"
        label="Masa del picnómetro + asfalto + agua (g)"
        step="0.1"
        v-model="wpbw"
      />
    </form>
  </div>
</template>

<script>
import AppField from '@/components/AppField.vue'
import { mapMutations } from 'vuex'
import asphalt from '@/utils/amaac/calculations/asphalt'

export default {
  name: 'AsphaltGravity',

  components: { AppField },

  data: () => ({
    asphalt,
    wp: '',
    wpb: '',
    wpw: '',
    wpbw: ''
  }),

  methods: {
    ...mapMutations('amaac', ['updateGb']),
    calculateGb() {
      const gb = this.asphalt.gravity.bulk(
        this.wp,
        this.wpw,
        this.wpb,
        this.wpbw
      )
      this.updateGb({ value: gb })
    },
    calculateAll() {
      this.calculateGb()
    }
  }
}
</script>
