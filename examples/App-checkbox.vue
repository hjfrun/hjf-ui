<template>
  <div id="app">
    <hjf-checkbox v-model="active">是否选中</hjf-checkbox>

    <hjf-checkbox-group v-model="hobby">
      <hjf-checkbox label="抽烟"></hjf-checkbox>
      <hjf-checkbox label="喝酒"></hjf-checkbox>
      <hjf-checkbox label="看电影"></hjf-checkbox>
    </hjf-checkbox-group>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      active: true,
      hobby: ['抽烟', '喝酒', '看电影']
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
