import { createApp } from 'vue'
import { useI18n } from 'vue-i18n'
import { i18n } from './libs/i18n'
import router from './router'
import './style.css'
import App from './App.vue'

createApp(App, {
   setup() {
      const {t} = useI18n()
      return {t}
   }
}).use(router).use(i18n).mount('#app')
