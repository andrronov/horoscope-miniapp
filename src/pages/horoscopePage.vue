<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { BackButton } from "vue-tg";
import { useAppStore } from "../stores/app";

const route = useRoute();
const appStore = useAppStore();

const horoscope = ref(null);
const loading = ref(true);

function fetchHoroscope() {
  fetch("https://poker247tech.ru/get_horoscope/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      sign: route.query.sign,
      language: appStore.lang.value === "ru" ? "original" : "translated",
      period: route.query.date,
    }),
  })
    .then((data) => data.json())
    .then((data) => (horoscope.value = data))
    .finally(() => (loading.value = false));
}

onMounted(() => {
  fetchHoroscope();
});
</script>

<template>
  <div
    class="border-2 border-black dark:border-white rounded-lg text-center px-2 mx-2"
  >
    <p class="font-semibold mb-4 underline">
      {{ $t("horoscope_for") }}
      {{ $t(`zodiac_signs[${route.query.idx}].name`) }}
    </p>
    <p
      v-if="!loading && !horoscope"
      class="bg-red-500 p-2 rounded-lg text-white mt-3"
    >
      {{ $t("error_fetch") }}
    </p>
    <p v-if="horoscope">{{ horoscope.horoscope }}</p>
  </div>
  <p v-if="loading">{{ $t("loading") }}</p>
  <BackButton @click="$router.push({ name: 'main' })" />
</template>
