<template>
  <div>
    <p class="title">VACÍOS EN LA MEZCLA (P<sub>a</sub>)</p>
    <form>
      <app-field
        type="number"
        label="DENSIDAD ESPECÍFICA MÁXIMA DE LA MEZCLA (G _mm_ )"
        v-model="gmm"
      />
      <app-field
        type="number"
        label="DENSIDAD BRUTA DE LA MEZCLA COMPACTA (G _mb_ )"
        v-model="gmb"
      />
      <app-field
        :value="pa"
        :readonly="true"
        type="number"
        label="VACÍOS EN LA MEZCLA (P _a_ )"
      />
    </form>
  </div>
</template>
<script>
import AppField from '@/components/AppField.vue'

export default {
  name: 'Vcm',

  components: { AppField },

  data: () => ({
    gmm: '0.000',
    gmb: '0.000'
  }),

  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    pa() {
      // Pa = (Gmm - Gmb) / Gmm * 100
      const gmm = Number(this.gmm)
      const gmb = Number(this.gmb)
      if (gmm !== 0 && gmb !== 0) {
        const pa = ((gmm - gmb) / gmm) * 100
        return pa.toFixed(3)
      }
    }
  }
}
</script>
