<script setup>
import { ref } from "vue";
import WrapperComponent from "./components/wrapperComponent.vue";
import ModalComponent from "./components/modalComponent.vue";
import { useAppStore } from "./stores/app.js";

const appStore = useAppStore();

const isChangeLangModal = ref(false);

function changeLanguage(language) {
  appStore.setUserLang(language);
  isChangeLangModal.value = false;
}
</script>

<template>
  <WrapperComponent :title="$t('title')" :dark-mode="appStore.theme">
    <ModalComponent
      :is-active="isChangeLangModal"
      @close="isChangeLangModal = false"
    >
      <div class="dark:text-black flex flex-col items-center gap-4">
        <p class="font-medium">Select language:</p>
        <button @click="changeLanguage('en')">English</button>
        <button @click="changeLanguage('ru')">Русский</button>
      </div>
    </ModalComponent>
    <div>
      <button @click="isChangeLangModal = true">
        <img
          src="/img/lang.svg"
          alt="lang icon"
          class="setting-button top-2 left-2"
        />
      </button>
      <button @click="appStore.switchTheme()">
        <img
          :src="appStore.theme !== 'dark' ? '/img/moon.svg' : '/img/sun.svg'"
          alt="theme icon"
          class="setting-button top-2 right-2"
        />
      </button>
      <RouterView />
    </div>
  </WrapperComponent>
</template>

<style scoped>
.setting-button {
  @apply w-8 h-8 absolute bg-white/50 dark:bg-white rounded-lg dark:text-white dark:fill-white;
}
</style>
