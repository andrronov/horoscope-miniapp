<script setup>
const props = defineProps({
   title: {type: String},
   darkMode: {type: Boolean}
})
</script>

<template>
   <div :class="{'dark': props.darkMode}">
      <div class="flex flex-col justify-between items-center py-2 min-h-screen bg-gradient-to-r from-purple-500 via-blue-400 to-white animate-gradient text-black dark:text-white dark:from-purple-950 dark:via-slate-900-900 dark:to-black">
         <p class="font-semibold text-xl">{{ props.title }}</p>

         <slot />
         
         <p class="text-xs font-thin">github: andrronov</p>
      </div>
   </div>
</template>

<style>
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-gradient {
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}
</style>