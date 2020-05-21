<template>
  <div>
    <p class="title">VACÍOS LLENADOS CON ASFALTO (VFA)</p>
    <form>
      <app-field
        type="number"
        label="VACÍOS DEL AGREGADO MIERAL (VMA)"
        v-model="vma"
      />
      <app-field
        type="number"
        label="VACÍOS EN LA MEZCLA (P _a_ )"
        v-model="pa"
      />
      <app-field
        :value="vfa"
        :readonly="true"
        type="number"
        label="VACÍOS LLENADOS CON ASFALTO (VFA)"
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
    vma: '0.000',
    pa: '0.000'
  }),

  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    vfa() {
      // VFA = (VMA - Pa) / VMA * 100
      const vma = Number(this.vma)
      const pa = Number(this.pa)
      if (vma !== 0 && pa !== 0) {
        const vfa = ((vma - pa) / vma) * 100
        return vfa.toFixed(3)
      }
    }
  }
}
</script>
