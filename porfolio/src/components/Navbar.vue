<template>
  <nav class="w-full py-6 px-6 md:px-12 flex items-center justify-between bg-[#F8F8F8]">
    <div class="text-2xl font-bold text-[#0A0A0A]">S.R.</div>
    <div class="hidden md:flex space-x-10 text-[#0A0A0A] font-medium">
      <a href="#" class="hover:underline">Home</a>
      <a href="#skills" class="hover:underline">About</a>
      <a href="#projects" class="hover:underline">Portfolio</a>
      <a href="#footer" class="hover:underline">Blog</a>
    </div>
    <button
      @click="startProject"
      class="border border-[#0A0A0A] rounded-full px-6 py-2 flex items-center gap-2 text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#F8F8F8] transition"
    >
      <span>Start Project</span> <i class="fas fa-arrow-right text-sm"></i>
    </button>
  </nav>
</template>

<script setup>
const startProject = () => {
  alert(' Projet démarré ! (simulation)')
}
</script>