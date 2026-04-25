<template>
  <div class="bg-[#F8F8F8]">
    <Navbar />
    <main>
      <HeroSection />
      <section class="cv-auto">
        <SkillsSection />
      </section>
      <section class="cv-auto">
        <ProjectsSection />
      </section>
      <section class="cv-auto">
        <Certifications />
      </section>
      <VisitCounter />
      <Footer />
    </main>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import Certifications from './components/Certifications.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import VisitCounter from './components/VisitCounter.vue'
import Footer from './components/Footer.vue'

</script>

<style scoped>
.cv-auto {
  content-visibility: auto;
  contain-intrinsic-size: 900px;
}
</style>