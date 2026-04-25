<template>
  <section class="relative w-full py-20 md:py-28 px-6 md:px-12 overflow-hidden bg-[#F8F8F8]">
    <!-- Glow vert -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,#C6FF00_0%,transparent_60%)] opacity-40 pointer-events-none"></div>

    <div class="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] items-center gap-10 md:gap-14">
      <div>
        <h1 class="text-6xl md:text-8xl lg:text-9xl font-extrabold text-[#0A0A0A] leading-[1.08]">
          <span class="block">{{ copy.hero.line1 }}</span>
          <span class="block flex items-center flex-wrap gap-4 mt-2">
            <span>{{ copy.hero.line2 }}</span>
          </span>
          <span class="block mt-2 text-5xl md:text-7xl">{{ copy.hero.line3 }}</span>
        </h1>

        <p class="text-[#777] max-w-xl text-lg md:text-xl mt-8 leading-relaxed">
          {{ copy.hero.subtitle }} <br>
          {{ copy.hero.school }}
        </p>

        <div class="mt-10">
          <button
            @click="contactMe"
            class="border-2 border-[#0A0A0A] rounded-full px-8 py-4 flex items-center gap-3 text-[#0A0A0A] text-lg hover:bg-[#0A0A0A] hover:text-[#F8F8F8] transition"
          >
            <i class="fas fa-phone-alt"></i> {{ copy.hero.contact }}
          </button>
        </div>
      </div>

      <div class="hero-photo-wrap lg:justify-end">
        <div class="hero-photo-ring">
          <img
            src="/me.png"
            alt="Portrait of Rakotomalala Stevens Daniel Fanambinana"
            class="hero-photo"
            loading="eager"
            decoding="async"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { copy } from '@/content'

const contactMe = () => {
  alert(copy.hero.contactAlert)
}
</script>

<style scoped>
.hero-photo-wrap {
  display: flex;
  justify-content: center;
}

.hero-photo-ring {
  width: min(100%, 430px);
  border: 2px solid #0a0a0a;
  border-radius: 2rem;
  padding: 0.85rem;
  background: linear-gradient(135deg, rgba(198, 255, 0, 0.35), rgba(198, 255, 0, 0.08));
}

.hero-photo {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 1.3rem;
  object-fit: contain;
  background: transparent;
}

@media (max-width: 1024px) {
  .hero-photo-ring {
    width: min(100%, 360px);
  }
}

@media (max-width: 640px) {
  .hero-photo-wrap {
    margin-top: 0.5rem;
  }

  .hero-photo-ring {
    width: min(100%, 300px);
    border-radius: 1.5rem;
    padding: 0.65rem;
  }
}
</style>