<script setup>
// import { MainButton } from 'vue-tg';
// import { onMounted, ref } from 'vue';

import { onBeforeMount, ref } from "vue"

// const lang = ref(null)
// const theme = ref(null)

// onMounted(() => {
//   lang.value = Telegram.WebApp.initDataUnsafe.user.language_code;
//   theme.value = Telegram.WebApp.colorScheme;
//   console.log('Язык пользователя:', lang.value);
//   console.log('Тема устройства:', theme.value);
// })
// onMounted(() => {
//   let response = fetch('https://poker247tech.ru/get_horoscope/', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json;charset=utf-8'
//   },
//   body: JSON.stringify({
//     "sign": "aries",
//     "language": "original",
//     "period": "today"
// })
// }).then(data => data.json()).then(data => console.log('data', data))
// })

const props = defineProps({
   title: {type: String}
})

const darkMode = ref(null)
onBeforeMount(() => {
   const theme = Telegram.WebApp.colorScheme;
   theme === 'dark' ? darkMode.value = true : darkMode.value = false
})
</script>

<template>
   <div :class="{'dark': darkMode}">
      <div class="flex flex-col justify-between items-center py-2 min-h-screen bg-gradient-to-r from-purple-500 via-blue-400 to-white animate-gradient text-black dark:text-white dark:from-purple-950 dark:via-slate-900-900 dark:to-black">
         <p class="font-semibold text-xl">{{ props.title }}</p>
         <slot />
         <p class="text-xs font-thin">github: andrronov</p>
      </div>
   </div>
</template>

<style>
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-gradient {
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}
</style>