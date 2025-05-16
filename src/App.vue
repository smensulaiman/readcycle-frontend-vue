<script setup>
import Navbar from '@/components/Navbar.vue'
import Hero from "@/components/Hero.vue";
import HomeCards from "@/components/HomeCards.vue";
import JobListings from "@/components/BookListings.vue";

const title = 'Read Cycle – Old Book Swapping for Students';
const description = 'Read Cycle is a community-driven platform that helps university students exchange their old books with each other. Instead of letting books collect dust, students can post their used books, browse listings by others, and swap what they have for what they need. With features like category-based organization, user-friendly book listings, and direct student-to-student interaction, Read Cycle promotes sustainability, affordability, and connection in the academic world. Whether it\'s textbooks, novels, or reference material – give your books a second life!';

</script>

<template>
  <Navbar />
  <Hero :title="title" :subtitle="description"/>
  <HomeCards/>
  <JobListings v-bind:limit="3" v-bind:show-more="true"/>
</template>