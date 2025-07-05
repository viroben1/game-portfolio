<template>
  <div class="bg-gray-900 text-white min-h-screen">
    <section class="flex flex-col items-center justify-center text-center py-24 px-4" data-aos="fade-down">
      <h1 class="text-4xl md:text-6xl font-bold text-neon mb-4">Benjamin Farmer</h1>
      <p class="text-lg md:text-2xl max-w-2xl">Game Developer Portfolio - Unreal Engine, Gameplay Programming, and Interactive Experiences</p>
    </section>

    <section class="max-w-6xl mx-auto px-4 py-16">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-neon" data-aos="fade-up">Projects</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300" data-aos="fade-up" v-for="n in 6" :key="n">
          <img src="https://via.placeholder.com/400x225.png?text=Project+Screenshot" alt="Project Screenshot" class="w-full h-48 object-cover">
          <div class="p-4">
            <h3 class="text-xl font-semibold text-neon mb-2">Project Title</h3>
            <p class="text-gray-300 text-sm">Brief description of the project, engine, and technologies used for quick context for potential employers and collaborators.</p>
          </div>
        </div>
      </div>
    </section>

    <footer class="text-center text-gray-400 py-8">
      <p>&copy; 2025 Benjamin Farmer | <a href="https://github.com/viroben1" class="text-neon hover:underline" target="_blank">GitHub</a></p>
    </footer>
  </div>
</template>

<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  once: true,
  duration: 800,
});
</script>

<style scoped>
.text-neon {
  color: #39FF14;
}
</style>
