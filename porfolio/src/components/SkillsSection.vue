<template>
  <section id="skills" class="w-full bg-[#0A0A0A] py-24 px-6 md:px-12 text-[#F8F8F8]">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <div>
          <div class="border border-[#888] rounded-full px-4 py-1 text-sm uppercase tracking-wide inline-block mb-6">
            Why Choose me
          </div>
          <h2 class="text-6xl md:text-7xl font-bold leading-[1.1]">
            My Extensive<br>List of Skills
          </h2>
        </div>
        <div class="text-right max-w-sm">
          <p class="text-[#888] text-lg">
            Java/Spring, React, Node.js, DevOps, IA/Data. 
            Stack propre et scalable.
          </p>
          <div class="flex gap-4 mt-6 justify-end">
            <div class="w-14 h-14 rounded-full border border-[#888] flex items-center justify-center hover:border-[#C6FF00] hover:text-[#C6FF00] transition cursor-pointer">
              <i class="fas fa-arrow-left"></i>
            </div>
            <div class="w-14 h-14 rounded-full border border-[#888] flex items-center justify-center hover:border-[#C6FF00] hover:text-[#C6FF00] transition cursor-pointer">
              <i class="fas fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
        <div
          v-for="(skill, index) in skills"
          :key="index"
          class="rounded-3xl p-8 transition-transform hover:-translate-y-1"
          :class="skill.highlight ? 'bg-[#C6FF00] text-[#0A0A0A]' : 'bg-[#1a1a1a] text-[#F8F8F8]'"
        >
          <h3 class="text-2xl font-bold mb-3" :class="skill.highlight ? 'text-[#0A0A0A]' : 'text-[#C6FF00]'">
            {{ skill.category }}
          </h3>
          <p class="opacity-80">{{ skill.items }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { skills } from '@/data/skills'
</script>