<template>
  <div class="jf-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'jf-radio-group',
  props: {
    value: null
  },
  // provide 与 inject 用来做祖孙之间的组件通讯
  provide() {
    return {
      RadioGroup: this
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
