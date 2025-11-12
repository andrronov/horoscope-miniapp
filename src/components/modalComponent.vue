<script setup>
const props = defineProps({
  isActive: { type: Boolean, default: false },
});
</script>

<template>
  <div
    v-if="isActive"
    class="fixed z-50 inset-0 bg-black bg-opacity-75 flex justify-center items-center"
  >
    <div class="max-w-sm p-4 bg-white rounded-lg shadow-lg">
      <button
        @click="$emit('close')"
        class="absolute top-0 right-0 m-4 text-white"
      >
        <img src="/img/close.svg" alt="close icon" />
      </button>
      <slot></slot>
    </div>
  </div>
</template>
