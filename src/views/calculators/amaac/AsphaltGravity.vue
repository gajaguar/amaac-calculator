<template>
  <div>
    <p class="title">Densidad Relativa del Asfalto (G<sub>b</sub>)</p>
    <form>
      <!-- data -->
      <app-field :label="labels[0]" step="0.1" v-model="wp" />
      <app-field :label="labels[1]" step="0.1" v-model="wpw" />
      <app-field :label="labels[2]" step="0.1" v-model="wpb" />
      <app-field :label="labels[3]" step="0.1" v-model="wpbw" />

      <!-- results -->
      <app-field
        color="is-primary"
        :label="labels[4]"
        :readonly="true"
        :value="gb"
      />
    </form>
  </div>
</template>

<script>
import AppField from '@/components/AppField.vue'

export default {
  name: 'AsphaltGravity',

  components: { AppField },

  data: () => ({
    labels: [
      'Masa del picnómetro (g)',
      'Masa del picnómetro + agua (g)',
      'Masa del picnómetro + asfalto (g)',
      'Masa del picnómetro + asfalto + agua (g)',
      'Densidad relativa del asfalto [G _b_ ]'
    ],
    wp: '0.0',
    wpb: '0.0',
    wpw: '0.0',
    wpbw: '0.0'
  }),

  computed: {
    gb() {
      // Gb = (Wpb - Wp) / ((Wpw - Wp) - (Wpbw - Wpb))
      const wpb = Number(this.wpb)
      const wp = Number(this.wp)
      const wpw = Number(this.wpw)
      const wpbw = Number(this.wpbw)
      if (wpb === 0 || wp === 0 || wpw === 0 || wpbw === 0) return '0.000'
      const bg = (wpb - wp) / (wpw - wp - (wpbw - wpb))
      return bg.toFixed(3)
    }
  }
}
</script>
