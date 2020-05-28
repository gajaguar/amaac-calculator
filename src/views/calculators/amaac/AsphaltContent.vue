<template>
  <div>
    <p class="title">
      Contenido de Asfalto en la Mezcla (P<sub>b</sub>)
    </p>
    <form>
      <app-field
        @input="calculateAll"
        label="Masa del papel filtro (g)"
        step="0.1"
        v-model="wp"
      />
      <app-field
        @input="calculateAll"
        label="Masa bruta previa al lavado (g)"
        step="0.1"
        v-model="wbi"
      />
      <app-field
        @input="calculateAll"
        label="Masa bruta posterior al lavado (g)"
        step="0.1"
        v-model="wbf"
      />
    </form>
  </div>
</template>
<script>
import AppField from '@/components/AppField.vue'
import { mapGetters, mapMutations } from 'vuex'
import {
  aggregatesByMixture,
  asphaltByAggregates,
  asphaltByMixture
} from '@/utils/amaac'

export default {
  name: 'AsphaltContent',

  components: { AppField },

  data: () => ({
    aggregatesByMixture,
    asphaltByAggregates,
    asphaltByMixture,
    wbi: '',
    wbf: '',
    wp: ''
  }),

  computed: {
    ...mapGetters('amaac', ['pb', 'pb_', 'ps'])
  },

  methods: {
    ...mapMutations('amaac', ['updatePb_', 'updatePb', 'updatePs']),
    calculatePb() {
      const pb = this.asphaltByMixture(this.pb_)
      this.updatePb({ value: pb })
    },
    calculatePb_() {
      const pb_ = this.asphaltByAggregates(this.wbi, this.wbf, this.wp)
      this.updatePb_({ value: pb_ })
    },
    calculatePs() {
      const ps = this.aggregatesByMixture(this.pb)
      this.updatePs({ value: ps })
    },
    calculateAll() {
      this.calculatePb_()
      this.calculatePb()
      this.calculatePs()
    }
  }
}
</script>
