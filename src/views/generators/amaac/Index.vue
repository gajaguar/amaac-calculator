<template>
  <div class="tile is-ancestor">
    <div class="tile is parent is-vertical">
      <div class="tile is-parent">
        <div class="tile is-child box">
          <vma />
        </div>
      </div>
    </div>
    <div class="tile is parent is-vertical">
      <div class="tile is-parent">
        <div class="tile is-child box">
          <vcm />
        </div>
      </div>
      <div class="tile is-parent">
        <div class="tile is-child box">
          <vfa />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vcm from '@/views/generators/amaac/Vcm.vue'
import Vfa from '@/views/generators/amaac/Vfa.vue'
import Vma from '@/views/generators/amaac/Vma.vue'

export default {
  name: 'Amaac',

  components: {
    Vcm,
    Vfa,
    Vma
  }
}
</script>
