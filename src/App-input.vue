<template>
  <div id="app">
    <jf-input v-model="username" placeholder="请输入用户名..." :name="username" clearable></jf-input>
    <br />
    <jf-input
      v-model="password"
      type="password"
      placeholder="请输入密码..."
      :name="password"
      show-password
    ></jf-input>
    <!-- <jf-input v-model="username" clearable></jf-input> -->
    <!-- <jf-input v-model="username" show-password></jf-input> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      username: 'zs',
      password: ''
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
#app {
  .jf-input {
    width: 220px;
  }
}
</style>
