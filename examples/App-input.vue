<template>
  <div id="app">
    <hjf-input v-model="username" placeholder="请输入用户名..." :name="username" clearable></hjf-input>
    <br />
    <hjf-input
      v-model="password"
      type="password"
      placeholder="请输入密码..."
      :name="password"
      show-password
    ></hjf-input>
    <!-- <hjf-input v-model="username" clearable></hjf-input> -->
    <!-- <hjf-input v-model="username" show-password></hjf-input> -->
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
  .hjf-input {
    width: 220px;
  }
}
</style>
