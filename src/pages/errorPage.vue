<script setup>
import { BackButton } from "vue-tg";
</script>

<template>
  <h1 class="fon-semibold p-2 bg-red-500 text-white">{{ $t("error_msg") }}</h1>
  <BackButton @click="$router.push({ name: 'main' })" />
</template>
