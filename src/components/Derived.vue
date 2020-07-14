<template>
  <div>
    <p class="title">Resultados Derivados</p>
    <form>
      <app-field
        :readonly="true"
        :value="gse"
        label="Densidad efectiva del agregado [G _se_ ]"
      />
      <app-field
        :readonly="true"
        :value="pba"
        label="Procentaje de asfalto absorbido [P _ba_ ]"
      />
      <app-field
        :readonly="true"
        :value="pbe"
        label="Procentaje de asfalto efectivo [P _be_ ]"
      />
      <app-field
        :readonly="true"
        :value="vma"
        label="Vacíos en el agrgado [VMA]"
      />
      <app-field
        :readonly="true"
        :value="pa"
        label="Vacíos en la mezcla compacta [P _a_ ]"
      />
      <app-field
        :readonly="true"
        :value="vfa"
        label="Vacíos llenados por el asfalto [VFA]"
      />
      <app-field
        :readonly="true"
        :value="fb"
        label="Relación Polvo - Asfalto [F/B]"
      />
    </form>
  </div>
</template>

<script>
import AppField from '@/components/AppField.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Derived',

  components: { AppField },

  computed: {
    ...mapGetters('amaac', ['fb', 'gse', 'pa', 'pba', 'pbe', 'vfa', 'vma'])
  }
}
</script>
