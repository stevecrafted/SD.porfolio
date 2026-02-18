<template>
  <nav class="w-full py-6 px-6 md:px-12 flex items-center justify-between bg-[#F8F8F8]">
    <div class="text-2xl font-bold text-[#0A0A0A]">S.R.</div>
    <div class="hidden md:flex space-x-10 text-[#0A0A0A] font-medium">
    </div>
 
      <a
        href="/stevens_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        class="border-2 border-[#0A0A0A] rounded-full px-8 py-4 flex items-center gap-3 text-[#0A0A0A] text-lg hover:bg-[#0A0A0A] hover:text-[#F8F8F8] transition"
      >
        <i class="fas fa-file-pdf"></i> Voir mon CV
      </a>
      
  </nav>
</template>

<script setup>
const startProject = () => {
  alert(' Projet démarré ! (simulation)')
}
</script>