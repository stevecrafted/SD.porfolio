<template>
  <section id="projects" class="w-full bg-[#0A0A0A] py-24 px-6 md:px-12 border-t border-[#222]">
    <div class="max-w-6xl mx-auto">
      <div class="border border-[#888] rounded-full px-4 py-1 text-sm uppercase tracking-wide inline-block mb-6 text-[#F8F8F8]">
        Réalisations récentes
      </div>
      <h2 class="text-5xl md:text-6xl font-bold text-[#F8F8F8] mb-16">
        Projets<span class="text-[#C6FF00]">.</span>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, idx) in projects"
          :key="idx"
          class="rounded-3xl p-8 transition hover:bg-[#222]"
          :class="project.highlight ? 'bg-[#C6FF00]' : 'bg-[#1a1a1a]'"
        >
          <h3 class="text-3xl font-bold mb-3" :class="project.highlight ? 'text-[#0A0A0A]' : 'text-[#F8F8F8]'">
            {{ project.title }}
          </h3>
          <p class="mb-6" :class="project.highlight ? 'text-[#0A0A0A] opacity-80' : 'text-[#888]'">
            {{ project.description }}
          </p>
          <a href="#" class="inline-flex items-center gap-2 font-semibold" :class="project.highlight ? 'text-[#0A0A0A]' : 'text-[#C6FF00]'">
            Read More <i class="fas fa-arrow-right text-sm"></i>
          </a>
        </div>
      </div>

      <!-- Expériences supplémentaires -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="(exp, i) in experiences" :key="i" class="border border-[#333] rounded-3xl p-6 bg-[#111]">
          <p class="text-[#C6FF00] font-semibold text-sm">{{ exp.date }}</p>
          <h4 class="text-white text-xl font-bold mt-1">{{ exp.event }}</h4>
          <p class="text-[#888] mt-2">{{ exp.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { projects } from '@/data/projects'
import { experiences } from '@/data/experiences'
</script>