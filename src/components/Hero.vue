<script setup>
import {defineProps} from 'vue';

defineProps({
  title: {
    type: String,
    default: 'Become a Vue Dev',
  },
  subtitle: {
    type: String,
    default: 'Find the Vue job that fits your skills and needs',
  }
})
</script>

<template>
  <section class="bg-green-700 py-20 mb-4">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div class="text-center">
        <h4 class="text-4xl font-extrabold text-white sm:text-3xl md:text-4xl">
          {{ title }}
        </h4>
        <p class="my-4 text-xl text-white text-2xl">
          {{ subtitle }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>