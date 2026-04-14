<template>
  <footer id="footer" class="bg-[#F8F8F8] text-[#0A0A0A] py-20 px-6 md:px-12">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 class="text-2xl font-bold mb-4">RAKOTOMALALA Stevens</h3>
          <ul class="space-y-2 text-[#333]">
            <li><i class="fas fa-phone-alt w-6 text-[#C6FF00]"></i> +261 38 074 9655</li>
            <li><i class="fas fa-envelope w-6 text-[#C6FF00]"></i> stevens.rakotomalala@gmail.com</li>
            <li><i class="fab fa-linkedin w-6 text-[#C6FF00]"></i> /in/steve-daniel-5b02922bb</li>
            <li><i class="fab fa-github w-6 text-[#C6FF00]"></i> stevecrafted</li>
          </ul>
        </div>
        <div>
          <h3 class="text-2xl font-bold mb-4">{{ copy.footer.education }}</h3>
          <p class="font-semibold">{{ copy.footer.uni1 }}</p>
          <p class="text-[#555]">{{ copy.footer.uni1date }}</p>
          <p class="font-semibold mt-4">{{ copy.footer.uni2 }}</p>
          <p class="text-[#555]">{{ copy.footer.uni2date }}</p>
        </div>
        <div>
          <h3 class="text-2xl font-bold mb-4">{{ copy.footer.languagesHobbies }}</h3>
          <div class="flex flex-wrap gap-2 mb-6">
            <span class="bg-[#0A0A0A] text-[#F8F8F8] rounded-full px-4 py-1 text-sm">{{ copy.footer.lang1 }}</span>
            <span class="bg-[#0A0A0A] text-[#F8F8F8] rounded-full px-4 py-1 text-sm">{{ copy.footer.lang2 }}</span>
            <span class="bg-[#0A0A0A] text-[#F8F8F8] rounded-full px-4 py-1 text-sm">{{ copy.footer.lang3 }}</span>
          </div>
          <div class="flex gap-4 text-2xl">
            <span class="border-2 border-[#0A0A0A] rounded-full w-14 h-14 flex items-center justify-center"><i class="fas fa-gamepad"></i></span>
            <span class="border-2 border-[#0A0A0A] rounded-full w-14 h-14 flex items-center justify-center"><i class="fas fa-futbol"></i></span>
          </div>
          <p class="mt-4 text-[#555]">{{ copy.footer.hobbies }}</p>
        </div>
      </div>
      <div class="border-t border-[#ccc] mt-16 pt-8 text-center text-[#555]">
        <p>{{ copy.footer.copyright }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { locale, messages } from '@/i18n'

const copy = computed(() => messages[locale.value] ?? messages.fr)
</script>