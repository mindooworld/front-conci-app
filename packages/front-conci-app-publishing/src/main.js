import { createApp } from 'vue'
import App from './App.vue'

// ✨ Vuetify 설정 가져오기
import 'vuetify/styles' // 기본 스타일
import '@mdi/font/css/materialdesignicons.css' // 아이콘(mdi)
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Vuetify 인스턴스 생성
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
  },
})

const app = createApp(App)

// ✨ 앱에 Vuetify 장착!
app.use(vuetify)
app.mount('#app')