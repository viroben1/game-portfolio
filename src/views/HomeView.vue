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
    <p class="mt-4 text-indigo-500 font-semibold text-sm">
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
</template>
