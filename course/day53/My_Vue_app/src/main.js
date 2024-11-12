import './assets/main.css'

import { createApp } from 'vue'
//导入一个自定义组键
import App from './App.vue'
//导入 Vue-router 
import router from './router'
//创建一个Vue实例
const app = createApp(App)
//声明vue实例要使用router
app.use(router)
//将vue实例挂载到id为app的元素上
app.mount('#app')
