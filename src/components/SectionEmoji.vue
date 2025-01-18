<template>
  <div
    v-for="n in 300"
    :key="n"
    class="Hero_burstImage__izql7"
    :style="{
      top: `${(top = Math.random() * 80 + 15)}%`,
      left: `${(left = Math.random() * 90 + 5)}%`,
      right: `${(right = Math.random() * 10 + 15)}%`,
      bottom: `${(bottom = Math.random() * 20 + 5)}%`,
      transform: `rotate(${Math.random() * 360}deg)`,
      display:
        Math.random() > 0.5 &&
        Math.abs(top - 50) > 10 &&
        Math.abs(left - 50) > 10 &&
        Math.abs(right - 50) > 10 &&
        Math.abs(bottom - 50) > 10
          ? 'block'
          : 'none',
    }"
  ></div>
</template>
<style scoped>
.Hero_burstImage__izql7 {
  position: absolute;
  background-image: url('https://www.anxiousgeneration.com/smile.webp');
  background-size: cover;
  opacity: 1;
  animation: Hero_burstOut__ttAfn 0.5s ease-out 2s forwards;
  z-index: 1;
  height: 24px;
  width: 24px;
}
@media (min-width: 1024px) {
  .Hero_burstImage__izql7 {
    height: 48px;
    width: 48px;
  }
}
</style>
