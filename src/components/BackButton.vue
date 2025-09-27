<script setup lang="ts">
defineProps({
  back: String,
})
</script>

<template>
  <div class="mt-20 flex">
    <RouterLink
      :to="back"
      class="m-auto inline-block bg-gray-800 px-4 py-2 text-center text-sm font-bold text-white sm:text-lg"
      >Retour</RouterLink
    >
  </div>
</template>
