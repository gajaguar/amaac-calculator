<template>
  <div>
    <p class="title">Resultados</p>
    <form>
      <app-field
        :key="r"
        :label="result.label"
        :readonly="true"
        :value="result.data"
        v-for="(result, r) in results"
      />
    </form>
  </div>
</template>

<script>
import AppField from '@/components/AppField.vue'
import results from '@/utils/results'
import { mapGetters } from 'vuex'

export default {
  name: 'Results',

  components: { AppField },

  data: () => ({
    results
  }),

  computed: {
    ...mapGetters('amaac', ['abs', 'gb', 'gsa', 'gsb', 'pb', 'pb_', 'ps'])
  },

  watch: {
    abs(value) {
      this.results[3].data = value
    },
    gb(value) {
      this.results[6].data = value
    },
    gsa(value) {
      this.results[5].data = value
    },
    gsb(value) {
      this.results[4].data = value
    },
    pb(value) {
      this.results[1].data = value
    },
    pb_(value) {
      this.results[0].data = value
    },
    ps(value) {
      this.results[2].data = value
    }
  }
}
</script>
