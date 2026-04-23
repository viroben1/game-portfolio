<template>
  <main class="min-h-screen bg-gray-900 text-white py-12 px-6"
    style="background-color: #808000 ; color: #ADFF2F; ">

    <div class="max-w-4xl mx-auto space-y-12">

      <!-- Title -->
      <h1 class="text-4xl font-bold text-neon mb-6" data-aos="fade-down">
        Enchanted Odyssey – Unreal Engine 5 Prototype
      </h1>

      <!-- Main Project Card -->
      <div 
        class="p-4 rounded-lg shadow-md bg-gray-800 hover:scale-105 transition mb-8 border border-neon"
        data-aos="fade-up" 
        data-aos-duration="800"
      >
        <iframe 
  class="w-full h-[400px] rounded-lg mb-4"
  src="https://www.youtube.com/embed/WEH8agwjuDw"
  title="Enchanted Odyssey Gameplay"
  allowfullscreen>
</iframe>

        <h2 class="text-2xl font-semibold text-neon mb-2">
          Third-Person Character Prototype
        </h2>

        <p class="text-gray-300 leading-relaxed">
          Enchanted Odyssey is a third-person Unreal Engine 5 prototype developed as part of my coursework and personal development.
          The project focuses on building core gameplay systems including character spawning, entry animations, and player movement
          using Blueprint scripting and Paragon assets.
        </p>

        <p class="text-gray-400 mt-3">
          This prototype establishes a strong foundation for future systems including combat mechanics, AI behavior,
          and expanded gameplay features.
        </p>
      </div>

      <!-- Key Features -->
      <section data-aos="fade-up" data-aos-delay="100">
        <h2 class="text-2xl font-semibold text-neon mb-4">Key Features</h2>

        <ul class="list-disc list-inside text-gray-300 leading-relaxed">
          <li>Character selection and spawning system (gacha-style)</li>
          <li>Paragon character integration with entry animations</li>
          <li>Third-person movement system (walk, run, jump)</li>
          <li>Camera control using Unreal Engine spring arm</li>
          <li>Blueprint-based gameplay logic and event systems</li>
        </ul>
      </section>

      <!-- Tools -->
      <section data-aos="fade-up" data-aos-delay="200">
        <h2 class="text-2xl font-semibold text-neon mb-4">Tools Used</h2>

        <ul class="list-disc list-inside text-gray-300 leading-relaxed">
          <li>Unreal Engine 5</li>
          <li>Blueprint Visual Scripting</li>
          <li>Paragon Character Assets</li>
          <li>Niagara VFX (in progress)</li>
          <li>Custom Input Mapping System</li>
        </ul>
      </section>

      <!-- Back -->
      <router-link
        to="/"
        class="inline-block bg-neon font-bold py-2 px-4 rounded hover:bg-green-400 transition duration-300"
        data-aos="fade-up" data-aos-delay="300"
        style="color: crimson;"
      >
        ← Back to Home
      </router-link>

      <!-- Footer -->
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