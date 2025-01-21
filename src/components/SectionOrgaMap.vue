<script setup>
import BtnBlack from './BtnBlack.vue'
</script>

<template>
  <div class="relative lg:mb-24 bg-[#A8D3DF]">
    <div
      class="pointer-events-none relative z-[3] grid lg:grid-cols-2 text-black max-w-6xl mx-auto px-4 py-8 lg:py-24"
    >
      <div
        class="pointer-events-auto flex-1 space-y-8 p-8 bg-[rgb(231,248,248)] rounded-md lg:rounded-l-md"
      >
        <div class="space-y-4">
          <h3 class="text-2xl font-semibold">尋找合作夥伴</h3>
          <p>
            協助尋找在你關注的問題上與你目標一致的機構和專家，大
            家一起努力結束以手機為中心的童年，重建以遊戲為基礎的 童年。
          </p>
          <BtnBlack
            ><a target="_blank" href="https://www.anxiousgeneration.com/aligned-orgs"
              >看全部</a
            ></BtnBlack
          >
        </div>
      </div>
      <div class="pointer-events-none"></div>
    </div>
    <!-- 地圖 -->
    <div
      class="pointer-events-auto top-0 absolute z-[2] w-full h-full"
      style="
        background: center 0 / cover no-repeat
          url('https://images.unsplash.com/photo-1713098965471-d324f294a71d?q=80&w=1802&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
      "
    ></div>
  </div>
</template>
