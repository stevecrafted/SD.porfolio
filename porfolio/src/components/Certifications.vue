<template>
  <section class="w-full bg-[#0A0A0A] py-24 px-6 md:px-12 border-t border-[#222]">
    <div class="max-w-6xl mx-auto">
      <!-- Badge de section -->
      <div class="border border-[#888] rounded-full px-4 py-1 text-sm uppercase tracking-wide inline-block mb-6 text-[#F8F8F8]">
        {{ copy.certifications.badge }}
      </div>

      <!-- Titre -->
      <h2 class="text-5xl md:text-6xl font-bold text-[#F8F8F8] mb-12">
        {{ copy.certifications.title }}<span class="text-[#C6FF00]">.</span>
      </h2>

      <!-- Carte certificat -->
      <div class="bg-[#1a1a1a] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <i class="fas fa-certificate text-[#C6FF00] text-3xl"></i>
            <span class="text-[#C6FF00] font-semibold text-lg">HackerRank</span>
          </div>
          <h3 class="text-3xl font-bold text-[#F8F8F8] mb-2">
            {{ copy.certifications.certTitle }}
          </h3>
          <p class="text-[#888] text-lg mb-1">
            {{ copy.certifications.owner }}
          </p>
          <p class="text-[#888] mb-4">
            {{ copy.certifications.dateLine }}
          </p>
          <a
            :href="certLink"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-[#C6FF00] font-semibold hover:underline"
          >
            {{ copy.certifications.open }} <i class="fas fa-external-link-alt text-sm"></i>
          </a>
        </div>

        <!-- Badge visuel optionnel (logo HackerRank) -->
        <div class="flex-shrink-0">
          <div class="w-24 h-24 rounded-full bg-[#0A0A0A] border-2 border-[#C6FF00] flex items-center justify-center">
            <span class="text-[#C6FF00] text-4xl font-bold">HR</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { locale, messages } from '@/i18n'

const copy = computed(() => messages[locale.value] ?? messages.fr)
const certLink = 'https://www.hackerrank.com/certificates/814100395f8b'
</script>