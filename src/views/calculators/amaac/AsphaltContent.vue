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
import aggregates from '@/utils/amaac/calculations/aggregates'
import asphalt from '@/utils/amaac/calculations/asphalt'

export default {
  name: 'AsphaltContent',

  components: { AppField },

  data: () => ({
    aggregates,
    asphalt,
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
      const pb = this.asphalt.content.byMixture(this.pb_)
      this.updatePb({ value: pb })
    },
    calculatePb_() {
      const pb_ = this.asphalt.content.byAggregates(this.wbi, this.wbf, this.wp)
      this.updatePb_({ value: pb_ })
    },
    calculatePs() {
      const ps = this.aggregates.content.byMixture(this.pb)
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
