import Vue from 'vue'
import App from './App.vue'
import 'phoenix-styles/less/phoenix-styles.less'

// 第一种：全局引入
import SwanUI from 'swan-ui'
Vue.use(SwanUI)

//第二种：按需引入
// import {Button,Image,ImageList} from 'swan-ui'
// Vue.component(Button.name,Button)
// Vue.component(Image.name,Image)
// Vue.component(ImageList.name,ImageList)

//第三种：按需引入
// import Button from 'swan-ui/lib/Button'
// import Image from 'swan-ui/lib/Image'
// import ImageList from 'swan-ui/lib/ImageList'
// Vue.component(Button.name,Button)
// Vue.component(Image.name,Image)
// Vue.component(ImageList.name,ImageList)

//第四种：App.vue中局部注册
new Vue({
  el: '#app',
  render: h => h(App)
})