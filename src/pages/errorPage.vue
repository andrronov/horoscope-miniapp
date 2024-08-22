<template>
  <h1 class="fon-semibold p-2 bg-red-500 text-white">{{ $t('error_msg') }}</h1>
  <BackButton @click="router.push('/main')" />
</template>

<script setup>
import { useRouter } from "vue-router";
import { useI18n } from 'vue-i18n';
import { BackButton } from "vue-tg";

const router = useRouter()
const {t, locale} = useI18n({useScope: 'global'})
</script>