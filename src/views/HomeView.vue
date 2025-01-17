<script setup>
import NewsLetter from '@/components/NewsLetter.vue'
import SectionDescription from '@/components/SectionDescription.vue'
import SectionFeatureIn from '@/components/SectionFeatureIn.vue'
import SectionFreeAnixious from '@/components/SectionFreeAnixious.vue'
import SectionHeader from '@/components/SectionHeader.vue'
import SectionHero from '@/components/SectionHero.vue'
import SectionOrgaMap from '@/components/SectionOrgaMap.vue'
import SectionSlogan from '@/components/SectionSlogan.vue'
</script>

<template>
  <SectionHeader />
  <main>
    <SectionHero />
    <SectionDescription />
    <SectionSlogan />
    <SectionFreeAnixious />
    <SectionOrgaMap />
    <SectionFeatureIn />
    <NewsLetter />
  </main>
</template>
