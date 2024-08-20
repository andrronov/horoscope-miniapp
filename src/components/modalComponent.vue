<template>
<div v-if="isActive" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
  <div class="max-w-sm p-4 bg-white rounded-lg shadow-lg">
    <button @click="$emit('close')" class="absolute top-0 right-0 m-4 text-white">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    <slot></slot>
  </div>
</div>
</template>

<script setup>
const props = defineProps({
   isActive: {type: Boolean, default: false}
})
</script>

<style>

</style>