<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <div class="tile is-child box">
          <div class="tabs is-centered">
            <ul>
              <li
                :class="{ 'is-active': tab.active }"
                :key="t"
                v-for="(tab, t) in tabs"
              >
                <a @click="toggler(t)">
                  {{ tab.caption }}
                </a>
              </li>
            </ul>
          </div>
          <asphalt-content v-show="tabs[0].active" />
          <aggregates-bulk-gravity v-show="tabs[1].active" />
          <asphalt-gravity v-show="tabs[2].active" />
          <mixture-bulk-gravity v-show="tabs[3].active" />
        </div>
      </div>
      <div class="tile is-parent is-4">
        <div class="tile is-child box">
          <results />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AggregatesBulkGravity from '@/views/calculators/amaac/AggregatesBulkGravity.vue'
import AsphaltContent from '@/views/calculators/amaac/AsphaltContent.vue'
import AsphaltGravity from '@/views/calculators/amaac/AsphaltGravity.vue'
import MixtureBulkGravity from '@/views/calculators/amaac/MixtureBulkGravity.vue'
import Results from '@/views/calculators/amaac/Results.vue'

export default {
  name: 'Index',

  components: {
    AggregatesBulkGravity,
    AsphaltContent,
    AsphaltGravity,
    MixtureBulkGravity,
    Results
  },

  data: () => ({
    tabs: [
      {
        caption: 'Contenidos',
        active: true
      },
      {
        caption: 'Agregados',
        active: false
      },
      {
        caption: 'Asflato',
        active: false
      },
      {
        caption: 'Mezcla',
        active: false
      }
    ]
  }),

  methods: {
    toggler(index) {
      for (let i in this.tabs) {
        this.tabs[i].active = false
      }
      this.tabs[index].active = true
    }
  }
}
</script>
