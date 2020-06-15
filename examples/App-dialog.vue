<template>
  <div id="app">
    <hjf-button @click="visible=!visible">显示</hjf-button>
    <hjf-dialog :visible.sync="visible" title="温馨提示" width="60%" top="30vh">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <template v-slot:footer>
        <hjf-button type="primary" @click="visible=false">确定</hjf-button>
        <hjf-button @click="visible=false">取消</hjf-button>
      </template>
    </hjf-dialog>
    <!-- <hjf-dialog>
      <template v-slot:title>
        <h2>我是标题</h2>
      </template>
    </hjf-dialog>-->
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      visible: false
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;
  .hjf-button {
    margin-bottom: 20px;
  }
}
</style>
