<script setup>
import {defineProps} from 'vue';

defineProps({
  backgroundColor: {
    type: String,
    default: 'bg-gray-100'
  }
})
</script>

<template>
  <div v-bind:class="`${backgroundColor} p-6 rounded-lg shadow-md`">
    <slot></slot>
  </div>
</template>

<style scoped>

</style>