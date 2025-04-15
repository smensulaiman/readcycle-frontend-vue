<script setup>
import Card from "@/components/Card.vue";
</script>

<template>
  <section class="py-4">
    <div class="container-xl lg:container m-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <Card>
          <h2 class="text-2xl font-bold">For Students</h2>
          <p class="mt-2 mb-4">Browse our Vue jobs and start your career today</p>
          <a href="jobs.html" class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">Browse Books</a>
        </Card>
        <Card background-color="bg-green-100">
          <h2 class="text-2xl font-bold">For Teachers</h2>
          <p class="mt-2 mb-4">Coming soon...</p>
          <a href="add-job.html" class="inline-block bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600">Notify Me</a>
        </Card>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>