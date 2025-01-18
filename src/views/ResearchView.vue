<script setup>
import ComponentNavigation from '@/components/ComponentNavigation.vue'
</script>

<template>
  <ComponentNavigation />
  <div class="bg-cover bg-yellow-pixels">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-16">
      <h1 class="text-black text-4xl lg:text-5xl font-bold mb-8">延伸閱讀</h1>
      <p>
        大家都常聽許多世代的劃分說法。<br />
        譬如，1946至1964年間出生是「嬰兒潮世代」，1965至1980年出生是「X世代」，<br />
        1981至1995年出生是「Y世代」，1996年到2012年之間出生的是「Z世代」。<br />
        在掀起全球話題與熱烈關注的《失控的焦慮世代》這本書裡，<br />
        作者海德特所定義的「焦慮世代」則是從「Z世代」談起，但不只包含Z世代。<br />
        他觀察到Z世代不同於之前的世代，呈現許多特別的焦慮狀態，而形成這些焦慮狀態的又有些特別的社會和個人因素。<br />
        所以他認為除非能改變讓孩子如此焦慮的童年環境，那麼不管Z世代之後是叫Alpha世代還是Beta世代，<br />
        <br />
        其實他們都仍然還是焦慮世代。<br />
      </p>
    </div>
  </div>
</template>
<style scoped>
.bg-yellow-pixels {
  background-image: url('https://www.anxiousgeneration.com/yellow-pixels.webp');
}
</style>
