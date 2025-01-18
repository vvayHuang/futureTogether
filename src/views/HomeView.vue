<script setup>
import ComponentNavigation from '@/components/ComponentNavigation.vue'
import SectionDescription from '@/components/SectionDescription.vue'
import SectionFeatureIn from '@/components/SectionFeatureIn.vue'
import SectionFreeAnixious from '@/components/SectionFreeAnixious.vue'
import SectionHero from '@/components/SectionHero.vue'
import SectionOrgaMap from '@/components/SectionOrgaMap.vue'
import SectionSlogan from '@/components/SectionSlogan.vue'
</script>

<template>
  <ComponentNavigation />
  <main>
    <SectionHero />
    <SectionDescription />
    <SectionSlogan />
    <SectionFreeAnixious />
    <SectionOrgaMap />
    <SectionFeatureIn />
  </main>
</template>
