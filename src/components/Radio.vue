<template>
  <label class="jf-radio" :class="{'is-checked': label===model}">
    <span class="jf-radio__input">
      <span class="jf-radio__inner"></span>
      <input type="radio" class="jf-radio__original" v-model="model" :value="label" :name="name" />
    </span>
    <span class="jf-radio__label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'jf-radio',
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    value: null,
    name: {
      type: String,
      default: ''
    }
  },
  inject: {
    RadioGroup: {
      default: ''
    }
  },
  computed: {
    model: {
      get() {
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set(value) {
        // 触发父组件的input事件
        this.isGroup
          ? this.RadioGroup.$emit('input', value)
          : this.$emit('input', value)
      }
    },
    isGroup() {
      return !!this.RadioGroup
    }
  }
}
</script>

<style lang="scss" scoped>
.jf-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  .jf-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .jf-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .jf-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .jf-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
// 选中的样式
.jf-radio.is-checked {
  .jf-radio__input {
    .jf-radio__inner {
      border-color: #409eff;
      background-color: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .jf-radio__label {
    color: #409eff;
  }
}
</style>
