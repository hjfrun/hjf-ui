import Button from './Button'
import Dialog from './Dialog'
import Input from './Input'
import Checkbox from './Checkbox'
import CheckboxGroup from './CheckboxGroup'
import Radio from './Radio'
import RadioGroup from './RadioGroup'
import Switch from './Switch'
import Form from './Form'
import FormItem from './FormItem'
import './fonts/iconfont.css'

const components = [
  Button,
  Dialog,
  Input,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Switch,
  Form,
  FormItem
]

const install = Vue => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

// 判断是否直接引入文件, 如果是, 就不调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// 到处install方法
export default {
  install
}
