<template>
  <section class="relative w-full py-20 md:py-28 px-6 md:px-12 overflow-hidden bg-[#F8F8F8]">
    <!-- Glow vert -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,#C6FF00_0%,transparent_60%)] opacity-40 pointer-events-none"></div>

    <div class="relative max-w-6xl mx-auto">
      <h1 class="text-7xl md:text-8xl lg:text-9xl font-extrabold text-[#0A0A0A] leading-[1.1]">
        <span class="block">{{ copy.hero.line1 }}</span>
        <span class="block flex items-center flex-wrap gap-4 mt-2">
          <span>{{ copy.hero.line2 }}</span>
        </span>
        <span class="block mt-2 text-6xl md:text-7xl">{{ copy.hero.line3 }}</span>
      </h1>

      <p class="text-[#888] max-w-lg text-lg md:text-xl mt-8 leading-relaxed">
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
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { locale, messages } from '@/i18n'

const copy = computed(() => messages[locale.value] ?? messages.fr)

const contactMe = () => {
  alert(copy.value.hero.contactAlert)
}
</script>