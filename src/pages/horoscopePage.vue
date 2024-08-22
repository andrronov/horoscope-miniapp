<template>
</template>

<script setup>
import { onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { BackButton } from "vue-tg";
const route = useRoute()
console.log(route.query, localStorage.getItem('userLang'));

onBeforeMount(() => {
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
}).then(data => data.json()).then(data => console.log('data', data))
})
</script>

<style>

</style>