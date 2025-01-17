<template>
  <button type="submit" class="button-black mt-8"><slot></slot></button>
</template>
<style scoped>
.button-black {
  display: inline-block;
  border-radius: 0.5rem;
  --tw-bg-opacity: 1;
  background-color: rgb(38 38 38 / var(--tw-bg-opacity));
  padding: 0.5rem;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
@media (min-width: 1024px) {
  .button-black {
    padding: 1rem;
  }
}
</style>
