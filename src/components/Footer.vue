<template>
  <footer class="mt-10 p-4 text-center text-gray-300">
    <p class="mb-2">© {{ year }} Benjamin Farmer</p>
    <div class="flex justify-center space-x-4">
      <a href="https://github.com/viroben1" target="_blank" class="text-neon hover:underline">GitHub</a>
      <a href="mailto:your-email@example.com" class="text-neon hover:underline">Email</a>
      <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" class="text-neon hover:underline">LinkedIn</a>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
const year = new Date().getFullYear()
</script>

<style scoped>
.text-neon {
  color: #39FF14;
}
</style>
