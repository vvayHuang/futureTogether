<script setup>
import BtnBlack from '@/components/BtnBlack.vue'
import ComponentNavigation from '@/components/ComponentNavigation.vue'
import takeAction from '@/data/take-action'

const { category } = takeAction
</script>

<template>
  <ComponentNavigation />
  <div class="bg-cover bg-yellow-pixels">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-16">
      <h1 class="text-black text-4xl lg:text-5xl font-bold mb-8">採取行動</h1>
      <p>
        我們每個人都有責任協助減少手機型童年的影響，並幫助孩子們在現實世界中重新獲得更多的獨立性。
        在《失控的焦慮世代》中，海德特提出了四項改革或新準則，以便為數位時代更健康的童年奠定基礎。
        光是一個人、一個家庭，或一所學校，往往難以逆轉日益增長的螢幕幕使用時間，但如果我們共同努力，就可以力挽狂瀾。
        請瀏覽以下資源，大家一起採取行動，從現在開始改變！
      </p>
    </div>
  </div>
  <div class="max-w-7xl mx-auto px-4 pt-8">
    <h2 class="py-8" id="featured">主力行動</h2>
    <div class="pb-16">
      <div
        class="bg-gray-100 rounded-xl p-4 lg:p-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-4 lg:gap-16"
      >
        <div class="order-2 lg:order-1 space-y-4 lg:space-y-6">
          <h3 class="font-bold text-2xl">怎樣可以讓學校成為無手機校園？</h3>
          <p>
            「我們怎樣才能讓學校成為無手機環境？」這是我們收到最
            多的問題之一。因此我們整理了一個行動方案來幫助你找到 答案。
          </p>
          <a class="button-black inline-block" href="/phone-free-schools">Get started</a>
        </div>
        <img
          alt="ow can we makes chools phone-free?"
          loading="lazy"
          width="202"
          height="538"
          decoding="async"
          data-nimg="1"
          class="order-1: lg:order-2 w-full -mt-4 lg:mt-0"
          srcset="
            https://www.anxiousgeneration.com/_next/image?url=%2Fphone-free-schools%2Fthumbnail.png&w=256&q=75 1x,
            https://www.anxiousgeneration.com/_next/image?url=%2Fphone-free-schools%2Fthumbnail.png&w=640&q=75 2x
          "
          src="https://www.anxiousgeneration.com/_next/image?url=%2Fphone-free-schools%2Fthumbnail.png&w=640&q=75"
          style="color: transparent"
        />
      </div>
    </div>
  </div>
  <!-- 錨點連結 -->
  <div class="bg-yellow-light mt-1 lg:sticky top-12 lg:top-16 z-[99]">
    <div class="max-w-6xl mx-auto lg:flex justify-between items-center p-4">
      <div class="flex flex-col lg:flex-row gap-2 lg:gap-4 mb-4 lg:mb-0">
        <a
          v-for="item in category"
          :key="item.id"
          :href="item.href"
          class="text-black underline hover:text-grey"
          >{{ item.title }}</a
        >
      </div>
    </div>
  </div>
  <div class="mt-12 mb-4 px-4">
    <div
      class="mx-auto max-w-6xl bg-gray-100 rounded-xl p-4 lg:p-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-4 lg:gap-16"
    >
      <div class="order-2 lg:order-1 space-y-4 lg:space-y-6">
        <h3 class="font-bold text-2xl">本月主力合作</h3>
        <p>
          我們與 Good Inside 的創始人貝基·肯尼迪博士（Dr. Becky
          Kennedy）攜手合作，推出了這本實用且充滿力量
          的家長指南。指南中包含五個簡單且可執行的策略，幫助
          家長與孩子（無論其年齡）設立界限、抵制他們對智能手
          機和社交媒體的要求，並培養他們的自信心、獨立性和抗 壓能力。
        </p>
        <a
          href="https://www.goodinside.com/access-anxiousgenerationguide-lp/?utm_source=free_guide&amp;utm_medium=partner&amp;utm_campaign=tag-parent-lp"
          target="_blank"
          ><BtnBlack>Download Guide</BtnBlack></a
        >
      </div>
      <img
        alt="Good Inside X TAG Parent Guide"
        loading="lazy"
        width="328"
        height="443"
        decoding="async"
        data-nimg="1"
        class="order-1: lg:order-2 w-full lg:-mt-32 lg:-mb-32"
        style="color: transparent"
        srcset="
          https://www.anxiousgeneration.com/_next/image?url=%2Fgi%2Fgi-guide.png&w=384&q=75 1x,
          https://www.anxiousgeneration.com/_next/image?url=%2Fgi%2Fgi-guide.png&w=750&q=75 2x
        "
        src="https://www.anxiousgeneration.com/_next/image?url=%2Fgi%2Fgi-guide.png&w=750&q=75"
      />
    </div>
  </div>
  <div
    v-for="item in category"
    :key="item.id"
    class="max-w-6xl px-4 text-black mx-auto pt-8 lg:flex justify-between items-start flex-col"
    :id="item.href"
  >
    <h2 class="flex items-center gap-4">
      {{ item.subTitle }}
    </h2>
    <p class="max-w-3xl">{{ item.description }}</p>
    <p class="hidden">Add some description here</p>
    <div class="max-w-6xl mx-auto relative flex items-center pb-8 text-black px-4">
      <div class="flex overflow-x-scroll hide-scroll-bar w-full space-x-2 lg:space-x-4">
        <div
          v-for="item in books"
          :key="item.id"
          class="min-h-64 my-4 min-w-60 max-w-60 p-2 lg:p-4 bg-gray-100 rounded-md border-t-4 border-gray-500 flex flex-col justify-between"
        >
          <div>
            <a :href="item.href" target="_blank"
              ><img
                :alt="item.imageAlt"
                loading="lazy"
                width="417"
                height="630"
                decoding="async"
                data-nimg="1"
                class="w-auto h-[180px] mx-auto"
                :src="item.imageSrc"
                style="color: transparent"
            /></a>
          </div>
          <div class="rounded-sm mt-2 w-full text-center text-xs bg-white p-2">
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
h2 {
  padding-bottom: 0.5rem;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
}
@media (min-width: 1024px) {
  h2 {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
}
.bg-yellow-pixels {
  background-image: url('https://www.anxiousgeneration.com/yellow-pixels.webp');
}
.bg-yellow-light {
  --tw-bg-opacity: 1;
  background-color: rgb(255 237 143 / var(--tw-bg-opacity));
}
</style>
