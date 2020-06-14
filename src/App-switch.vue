<template>
  <div id="app">
    <!-- <jf-switch v-model="active"></jf-switch> -->
    <jf-switch v-model="active" name="username" active-color="red" inactive-color="green"></jf-switch>
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
