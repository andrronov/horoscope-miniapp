<template>
   <div v-if="horoscope" class="border-2 border-black dark:border-white rounded-lg text-center px-2 mx-2">
      <p class="font-semibold mb-4 underline">{{ $t('horoscope_for') }} {{ words[locale].zodiac_signs[route.query.idx].name }}</p>
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

function fetchHoroscope(){
   fetch('https://poker247tech.ru/get_horoscope/', {
   method: 'POST',
   headers: {
      'Content-Type': 'application/json;charset=utf-8'
   },
  body: JSON.stringify({
    "sign": route.query.sign,
    "language": localStorage.getItem('userLang') === 'ru' ? 'original' : 'translated',
    "period": route.query.date
   })
   }).then(data => data.json()).then(data => horoscope.value = data)
}

onBeforeMount(() => {
   fetchHoroscope()
})
</script>

<style>

</style>