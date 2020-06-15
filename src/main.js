import Vue from 'vue'
import App from './App.vue'

import Button from './components/Button'
import Dialog from './components/Dialog'
import Input from './components/Input'
import Switch from './components/Switch'
import Radio from './components/Radio'
import RadioGroup from './components/RadioGroup'
import Checkbox from './components/Checkbox'
import CheckboxGroup from './components/CheckboxGroup'
import Form from './components/Form'
import FormItem from './components/FormItem'

Vue.component(Button.name, Button)
Vue.component(Dialog.name, Dialog)
Vue.component(Input.name, Input)
Vue.component(Switch.name, Switch)
Vue.component(Radio.name, Radio)
Vue.component(RadioGroup.name, RadioGroup)
Vue.component(Checkbox.name, Checkbox)
Vue.component(CheckboxGroup.name, CheckboxGroup)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
