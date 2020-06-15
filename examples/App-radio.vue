<template>
  <div id="app">
    <!-- <hjf-radio label="1" v-model="gender">男</hjf-radio>
    <hjf-radio label="0" v-model="gender">女</hjf-radio>-->
    <!-- <hjf-radio label="1" v-model="gender"></hjf-radio>
    <hjf-radio label="0" v-model="gender"></hjf-radio>-->

    <hjf-radio-group v-model="gender">
      <hjf-radio label="1">男</hjf-radio>
      <hjf-radio label="0">女</hjf-radio>
    </hjf-radio-group>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      gender: '1'
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
