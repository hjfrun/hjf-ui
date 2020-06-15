<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'jf-checkbox-group',
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
