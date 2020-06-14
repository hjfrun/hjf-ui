import Vue from 'vue'
import App from './App.vue'

import Button from './components/Button'
import Dialog from './components/Dialog'
import Input from './components/Input'
import Switch from './components/Switch'
import Radio from './components/Radio'
import RadioGroup from './components/RadioGroup'

Vue.component(Button.name, Button)
Vue.component(Dialog.name, Dialog)
Vue.component(Input.name, Input)
Vue.component(Switch.name, Switch)
Vue.component(Radio.name, Radio)
Vue.component(RadioGroup.name, RadioGroup)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
