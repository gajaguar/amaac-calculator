<template>
  <div>
    <div class="columns">
      <div class="column">
        <div class="box"><asphalt-content /></div>
      </div>
      <div class="column">
        <div class="box"><aggregates-bulk-gravity /></div>
      </div>
      <div class="column">
        <div class="box"><asphalt-gravity /></div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="box"><mixture-bulk-gravity /></div>
      </div>
    </div>
  </div>
</template>

<script>
import AggregatesBulkGravity from '@/views/calculators/amaac/AggregatesBulkGravity.vue'
import AsphaltContent from '@/views/calculators/amaac/AsphaltContent.vue'
import AsphaltGravity from '@/views/calculators/amaac/AsphaltGravity.vue'
import MixtureBulkGravity from '@/views/calculators/amaac/MixtureBulkGravity.vue'

export default {
  name: 'Index',

  components: {
    AggregatesBulkGravity,
    AsphaltContent,
    AsphaltGravity,
    MixtureBulkGravity
  }
}
</script>
