<template>
  <div class="hjf-input" :class="{'hjf-input__suffix': showSuffix}">
    <input
      :type="showPassword ? (passwordVisible ? 'text': 'password'):type"
      class="hjf-input__inner"
      :class="{'is-disabled': disabled}"
      :placeholder="placeholder"
      :value="value"
      @input="(e)=>$emit('input', e.target.value)"
    />
    <span class="hjf-input__suffix" v-if="showSuffix">
      <i class="hjf-icon-cancel" v-if="clearable && value" @click="()=>$emit('input','')"></i>
      <i
        class="hjf-icon-visible"
        :class="{'hjf-icon-visible-active':passwordVisible}"
        v-if="showPassword"
        @click="passwordVisible=!passwordVisible"
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'hjf-input',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      passwordVisible: false
    }
  },
  computed: {
    showSuffix() {
      return this.clearable || this.showPassword
    }
  }
}
</script>

<style lang="scss" scoped>
.hjf-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .hjf-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    // input禁用样式
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}

.hjf-input__suffix {
  .hjf-input__inner {
    padding-right: 30px;
  }
  .hjf-input__suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .hjf-icon-visible-active {
      color: blue;
    }
  }
}
</style>
