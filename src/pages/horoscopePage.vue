<template>
   <div v-if="horoscope" class="border-2 border-black dark:border-white rounded-lg text-center px-2 mx-2">
      <p class="font-semibold mb-4 underline">{{ $t('horoscope_for') }} {{ words[locale].zodiac_signs[route.query.idx].name }} {{ `(${words[locale].zodiac_options[dateName]})` }}</p>
      <p>{{ horoscope.horoscope }}</p>
   </div>
   <p v-else>{{ $t('loading') }}</p>
   <BackButton @click="$router.push('/main')" />
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from 'vue-i18n';
import words from '../settings/lang/langs.json'
import { BackButton } from "vue-tg";

const {t, locale} = useI18n({useScope: 'global'})
const route = useRoute()
const horoscope = ref(null)
const dateName = ref(route.query.date)
console.log(locale.value, dateName.value);

function fetchHoroscope(){
   let dateName;
   switch (route.query.date) {
      case 0:
         dateName = 'today'
         break;
      case 1:
         dateName = 'week'
         break;
      case 2:
         dateName = 'month'
         break;
      default:
         dateName = 'today'
         break;
   }

   fetch('https://poker247tech.ru/get_horoscope/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify({
    "sign": route.query.sign,
    "language": localStorage.getItem('userLang') === 'ru' ? 'original' : 'translated',
    "period": dateName
   })
   }).then(data => data.json()).then(data => horoscope.value = data)
}

onBeforeMount(() => {
   fetchHoroscope()
})
</script>

<style>

</style>