<script setup>
import { onBeforeMount, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import wrapperComponent from './components/wrapperComponent.vue'
import modalComponent from './components/modalComponent.vue';

const {t, locale} = useI18n({useScope: 'global'})
const lang = ref(locale)
const isChangeLangModal = ref(false)
const darkMode = ref(null)

function changeLanguage(language){
  lang.value = language
  localStorage.setItem('userLang', language)
  isChangeLangModal.value = false
}

// Не удалять

onBeforeMount(() => {
   const theme = Telegram.WebApp.colorScheme;
   theme === 'dark' ? darkMode.value = true : darkMode.value = false
})

onBeforeMount(() => {
  if(localStorage.getItem('userLang')){
    lang.value = localStorage.getItem('userLang')
  } else {
    lang.value = Telegram.WebApp.initDataUnsafe.user.language_code;
    localStorage.setItem('userLang', lang.value)
  }
})
</script>

<template>
  <wrapperComponent :title="$t('title')" :dark-mode="darkMode">

    <!-- Сменить язык -->
    <modalComponent :is-active="isChangeLangModal" @close="isChangeLangModal = false">
      <div class="dark:text-black flex flex-col items-center gap-4">
        <p class="font-medium">Select language:</p>
        <button @click="changeLanguage('en')">English</button>
        <button @click="changeLanguage('ru')">Russian</button>
      </div>
    </modalComponent>
    
    <div>
      <!-- Верхние кнопки -->
      <button @click="isChangeLangModal = true"><img src="/img/lang.svg" alt="lang icon" class="w-8 h-8 absolute top-2 left-2 bg-white/50 dark:bg-white rounded-lg dark:text-white dark:fill-white"></button>    
      <button v-if="!darkMode" @click="darkMode = true"><img src="/img/moon.svg" alt="lang icon" class="w-8 h-8 absolute top-2 right-2 bg-white/50 dark:bg-white rounded-lg dark:text-white dark:fill-white"></button>
      <button v-if="darkMode" @click="darkMode = false"><img src="/img/sun.svg" alt="lang icon" class="w-8 h-8 absolute top-2 right-2 bg-white/50 dark:bg-white rounded-lg dark:text-white dark:fill-white"></button>
  
      <!-- Контент -->
       <router-view />
    </div>
  </wrapperComponent>
</template>
