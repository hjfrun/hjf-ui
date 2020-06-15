<template>
  <div id="app">
    <!-- <jf-radio label="1" v-model="gender">男</jf-radio>
    <jf-radio label="0" v-model="gender">女</jf-radio>-->
    <!-- <jf-radio label="1" v-model="gender"></jf-radio>
    <jf-radio label="0" v-model="gender"></jf-radio>-->

    <jf-radio-group v-model="gender">
      <jf-radio label="1">男</jf-radio>
      <jf-radio label="0">女</jf-radio>
    </jf-radio-group>
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
