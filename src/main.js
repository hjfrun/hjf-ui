import Vue from 'vue'
import App from './App.vue'

import JfButton from './components/Button'
import JfDialog from './components/Dialog'

Vue.component(JfButton.name, JfButton)
Vue.component(JfDialog.name, JfDialog)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
