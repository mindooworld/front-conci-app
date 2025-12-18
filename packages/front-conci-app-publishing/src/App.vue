<template>
  <v-app>
    <v-app-bar color="white" elevation="0" class="border-b">
      <template v-slot:prepend>
        <span class="text-h5 font-weight-black text-orange ml-2" style="font-family: sans-serif; letter-spacing: -1px;">
          CONCI
        </span>
      </template>

      <template v-slot:append>
        <v-btn icon="mdi-bell-outline" color="grey-darken-1"></v-btn>
        <v-btn icon="mdi-menu" color="grey-darken-1"></v-btn>
      </template>
    </v-app-bar>

    <v-main class="bg-grey-lighten-4">
      <v-container class="pa-4" style="max-width: 480px; background: white; min-height: 100vh;">
        
        <div class="d-flex flex-column align-center justify-center mt-10">
          <v-icon icon="mdi-check-circle" color="success" size="64" class="mb-4"></v-icon>
          <h2 class="text-h6 font-weight-bold mb-2">세팅 완료!</h2>
          <p class="text-body-2 text-grey mb-6">이제 여기서 디자인을 시작하면 됩니다.</p>
          
          <v-btn color="primary" size="large" rounded="pill" block>
            티켓팅 시작하기
          </v-btn>
        </div>

      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  // 자바스크립트 로직이 들어갈 곳
</script>

<style>
/* 모바일 앱처럼 보이게 배경색 처리 */
html {
  background-color: #f5f5f5; 
}
</style>