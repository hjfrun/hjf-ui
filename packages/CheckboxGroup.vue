<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'hjf-checkbox-group',
  props: {
    value: {
      type: Array
    }
  },
  provide() {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
