<template>
  <main class="min-h-screen bg-gray-900 text-white py-12 px-6"
  style="background-color: #808000 ; color: #ADFF2F; ">
    <div class="max-w-4xl mx-auto space-y-12">
      <h1 class="text-4xl font-bold text-neon mb-6" data-aos="fade-down">GAM 207: Player Character Prototype</h1>

      <div 
        class="p-4 rounded-lg shadow-md bg-gray-800 hover:scale-105 transition mb-8 border border-neon"
        data-aos="fade-up" 
        data-aos-duration="800"
      >
        <img
          src="/gam207-screenshot.png"
          alt="GAM 207 Unreal Engine Screenshot"
          class="w-full rounded-lg shadow-lg border-2 border-neon mb-4"
        />
        <h2 class="text-2xl font-semibold text-neon mb-2">Unreal Engine Player Character Prototype</h2>
        <p class="text-gray-300 leading-relaxed">
          This prototype was built in Unreal Engine 5 for GAM 207 at SNHU. It features a basic player
          character with movement, jumping, camera control, projectile firing, and basic damage functionality.
          The focus was on learning Blueprints, event systems, and character scripting workflows.
        </p>
      </div>

      <section data-aos="fade-up" data-aos-delay="100">
        <h2 class="text-2xl font-semibold text-neon mb-4">Key Features</h2>
        <ul class="list-disc list-inside text-gray-300 leading-relaxed">
          <li>Third-person movement and jump input</li>
          <li>Follow camera with spring arm</li>
          <li>Projectile firing mechanic using “Set Timer By Function”</li>
          <li>Basic health/damage trigger on overlap</li>
          <li>Blueprint-based logic and event handling</li>
        </ul>
      </section>

      <section data-aos="fade-up" data-aos-delay="200">
        <h2 class="text-2xl font-semibold text-neon mb-4">Tools Used</h2>
        <ul class="list-disc list-inside text-gray-300 leading-relaxed">
          <li>Unreal Engine 5</li>
          <li>Blueprint Visual Scripting</li>
          <li>Custom Input Bindings</li>
          <li>Simple Materials & Collision</li>
        </ul>
      </section>

      <router-link
        to="/"
        class="inline-block bg-neon  font-bold py-2 px-4 rounded hover:bg-green-400 transition duration-300"
        data-aos="fade-up" data-aos-delay="300"
        style="color: crimson;"
      >
        ← Back to Home
      </router-link>

      <Footer />
    </div>
  </main>
</template>

<script setup>
import Footer from '../components/Footer.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  once: true,
  duration: 800,
})
</script>

<style scoped>
.text-neon {
  color: #39FF14;
}
.bg-neon {
  background-color: #39FF14;
}
.border-neon {
  border-color: #39FF14;
}
</style>
