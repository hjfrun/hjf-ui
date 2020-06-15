<template>
  <div id="app">
    <jf-checkbox v-model="active">是否选中</jf-checkbox>

    <jf-checkbox-group v-model="hobby">
      <jf-checkbox label="抽烟"></jf-checkbox>
      <jf-checkbox label="喝酒"></jf-checkbox>
      <jf-checkbox label="看电影"></jf-checkbox>
    </jf-checkbox-group>
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
