<template>
  <div>
    <p class="title">Resultados Directos</p>
    <form>
      <app-field
        :readonly="true"
        :value="pb_"
        label="Contenido de asfalto por agregado seco (%) [P _b_ ']"
      />
      <app-field
        :readonly="true"
        :value="pb"
        label="Contenido de asfalto en la mezcla (%) [P _b_ ]"
      />
      <app-field
        :readonly="true"
        :value="ps"
        label="Contenido de agregado en la mezcla (%) [P _s_ ]"
      />
      <app-field
        :readonly="true"
        :value="abs"
        label="Absorción del agrgado (%)"
      />
      <app-field
        :readonly="true"
        :value="gsb"
        label="Densidad relativa (seca) bruta del agregado [G _sb_ ]"
      />
      <app-field
        :readonly="true"
        :value="gsa"
        label="Densidad relativa aparente del agregado [G _sa_ ]"
      />
      <app-field
        :readonly="true"
        :value="gb"
        label="Densidad relativa del asfalto [G _b_ ]"
      />
      <app-field
        :readonly="true"
        :value="gmb"
        label="Densidad relativa bruta de la mezcla compacta [G _mb_ ]"
      />
      <app-field
        :readonly="true"
        :value="gmm"
        label="Densidad relativa Máxima de la mezcla [G _mm_ ]"
      />
    </form>
  </div>
</template>

<script>
import AppField from '@/components/AppField.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Direct',

  components: { AppField },

  computed: {
    ...mapGetters('amaac', [
      'abs',
      'gb',
      'gmb',
      'gmm',
      'gsa',
      'gsb',
      'pb',
      'pb_',
      'ps'
    ])
  }
}
</script>
