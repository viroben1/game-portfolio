<template>
  <div class="   text-center p-6   min-h-screen"
    style="background-color: #FFCCCB; color: #00BFFF ">
    <!-- Navigation -->
    <nav class="w-full flex justify-between items-center px-8 mt-6 text-neon" data-aos="fade-down"
    >
      
      <div class="flex-1 text-left">
        <router-link to="/" class="hover:underline">Home</router-link>
      </div>
      <div class="flex-1 text-center">
        <router-link to="/about" class="hover:underline">About</router-link>
      </div>
      <div  class="flex-1 text-right" 
      >
        <router-link to="/projects/gam207" class="hover:underline">Projects</router-link>
      </div>
    </nav>

    <!-- Header -->
    <h1 class="text-3xl md:text-4xl font-bold mt-8 text-neon" data-aos="fade-up">Benjamin Farmer</h1>
    <p class="mt-2 text-lg md:text-xl" data-aos="fade-up" data-aos-delay="100">
      Game Developer focused on immersive experiences and clean UI design.
    </p>

    <!-- Featured Game -->
    <p class="mt-4 font-semibold text-neon text-sm" data-aos="fade-up" data-aos-delay="200">
      🎮 View My Featured Game
    </p>
    <img
      src="/gam207-screenshot.png"
      alt="Screenshot of GAM 207 Unreal Engine project"
      class="w-[400px] max-w-full h-auto rounded-lg shadow-lg border-2 border-neon mx-auto my-4"
      data-aos="zoom-in"
      data-aos-delay="300"
    />

    <!-- Projects Section -->
    <div class="mt-10 text-center max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="400">
      <h2 class="text-2xl md:text-3xl font-bold mb-2 text-neon">Projects</h2>
      <p class="mb-2">
        Check out what I’ve been working on — from Unreal Engine prototypes to creative UI design.
      </p>
      <h3 class="font-medium text-lg">GAM 207 – Player Character Prototype</h3>
      <div class="border border-gray-600 p-4 mt-3 rounded-lg bg-gray-800 inline-block text-left shadow-lg">
        <p class="font-semibold text-neon">GAM 207 Project</p>
        <p>Player character prototype made in Unreal Engine 5 with movement and shooting logic.</p>
        <p>Learn more by clicking the view project link below.</p>
        <router-link to="/projects/gam207" class="text-neon hover:underline block mt-2">
          View Project
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
.text-neon {
  color: #39FF14; /* neon green */
}
.border-neon {
  border-color: #39FF14;
}


</style>
