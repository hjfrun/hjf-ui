<template>
  <div class="hjf-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'hjf-form',
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
