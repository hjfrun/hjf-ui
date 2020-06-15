<template>
  <div id="app">
    <hjf-button>我的新按钮</hjf-button>
    <!-- <hjf-form :model="model" labelWidth="100px">
      <hjf-form-item label="用户名">
        <hjf-input v-model="model.username" placeholder="请输入用户名"></hjf-input>
      </hjf-form-item>
      <hjf-form-item label="选择">
        <hjf-switch v-model="model.active"></hjf-switch>
      </hjf-form-item>
    </hjf-form>-->
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      model: {
        username: '',
        active: false
      }
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
