import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
  plugins: [
    vue(),
    // Vuetify 플러그인 등록 (자동으로 필요한 컴포넌트만 가져옵니다)
    vuetify({ autoImport: true }),
  ],
})