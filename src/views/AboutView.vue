<template>
  <div class="  max-w-4xl mx-auto px-4 py-10 space-y-20 text-center">
    <!-- About Me -->
    <section>
      <h2 class="text-2xl font-bold mb-2">About Me</h2>
      <p class="text-lg">
        I'm Benjamin Farmer, a video game developer and student at Southern New Hampshire University.
        I’m currently working toward my Bachelor's in Video Game Programming and Development.
        I specialize in building immersive gameplay using Unreal Engine, and I enjoy combining programming,
        design, and creativity to bring interactive experiences to life.
      </p>
    </section>

    <!-- Projects -->
    <section>
      <h2 class="text-2xl font-bold mb-2">Projects</h2>
      <p class="mb-4">Learn more about my hands-on projects built with Unreal Engine, Blueprint, and C++.</p>
      <div class="border p-4 rounded">
        <h3 class="font-semibold text-lg">GAM 207 Project</h3>
        <p>Player character prototype made in Unreal Engine 5 with movement and shooting logic.</p>
        <router-link to="/projects/gam207" class="text-blue-600 hover:underline block mt-2">View Project</router-link>
      </div>
    </section>

    <!-- Featured Game -->
    <section>
      <h2 class="text-2xl font-bold mb-2">Featured Game</h2>
      <p class="mb-4">Explore my favorite project showcasing gameplay mechanics.</p>
       
      <router-link to="/projects/gam207" class="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        View Game
      </router-link>
    </section>

    <!-- Resume Download -->
    <section>
      <h2 class="text-2xl font-bold mb-2">Download My Resume</h2>
      <a href="/resume.pdf" download class="text-blue-600 hover:underline inline-flex items-center">
        📄 Download My Resume
      </a>
    </section>

    <section class="mt-10 px-4 space-y-15">
  <h2 class="text-2xl font-bold mb-6 text-center">Skills</h2>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto space-y-15">
    <!-- Programming Languages -->
    <div class="flex flex-col items-center">
      <h3 class="text-lg font-semibold mb-4 text-center">Programming Languages</h3>

      <div class="mb-4 w-full max-w-sm space-y-px">
        <div class="flex justify-center text-sm font-medium">
          <span>C++</span>
          <span>50%</span>
        </div>
        <div class="w-full bg-gray-300 rounded-full h-4">
          <div class="bg-blue-600 h-4 rounded-full" style="width: 85%"></div>
        </div>
      </div>

      <div class="mb-4 w-full max-w-sm">
        <div class="flex justify-center text-sm font-medium">
          <span>Python</span>
          <span>75%</span>
        </div>
        <div class="w-full bg-gray-300 rounded-full h-4">
          <div class="bg-blue-600 h-4 rounded-full" style="width: 75%"></div>
        </div>
      </div>

      <div class="mb-4 w-full max-w-sm">
        <div class="flex justify-center text-sm font-medium">
          <span>Java</span>
          <span>50%</span>
        </div>
        <div class="w-full bg-gray-300 rounded-full h-4">
          <div class="bg-blue-600 h-4 rounded-full" style="width: 70%"></div>
        </div>
      </div>

      <div class="mb-4 w-full max-w-sm">
        <div class="flex justify-center text-sm font-medium">
          <span>HTML/CSS</span>
          <span>80%</span>
        </div>
        <div class="w-full bg-gray-300 rounded-full h-4">
          <div class="bg-blue-600 h-4 rounded-full" style="width: 80%"></div>
        </div>
      </div>

      <div class="mb-4 w-full max-w-sm">
        <div class="flex justify-center text-sm font-medium">
          <span>JavaScript</span>
          <span>90%</span>
        </div>
        <div class="w-full bg-gray-300 rounded-full h-4">
          <div class="bg-blue-600 h-4 rounded-full" style="width: 70%"></div>
        </div>
      </div>
    </div>

    <!-- Game Development & Tools -->
    <div class="flex flex-col items-center">
      <h3 class="text-lg font-semibold mb-4 text-center">Game Development & Tools</h3>

      <div class="mb-4 w-full max-w-sm">
        <div class="flex justify-center text-sm font-medium">
          <span> Unreal Engine 5 </span>
          <span class="space-y-25"> 50% </span>
        </div>
        <div class="w-full bg-gray-300 rounded-full h-4">
          <div class="bg-blue-600 h-4 rounded-full" style="width: 90%"></div>
        </div>
      </div>

      <div class="mb-4 w-full max-w-sm">
        <div class="flex justify-center text-sm font-medium">
          <span>Blueprint Scripting</span>
          <span>50%</span>
        </div>
        <div class="w-full bg-gray-300 rounded-full h-4">
          <div class="bg-blue-600 h-4 rounded-full" style="width: 85%"></div>
        </div>
      </div>

      <div class="mb-4 w-full max-w-sm">
        <div class="flex justify-center text-sm font-medium">
          <span>Unity</span>
          <span>50%</span>
        </div>
        <div class="w-full bg-gray-300 rounded-full h-4">
          <div class="bg-blue-600 h-4 rounded-full" style="width: 50%"></div>
        </div>
      </div>

      <div class="mb-4 w-full max-w-sm">
        <div class="flex justify-center text-sm font-medium">
          <span>Git & GitHub</span>
          <span>90%</span>
        </div>
        <div class="w-full bg-gray-300 rounded-full h-4">
          <div class="bg-blue-600 h-4 rounded-full" style="width: 80%"></div>
        </div>
      </div>

      <div class="mb-4 w-full max-w-sm">
        <div class="flex justify-center  text-sm font-medium">
          <span>Visual Studio / VS Code</span>
          <span>85%</span>
        </div>
        <div class="w-full bg-gray-300 rounded-full h-4">
          <div class="bg-blue-600 h-4 rounded-full" style="width: 85% "></div>
        </div>
      </div>
    </div>
  </div>
</section>




    <!-- Connect With Me -->
    <section>
      <h2 class="text-2xl font-bold mb-2">Connect With Me</h2>
      <div class="space-y-6">
       <div><a href="https://github.com" target="_blank" class="text-blue-600 hover:underline space-">GitHub</a></div> 
        <div><a href="https://linkedin.com" target="_blank" class="text-blue-600 hover:underline">LinkedIn</a></div>
      </div>
    </section>

    <!-- Back to Home -->
    <router-link to="/" class="block mt-6 text-blue-600 hover:underline">
      ← Back to Home
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
}
</script>
