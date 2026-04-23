<template>
  <footer class="mt-10 p-4 text-center text-gray-300">
    <p class="mb-4">© {{ year }} Benjamin Farmer</p>
    
    <div class="flex flex-wrap justify-center gap-6">

  <a href="https://github.com/viroben1" target="_blank" class="text-neon hover:underline">
    🐙 GitHub
  </a>

  <a href="mailto:viroben2001@gmail.com" class="text-neon hover:underline">
    📧 Email (Opens App)
  </a>

  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=viroben2001@gmail.com" target="_blank" class="text-neon hover:underline">
    ✉️ Email (Open in Gmail)
  </a>

  <a href="https://www.linkedin.com/in/benjamin-d-farmer/" target="_blank" class="text-neon hover:underline">
    💼 LinkedIn
  </a>

</div>
  </footer>
</template>
<script setup>
const year = new Date().getFullYear()
</script>
<style scoped>
  /* This targets the div that holds your links */
  div.flex {
    display: flex !important;
    justify-content: center !important;
    gap: 40px !important; /* This creates the physical gap you need */
    margin-top: 1rem;
  }

  .text-neon {
    color: #39FF14 !important;
    text-decoration: none;
    font-weight: bold;
  }

  .text-neon:hover {
    text-decoration: underline;
  }
</style>