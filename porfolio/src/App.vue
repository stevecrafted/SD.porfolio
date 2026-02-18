<template>
  <div class="bg-[#F8F8F8]">
    <Navbar />
    <HeroSection />
    <SkillsSection />
    <ProjectsSection />
    <Certifications />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import Certifications from './components/Certifications.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import Footer from './components/Footer.vue'
</script>