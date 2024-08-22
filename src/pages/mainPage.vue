<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import words from '../settings/lang/langs.json'
import { useRouter } from 'vue-router';

const router = useRouter()
const {t, locale} = useI18n({useScope: 'global'})
const lang = ref(locale)
const isOptionModal = ref(false)
const zodiac_sign = ref(null)
const sign_id = ref(null)

function selectSign(idx){
   zodiac_sign.value = words.en.zodiac_signs[idx].name.toLowerCase()
   sign_id.value = idx
   console.log(idx)
   isOptionModal.value = true
}

function selectSignAndDate(date){
   switch (date) {
      case 0:
         router.push(`/horoscope?sign=${zodiac_sign.value}&date=today&idx=${sign_id.value}`)
         break;
      case 1:
         router.push(`/horoscope?sign=${zodiac_sign.value}&date=week&idx=${sign_id.value}`)
         break;
      case 2:
         router.push(`/horoscope?sign=${zodiac_sign.value}&date=month&idx=${sign_id.value}`)
         break;
      default:
         router.push('/error')
         break;
   }
   // router.push(`/horoscope?sign=${zodiac_sign.value}&date=${date}&idx=${sign_id.value}`)
}
</script>

<template>
   <div v-if="!isOptionModal" class="flex flex-col items-center w-full">
      <p class="font-semibold mb-4">{{ $t('main_header') }}</p>
      <div class="grid grid-cols-2 gap-3 px-4">
         <div class="relative cursor-pointer flex justify-around items-center border-2 rounded-lg border-black dark:bg-white/45 dark:text-black p-px hover:scale-110 transition-transform duration-300 ease-in-out" v-for="(sign, index) in words[lang].zodiac_signs" :key="index" @click="selectSign(index)">
            <img :src="sign.img" class="w-5/12" :alt="`zodiac ${sign.name} icon`">
            <p class="">{{ sign.name }}</p>
         </div>
      </div>
   </div>
   <div v-if="isOptionModal">
      <div class="flex flex-col items-center gap-3">
         <p class="p-2 cursor-pointer bg-white/75 rounded-lg dark:text-black hover:scale-110 transition-transform duration-300 ease-in-out" v-for="(option, index) in words[lang].zodiac_options" :key="index" @click="selectSignAndDate(index)">{{ option }}</p>
         <p class="p-1 bg-white/50 cursor-pointer rounded-lg mt-4 dark:text-black" @click="isOptionModal = false">{{ $t('back_button') }}</p>
      </div>
   </div>
</template>