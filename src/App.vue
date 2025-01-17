<script setup>
import NewsLetter from './components/NewsLetter.vue'
import SectionFixedTop from './components/SectionFixedTop.vue'
import Sectionfooter from './components/Sectionfooter.vue'
</script>

<template>
  <SectionFixedTop />
  <RouterView />
  <NewsLetter />
  <Sectionfooter />
</template>

<style></style>
