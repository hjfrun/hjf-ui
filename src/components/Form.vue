<template>
  <div class="jf-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'jf-form',
  provide() {
    return {
      Form: this
    }
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '80px'
    }
  }
}
</script>
