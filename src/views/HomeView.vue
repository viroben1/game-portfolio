<template>
  <div class="bg-gray-900 text-white text-center p-6 min-h-screen">

    <!-- Navigation -->
    <nav class="w-full flex justify-between items-center px-8 mt-6 text-gray-300" data-aos="fade-down">
      
      <div class="flex-1 text-left">
        <router-link to="/" class="hover:text-blue-400">Home</router-link>
      </div>

      <div class="flex-1 text-center">
        <router-link to="/about" class="hover:text-blue-400">About</router-link>
      </div>

      <div class="flex-1 text-right">
        <router-link to="/projects/gam207" class="hover:text-blue-400">Projects</router-link>
      </div>

    </nav>

    <!-- Header -->
    <h1 class="text-3xl md:text-4xl font-bold mt-8" data-aos="fade-up">
      Benjamin Farmer
    </h1>

    <p class="mt-2 text-lg md:text-xl text-gray-400" data-aos="fade-up" data-aos-delay="100">
      Game Developer focused on Unreal Engine 5 prototypes, character systems, and immersive gameplay experiences.
    </p>

    <!-- Featured Game -->
    <p class="mt-6 font-semibold text-blue-400 text-sm" data-aos="fade-up" data-aos-delay="200">
      🎮 Featured Project: Enchanted Odyssey
    </p>

    <p class="text-gray-400 mb-6" data-aos="fade-up" data-aos-delay="250">
      A third-person Unreal Engine 5 prototype featuring character selection, Paragon asset integration, and core player movement systems.
    </p>

    <!-- Video -->
    <iframe 
      class="w-full max-w-3xl mx-auto h-[400px] rounded-lg mb-6 shadow-lg"
      src="https://www.youtube.com/embed/WEH8agwjuDw"
      title="Enchanted Odyssey Gameplay"
      allowfullscreen>
    </iframe>

    <!-- Tech Note -->
    <p class="text-gray-500 text-sm mb-10" data-aos="fade-up" data-aos-delay="300">
      Built using Unreal Engine 5, Blueprint scripting, and Paragon character assets.
    </p>

    <!-- Projects Section -->
    <div class="mt-10 text-center max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="400">
      
      <h2 class="text-2xl md:text-3xl font-bold mb-4">Projects</h2>

      <p class="mb-4 text-gray-400">
        Check out what I’ve been working on — from Unreal Engine prototypes to gameplay systems.
      </p>

      <h3 class="font-medium text-lg text-white">
        Enchanted Odyssey – UE5 Prototype
      </h3>

      <div class="border border-gray-700 p-4 mt-3 rounded-lg bg-gray-800 inline-block text-left shadow-lg">
        
        <p class="font-semibold text-blue-400">Unreal Engine 5 Project</p>

        <p class="text-gray-300 mt-2">
          Third-person prototype featuring character spawning, entry animations, and player movement systems built using Blueprint scripting.
        </p>

        <p class="text-gray-500 mt-2">
          Currently expanding into combat systems, AI behavior, and advanced gameplay mechanics.
        </p>

        <router-link 
          to="/projects/gam207" 
          class="text-blue-400 hover:underline block mt-3"
        >
          View Gameplay
        </router-link>

      </div>
    </div>

  </div>
</template>

<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  once: true,
  duration: 800,
})
</script>

<style scoped>
/* Optional custom tweaks */
</style>