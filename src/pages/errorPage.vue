<template>
  <h1>Error: Page doesn't found</h1>
  <BackButton @click="router.push('/')" />
</template>

<script setup>
import { useRouter } from "vue-router";
import { BackButton } from "vue-tg";
const router = useRouter()
</script>