<template>
  <section id="projects" class="w-full bg-[#0A0A0A] py-24 px-6 md:px-12 border-t border-[#222]">
    <div class="max-w-6xl mx-auto">
      <div class="border border-[#888] rounded-full px-4 py-1 text-sm uppercase tracking-wide inline-block mb-6 text-[#F8F8F8]">
        {{ copy.projects.badge }}
      </div>
      <h2 class="text-5xl md:text-6xl font-bold text-[#F8F8F8] mb-16">
        {{ copy.projects.title }}<span class="text-[#C6FF00]">.</span>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, idx) in projectItems"
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
          
          
          <!-- Projet details -->
           <div class="mt-6 flex flex-wrap gap-3">
  <a
    v-for="(link, idx) in project.links"
    :key="idx"
    :href="link.url"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition"
    :class="project.highlight 
      ? 'border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#C6FF00]' 
      : 'border-[#C6FF00] text-[#C6FF00] hover:bg-[#C6FF00] hover:text-[#0A0A0A]'"
  >
    <i :class="link.icon" class="text-base"></i>
    {{ link.label }}
  </a>
</div>
        </div>
      </div>

      <!-- Expériences supplémentaires -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="(exp, i) in experienceItems" :key="i" class="border border-[#333] rounded-3xl p-6 bg-[#111]">
          <p class="text-[#C6FF00] font-semibold text-sm">{{ exp.date }}</p>
          <h4 class="text-white text-xl font-bold mt-1">{{ exp.event }}</h4>
          <p class="text-[#888] mt-2">{{ exp.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { copy } from '@/content'

const projectItems = copy.projects.items
const experienceItems = copy.projects.experiences
</script>