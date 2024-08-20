<script setup>
import wrapperComponent from './components/wrapperComponent.vue'
import modalComponent from './components/modalComponent.vue';
import { onBeforeMount, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const {t, locale} = useI18n({useScope: 'global'})
const lang = ref(locale)
const isChangeLangModal = ref(false)

onBeforeMount(() => {
  lang.value = Telegram.WebApp.initDataUnsafe.user.language_code;
})
</script>

<template>
  <modalComponent :is-active="isChangeLangModal" @close="isChangeLangModal = false" />
  
  <wrapperComponent :title="$t('title')">
    <!-- Выбрать другую иконку -->
    <button @click="isChangeLangModal = true"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h2.894l2 2v1a2 2 0 002 2h4a2 2 0 002-2v-1a2 2 0 00-2-2H10.5a2 2 0 00-1.5-1.5l-2-2v-1a2 2 0 00-2-2H5a2 2 0 00-2 2v1a2 2 0 002 2zm0-1a1 1 0 00-1 1v3a1 1 0 002 0V6.414l.293.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-2 2a1 1 0 01-1.414-1.414L5 12.414V6.414a1 1 0 011 1z" /></svg></button>
  </wrapperComponent>
</template>
