<template>
  <section class="relative w-full py-20 md:py-28 px-6 md:px-12 overflow-hidden bg-[#F8F8F8]">
    <!-- Glow vert -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,#C6FF00_0%,transparent_60%)] opacity-40 pointer-events-none"></div>

    <div class="relative max-w-6xl mx-auto">
      <h1 class="text-7xl md:text-8xl lg:text-9xl font-extrabold text-[#0A0A0A] leading-[1.1]">
        <span class="block">Développeur</span>
        <span class="block flex items-center flex-wrap gap-4 mt-2">
          <span>Fullstack</span>
          <span class="bg-[#0A0A0A] text-[#F8F8F8] rounded-full px-8 py-2 text-4xl md:text-6xl">Étudiant</span>
        </span>
        <span class="block mt-2 text-6xl md:text-7xl">& passionné d'IA</span>
      </h1>

      <p class="text-[#888] max-w-lg text-lg md:text-xl mt-8 leading-relaxed">
        RAKOTOMALALA Stevens · basé à Madagascar <br>
        IT University, lauréat Ideathon Axian ESTI · recherche stage fin d’études.
      </p>

      <div class="mt-10">
        <button
          @click="contactMe"
          class="border-2 border-[#0A0A0A] rounded-full px-8 py-4 flex items-center gap-3 text-[#0A0A0A] text-lg hover:bg-[#0A0A0A] hover:text-[#F8F8F8] transition"
        >
          <i class="fas fa-phone-alt"></i> Me contacter
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const contactMe = () => {
  alert('📬 Contact : stevens.rakotomalala@gmail.com')
}
</script>