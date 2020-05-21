<template>
  <div>
    <p class="title">VACÍOS DEL AGREGADO MINERAL (VMA)</p>
    <form>
      <app-field
        type="number"
        label="DENSIDAD BRUTA DE LA MEZCLA COMPACTA (G _mb_ )"
        v-model="gmb"
      />
      <app-field
        type="number"
        label="PORCENTAJE DE AGREGADOS EN LA MEZCLA (P _s_ )"
        v-model="ps"
      />
      <app-field
        type="number"
        label="DENSIDAD BRUTA DEL AGREGADO (G _sb_ )"
        v-model="gsb"
      />
      <app-field
        :value="vma"
        :readonly="true"
        type="number"
        label="VACÍOS DEL AGREGADO MINERAL (VMA)"
      />
    </form>
  </div>
</template>
<script>
import AppField from '@/components/AppField.vue'

export default {
  name: 'AmaacVma',

  components: { AppField },

  data: () => ({
    gmb: '0.000',
    gsb: '0.000',
    ps: '0.000'
  }),

  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    vma() {
      // VMA = 100 - Gmb * Ps / Gsb
      const gmb = Number(this.gmb)
      const ps = Number(this.ps)
      const gsb = Number(this.gsb)
      if (gmb !== 0 && ps !== 0 && gsb !== 0) {
        const vma = 100 - (gmb * ps) / gsb
        return vma.toFixed(3)
      }
    }
  }
}
</script>
