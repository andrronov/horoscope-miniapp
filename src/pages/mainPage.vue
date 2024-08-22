<script setup>
import { onBeforeMount, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { BackButton } from "vue-tg";
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
   console.log(date);
   router.push(`/horoscope?sign=${zodiac_sign.value}&date=${date}&idx=${sign_id.value}`)
}
</script>

<template>
   <div v-if="!isOptionModal" class="flex flex-col items-center w-full">
      <p class="font-semibold mb-4">{{ $t('main_header') }}</p>
      <div class="grid grid-cols-2 gap-3 px-4">
         <div class="relative flex justify-around items-center border-2 rounded-lg border-black dark:bg-white/45 dark:text-black p-px hover:scale-110 transition-transform duration-300 ease-in-out" v-for="(sign, index) in words[lang].zodiac_signs" :key="index" @click="selectSign(index)">
            <img :src="sign.img" class="w-5/12" :alt="`zodiac ${sign.name} icon`">
            <p class="">{{ sign.name }}</p>
         </div>
      </div>
   </div>
   <div v-if="isOptionModal">
      <div class="flex flex-col items-center gap-3">
         <p class="p-2 bg-white/75 rounded-lg dark:text-black hover:scale-110 transition-transform duration-300 ease-in-out" v-for="(option, index) in words[lang].zodiac_options" :key="index" @click="selectSignAndDate(index)">{{ option }}</p>
         <p class="p-1 bg-white/50 rounded-lg mt-4 dark:text-black" @click="isOptionModal = false">{{ $t('back_button') }}</p>
      </div>
      <BackButton @click="router.push('/main')" />
   </div>
</template>