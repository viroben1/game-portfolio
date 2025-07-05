<template>
  <div class="text-center p-6">
    <!-- Navigation -->
    <nav class="w-full flex justify-between items-center px-8 mt-6">
      <div class="flex-1 text-left">
        <router-link to="/" class="text-blue-400 hover:underline">Home</router-link>
      </div>
      <div class="flex-1 text-center">
        <router-link to="/about" class="text-blue-400 hover:underline">About</router-link>
      </div>
      <div class="flex-1 text-right">
        <router-link to="/projects/gam207" class="text-blue-400 hover:underline">Projects</router-link>
      </div>
    </nav>

    <!-- Header -->
    <h1 class="text-xl font-semibold mt-6">Benjamin Farmer</h1>
    <p class="mt-1 text-lg">Game Developer focused on immersive experiences and clean UI design.</p>

    <!-- Featured Game -->
    <p class="mt-4 text-blue-800  font-semibold text-sm">
      🎮 View My Featured Game
    </p>
    <img
      src="/gam207-screenshot.png"
      alt="Screenshot of GAM 207 Unreal Engine project"
      class="w-[400px] max-w-full h-auto rounded-lg shadow-lg border-2 border-blue-500 mx-auto my-3"
    />

    <!-- Learn More -->
    

    <!-- Projects Section -->
    <div class="mt-10 text-center max-w-xl mx-auto">
      <h2 class="text-lg font-semibold mb-2">Projects</h2>
      <p class="mb-2">
        Check out what I’ve been working on — from Unreal Engine prototypes to creative UI design.
      </p>
      <h3 class="font-medium">GAM 207 – Player Character Prototype</h3>
      <div class="border border-gray-400 p-3 mt-2 inline-block text-left">
        <p class="font-semibold">GAM 207 Project</p>
        <p>Player character prototype made in Unreal Engine 5 with movement and shooting logic.</p>
        <p>Learn more click the view project link below</p>
        <router-link to="/projects/gam207" class="text-blue-500 hover:underline block mt-1">
         View Project
        </router-link>
      </div>
    </div>
  </div>
</template><template>
  <div class="bg-gray-900 text-white min-h-screen">
    <!-- Hero Section -->
    <section class="flex flex-col items-center justify-center text-center py-24 px-4" data-aos="fade-down">
      <h1 class="text-4xl md:text-6xl font-bold text-neon mb-4">Benjamin Farmer</h1>
      <p class="text-lg md:text-2xl max-w-2xl">Game Developer Portfolio - Unreal Engine, Gameplay Programming, and Interactive Experiences</p>
    </section>

    <!-- Projects Grid -->
    <section class="max-w-6xl mx-auto px-4 py-16">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-neon" data-aos="fade-up">Projects</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Project Card Example -->
        <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300" data-aos="fade-up" v-for="n in 6" :key="n">
          <img src="https://via.placeholder.com/400x225.png?text=Project+Screenshot" alt="Project Screenshot" class="w-full h-48 object-cover">
          <div class="p-4">
            <h3 class="text-xl font-semibold text-neon mb-2">Project Title</h3>
            <p class="text-gray-300 text-sm">Brief description of the project, engine, and technologies used for quick context for potential employers and collaborators.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
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
  color: #39FF14; /* neon green */
}
.bg-neon {
  background-color: #39FF14;
}
</style>
