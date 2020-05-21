import Vue from 'vue'
import App from './App.vue'
import router from './router'
import styles from '@/styles/main.sass'

Vue.config.productionTip = false

new Vue({
  router,
  styles,
  render: (h) => h(App)
}).$mount('#app')
