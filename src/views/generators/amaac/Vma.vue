<template>
  <div>
    <p class="title">VACÍOS DEL AGREGADO MINERAL (VMA)</p>
    <form>
      <app-field
        @input="calculateGmb"
        type="number"
        label="Densidad relativa bruta de la mezcla compacta (G _mb_ )"
        v-model="gmb_"
      />
      <app-field
        @input="calculatePs"
        type="number"
        label="Contenido de agregado en la mezcla (P _s_ )"
        v-model="ps_"
      />
      <app-field
        @input="calculateGsb"
        type="number"
        label="Densidad relativa (seca) bruta del agregado (G _sb_ )"
        v-model="gsb_"
      />
      <app-field
        :value="vma"
        :readonly="true"
        type="number"
        label="Vacíos ocupados por el agregado mineral (VMA)"
      />
    </form>
  </div>
</template>
<script>
import AppField from '@/components/AppField.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'AmaacVma',

  components: { AppField },

  data: () => ({
    gmb_: '',
    gsb_: '',
    ps_: ''
  }),

  computed: {
    ...mapGetters('amaac', ['gmb', 'gsb', 'ps']),
    vma() {
      // VMA = 100 - Gmb * Ps / Gsb
      const gmb = Number(this.gmb)
      const ps = Number(this.ps)
      const gsb = Number(this.gsb)
      if (gmb === 0 && ps === 0 && gsb === 0) return '0.000'
      const vma = 100 - (gmb * ps) / gsb
      return vma.toFixed(3)
    }
  },

  watch: {
    gmb_() {
      const gmb = this.gmb
      this.updateGmb({ value: gmb })
    }
  },

  methods: {
    ...mapMutations('amaac', ['updateGmb', 'updateGsb', 'updatePs']),
    calculateGmb() {
      const gmb = this.gmb_
      this.updateGmb({ value: gmb })
    },
    calculateGsb() {
      const gsb = this.gsb_
      this.updateGsb({ value: gsb })
    },
    calculatePs() {
      const ps = this.ps_
      this.updatePs({ value: ps })
    }
  },

  mounted() {
    this.gmb_ = this.gmb
    this.gsb_ = this.gsb
    this.ps_ = this.ps
  },
}
</script>
