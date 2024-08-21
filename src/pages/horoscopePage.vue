<template>
</template>

<script setup>
import { useRoute } from "vue-router";
import { BackButton } from "vue-tg";
const route = useRoute()
console.log(route.query, localStorage.getItem('userLang'));
</script>

<style>

</style>