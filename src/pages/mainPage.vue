<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

const router = useRouter();
const { t, tm } = useI18n();

const isOptionModal = ref(false);
const zodiacSign = ref(null);

function selectSign(zodiac) {
  zodiacSign.value = zodiac;
  isOptionModal.value = true;
}

function selectDate(date) {
  router.push({
    name: "horoscope",
    query: {
      sign: zodiacSign.value.slug,
      date: date.slug,
      idx: zodiacSign.value.id,
    },
  });
}
</script>

<template>
  <div v-if="!isOptionModal" class="flex flex-col items-center w-full">
    <p class="font-semibold mb-4">{{ t("main_header") }}</p>
    <div class="grid grid-cols-2 gap-3 px-4">
      <div
        class="relative cursor-pointer flex justify-around items-center border-2 rounded-lg border-black dark:bg-white/45 dark:text-black p-px hover:scale-110 transition-transform duration-300 ease-in-out"
        v-for="(sign, index) in tm('zodiac_signs')"
        :key="index"
        @click="selectSign({ ...sign, id: index })"
      >
        <img
          :src="`img/zodiacs/${sign.slug}.svg`"
          class="w-5/12"
          :alt="`zodiac ${sign.name} icon`"
        />
        <p>{{ sign.name }}</p>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="flex flex-col items-center gap-3">
      <button
        class="p-2 min-w-32 text-center cursor-pointer bg-white/75 rounded-lg dark:text-black hover:scale-110 transition-transform duration-300 ease-in-out"
        v-for="(option, index) in tm('zodiac_options')"
        :key="index"
        @click="selectDate(option)"
      >
        {{ option.name }}
      </button>
      <p
        class="p-1 bg-white/50 cursor-pointer rounded-lg mt-4 dark:text-black"
        @click="isOptionModal = false"
      >
        {{ t("back_button") }}
      </p>
    </div>
  </div>
</template>
