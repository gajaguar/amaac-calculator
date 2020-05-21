<template>
  <div class="field">
    <label :for="id" class="label" ref="label"> </label>
    <div class="control">
      <input
        :id="id"
        :max="max"
        :maxlength="max"
        :min="min"
        :minlength="min"
        :readonly="readonly"
        :step="step"
        :type="type"
        :value="value"
        @input="updateValue()"
        class="input"
        ref="element"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppField',

  props: {
    id: {
      type: String,
      required: false,
      default: ''
    },
    label: {
      type: String,
      required: true
    },
    max: {
      type: Number,
      required: false
    },
    min: {
      type: Number,
      required: false,
      default: 0
    },
    readonly: {
      type: Boolean,
      required: false,
      default: false
    },
    step: {
      type: String,
      required: false,
      default: '0.001'
    },
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    value: {
      type: String,
      required: false
    }
  },

  mounted() {
    const label = this.$refs.label
    let caption = this.label
    if (!caption) return ''
    caption = caption.replace(' _', '<sub>', 'gi')
    caption = caption.replace('_ ', '</sub>', 'gi')
    label.innerHTML = caption
  },

  methods: {
    updateValue() {
      this.$emit('input', this.$refs.element.value)
    }
  }
}
</script>

<style scoped></style>
