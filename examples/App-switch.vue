<template>
  <div id="app">
    <!-- <hjf-switch v-model="active"></hjf-switch> -->
    <hjf-switch v-model="active" name="username" active-color="red" inactive-color="green"></hjf-switch>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      active: false
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
#app {
}
</style>
