<template>
  <div class="hjf-form-item">
    <label :style="labelStyle" class="hjf-form-item__label">{{ label }}</label>
    <div class="hjf-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hjf-form-item',
  inject: {
    Form: {
      default: ''
    }
  },
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  computed: {
    labelStyle() {
      return {
        width: this.Form.labelWidth
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.hjf-form-item {
  margin-bottom: 25px;
  .hjf-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .hjf-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>
