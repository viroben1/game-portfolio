<template>
  <main class="min-h-screen bg-gray-900 text-white py-12 px-6">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-blue-400 mb-6">GAM 207: Player Character Prototype</h1>

      <div 
        class="p-4 rounded-lg shadow-md bg-white dark:bg-gray-800 hover:scale-105 transition mb-8" 
        data-aos="fade-up" 
        data-aos-duration="800"
      >
        <img
          src="/gam207-screenshot.png"
          alt="GAM 207 Unreal Engine Screenshot"
          class="w-full rounded-lg shadow-lg border-2 border-blue-500 mb-4"
        />
        <h2 class="text-2xl font-semibold text-black dark:text-white mb-2">Unreal Engine Player Character Prototype</h2>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          This prototype was built in Unreal Engine 5 for GAM 207 at SNHU. It features a basic player
          character with movement, jumping, camera control, projectile firing, and basic damage functionality.
          The focus was on learning Blueprints, event systems, and character scripting workflows.
        </p>
      </div>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-white mb-4">Key Features</h2>
        <ul class="list-disc list-inside text-gray-300 leading-relaxed">
          <li>Third-person movement and jump input</li>
          <li>Follow camera with spring arm</li>
          <li>Projectile firing mechanic using “Set Timer By Function”</li>
          <li>Basic health/damage trigger on overlap</li>
          <li>Blueprint-based logic and event handling</li>
        </ul>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-white mb-4">Tools Used</h2>
        <ul class="list-disc list-inside text-gray-300 leading-relaxed">
          <li>Unreal Engine 5</li>
          <li>Blueprint Visual Scripting</li>
          <li>Custom Input Bindings</li>
          <li>Simple Materials & Collision</li>
        </ul>
      </section>

      <router-link
        to="/"
        class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        ← Back to Home
      </router-link>
    </div>
  </main>
</template>

<script setup>
// No additional script logic required for this static display page
</script>
