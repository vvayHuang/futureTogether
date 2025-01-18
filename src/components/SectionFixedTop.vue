import VueRouter from 'vue-router'
<template>
  <div
    class="bg-black text-yellow font-bold banner relative z-50 lg:flex py-2 lg:py-4 px-2 lg:px-8 text-center justify-center text-xs sm:text-sm"
  >
    <a
      href="#main-content"
      class="absolute -left-[9999px] -top-[9999px] p-2 bg-white text-black rounded w-[175px] text-sm text-center focus:left-2 focus:top-2 focus:z-[50]"
      >Skip to Main Content</a
    ><router-link to="/phonefreeschool" class="hover:underline text-yellow" target="_self"
      >加入無手機校園方案</router-link
    >
  </div>
</template>
