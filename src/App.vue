<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-white text-black px-4"
  style=" background : #191970 ;color :#D8BFD8 ;" >
    <!-- Centered Title -->
    <header class="py-4 border-b text-center">
      <h1 class=" text-lg font-semibold">Benjamin’s Portfolio</h1>
    </header>

    <!-- Main content -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
