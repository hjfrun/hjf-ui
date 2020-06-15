<template>
  <div id="app">
    <jf-form :model="model" labelWidth="100px">
      <jf-form-item label="用户名">
        <jf-input v-model="model.username" placeholder="请输入用户名"></jf-input>
      </jf-form-item>
      <jf-form-item label="选择">
        <jf-switch v-model="model.active"></jf-switch>
      </jf-form-item>
    </jf-form>
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
