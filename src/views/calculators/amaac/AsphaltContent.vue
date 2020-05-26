<template>
  <div>
    <p class="title">Contenido de Asfalto en la Mezcla (P<sub>b</sub>)</p>
    <form>
      <!-- data -->
      <app-field
        @input="calculateAll"
        :key="f"
        :label="field.label"
        step="0.1"
        v-for="(field, f) in fields"
        v-model="field.data"
      />

      <!-- results -->
      <app-field
        :key="r"
        :label="result.label"
        :readonly="true"
        :value="result.data"
        color="is-primary"
        v-for="(result, r) in results"
      />
    </form>
  </div>
</template>
<script>
import AppField from '@/components/AppField.vue'
import {
  aggregatesByMixture,
  asphaltByAggregates,
  asphaltByMixture
} from '@/utils/contents'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'AsphaltContent',

  components: { AppField },

  data: () => ({
    aggregatesByMixture,
    asphaltByAggregates,
    asphaltByMixture,
    fields: [
      {
        label: 'Masa del papel filtro (g)',
        data: ''
      },
      {
        label: 'Masa bruta previa al lavado (g)',
        data: ''
      },
      {
        label: 'Masa bruta posterior al lavado (g)',
        data: ''
      }
    ],
    results: [
      {
        label: "Contenido de asfalto por agregado seco (%) [P _b_ ']",
        data: ''
      },
      {
        label: 'Contenido de asfalto en la mezcla (%) [P _b_ ]',
        data: ''
      },
      {
        label: 'Contenido de agregado en la mezcla (%) [P _s_ ]',
        data: ''
      }
    ]
  }),

  computed: {
    ...mapState('contents', ['pb', 'pb_', 'ps']),
    wp() {
      return this.fields[0].data
    },
    wbi() {
      return this.fields[1].data
    },
    wbf() {
      return this.fields[2].data
    }
  },

  methods: {
    ...mapMutations('contents', ['updatePb_', 'updatePb', 'updatePs']),
    calculatePb() {
      const pb = this.asphaltByMixture(this.pb_)
      this.updatePb({ value: pb })
      this.results[1].data = this.pb
    },
    calculatePb_() {
      const pb_ = this.asphaltByAggregates(this.wbi, this.wbf, this.wp)
      this.updatePb_({ value: pb_ })
      this.results[0].data = this.pb_
    },
    calculatePs() {
      const ps = this.aggregatesByMixture(this.pb)
      this.updatePs({ value: ps })
      this.results[2].data = this.ps
    },
    calculateAll() {
      this.calculatePb_()
      this.calculatePb()
      this.calculatePs()
    }
  }
}
</script>
