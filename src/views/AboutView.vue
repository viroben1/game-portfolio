<template>
  <div class="max-w-4xl mx-auto px-4 py-10 space-y-20 text-center bg-gray-900 text-white min-h-screen"
  style="background-color: #EE82EE; color: #0000FF ">
    <!-- About Me -->
    <section data-aos="fade-up">
      <h2 class="text-2xl font-bold mb-2 text-neon">About Me</h2>
      <p class="text-lg">
        I'm Benjamin Farmer, a video game developer and student at Southern New Hampshire University.
        I’m currently working toward my Bachelor's in Video Game Programming and Development.
        I specialize in building immersive gameplay using Unreal Engine, and I enjoy combining programming,
        design, and creativity to bring interactive experiences to life.
      </p>
    </section>

    <!-- Projects -->
    <section data-aos="fade-up" data-aos-delay="100">
      <h2 class="text-2xl font-bold mb-2 text-neon">Projects</h2>
      <p class="mb-4">Learn more about my hands-on projects built with Unreal Engine, Blueprint, and C++.</p>
      <div class="border border-neon p-4 rounded bg-gray-800">
        <h3 class="font-semibold text-lg text-neon">GAM 207 Project</h3>
        <p>Player character prototype made in Unreal Engine 5 with movement and shooting logic.</p>
        <router-link to="/projects/gam207" class="text-neon hover:underline block mt-2">View Project</router-link>
      </div>
    </section>

    <!-- Featured Game -->
    <section data-aos="fade-up" data-aos-delay="200">
      <h2 class="text-2xl font-bold mb-2 text-neon">Featured Game</h2>
      <p class="mb-4">Explore my favorite project showcasing gameplay mechanics.</p>
      <router-link to="/projects/gam207" class="inline-block mt-4 bg-neon text-gray-900 px-4 py-2 rounded hover:bg-green-400 transition">
        View Game
      </router-link>
    </section>

    <!-- Resume Download -->
    <section data-aos="fade-up" data-aos-delay="300">
      <h2 class="text-2xl font-bold mb-2 text-neon">Download My Resume</h2>
      <a href="/resume.pdf" download class="text-neon hover:underline inline-flex items-center">
        📄 Download My Resume
      </a>
    </section>

    <!-- Skills -->
    <section class="mt-10 px-4 space-y-15" data-aos="fade-up" data-aos-delay="400">
      <h2 class="text-2xl font-bold mb-6 text-center text-neon">Skills</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        <!-- Programming Languages -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-center">Programming Languages</h3>
          <div v-for="skill in programmingSkills" :key="skill.name" class="mb-4 w-full max-w-sm mx-auto">
            <div class="flex justify-between text-sm font-medium">
              <span>{{ skill.name }}</span>
              <span>{{ skill.percent }}</span>
            </div>
            <div class="w-full bg-gray-700 rounded-full h-4">
              <div class="bg-neon h-4 rounded-full" :style="{ width: skill.width }"></div>
            </div>
          </div>
        </div>

        <!-- Game Development & Tools -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-center">Game Development & Tools</h3>
          <div v-for="tool in gameSkills" :key="tool.name" class="mb-4 w-full max-w-sm mx-auto">
            <div class="flex justify-between text-sm font-medium">
              <span>{{ tool.name }}</span>
              <span>{{ tool.percent }}</span>
            </div>
            <div class="w-full bg-gray-700 rounded-full h-4">
              <div class="bg-neon h-4 rounded-full" :style="{ width: tool.width }"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Connect With Me -->
    <section data-aos="fade-up" data-aos-delay="500">
      <h2 class="text-2xl font-bold mb-2 text-neon">Connect With Me</h2>
      <div class="space-x-4">
        <div><a href="https://github.com/viroben1" target="_blank" class="text-neon hover:underline">GitHub</a></div>
        <div><a href="https://linkedin.com" target="_blank" class="text-neon hover:underline">LinkedIn</a></div>
        <div class="mb-4"><a href="mailto:viroben2001@gmail.com" class="text-neon hover:underline">Email Me</a></div>

      </div>
    </section>

   <div class=" mt-6 my-8 space-y-10">
  <router-link 
    to="/" 
    class="inline-block   bg-neon text-gray-900 px-4 py-2 rounded hover:bg-green-400 transition text-lg"
  >
    ← Back to Home
  </router-link>
</div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Footer from '../components/Footer.vue'
import { ref } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  once: true,
  duration: 800,
})

const programmingSkills = ref([
  { name: "C++", percent: "85%", width: "85%" },
  { name: "Python", percent: "75%", width: "75%" },
  { name: "Java", percent: "70%", width: "70%" },
  { name: "HTML/CSS", percent: "80%", width: "80%" },
  { name: "JavaScript", percent: "70%", width: "70%" },
]);

const gameSkills = ref([
  { name: "Unreal Engine 5", percent: "90%", width: "90%" },
  { name: "Blueprint Scripting", percent: "85%", width: "85%" },
  { name: "Unity", percent: "50%", width: "50%" },
  { name: "Git & GitHub", percent: "80%", width: "80%" },
  { name: "Visual Studio / VS Code", percent: "85%", width: "85%" },
]);
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
