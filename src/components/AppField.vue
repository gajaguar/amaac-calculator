<template>
  <div class="field">
    <label :for="id" class="label" ref="label"> </label>
    <div class="control">
      <input
        :class="color"
        :id="id"
        :max="max"
        :maxlength="max"
        :min="min"
        :minlength="min"
        :readonly="readonly"
        :step="step"
        :type="type"
        :value="value"
        @input="$emit('input', $event.target.value)"
        class="input"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppField',

  props: {
    color: {
      type: String,
      required: false,
      default: ''
    },
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
      type: String,
      required: false
    },
    min: {
      type: String,
      required: false,
      default: '0'
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
      default: 'number'
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
    caption = caption.replace(' ^', '<sup>', 'gi')
    caption = caption.replace('^ ', '</sup>', 'gi')
    label.innerHTML = caption
  }
}
</script>

<style scoped></style>
