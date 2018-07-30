import Vue from 'vue'
import 'reflect-metadata'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

Vue.filter('uppercase', (value: string): string => {
  return value.toUpperCase()
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
