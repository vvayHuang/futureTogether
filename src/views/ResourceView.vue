<script setup>
import BtnBlack from '@/components/BtnBlack.vue'
import ComponentNavigation from '@/components/ComponentNavigation.vue'
import resource from '@/data/resource'

const { category, books } = resource
</script>

<template>
  <ComponentNavigation />
  <div class="bg-cover bg-yellow-pixels">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-16">
      <h1 class="text-black text-4xl lg:text-5xl font-bold mb-8">資源連結</h1>
      <p>
        這裡所列的是和我們合作的單位或個人的影響力資源，包括書籍、Substack文章、課堂教材和家長指南。<br />
        可以按主題範疇篩選這些資源。所有內容都是為了幫助青少年、家長、教育者和立法者減少手機型童年的影響，<br />
        重建以玩耍為主的童年的美好。
      </p>
    </div>
  </div>
  <!-- 錨點連結 -->
  <div class="bg-yellow-light mt-1 lg:sticky top-12 lg:top-16 z-[99]">
    <div class="max-w-6xl mx-auto lg:flex justify-between items-center p-4">
      <div class="flex flex-col lg:flex-row gap-2 lg:gap-4 mb-4 lg:mb-0">
        <a href="#books" class="text-black underline hover:text-grey">Books</a
        ><a href="#parent" class="text-black underline hover:text-grey">Family Resources</a
        ><a href="#educator" class="text-black underline hover:text-grey">Educator Resources</a
        ><a href="#tools" class="hidden text-black underline hover:text-grey">Tools</a
        ><a href="#newsletters" class="text-black underline hover:text-grey">Newsletters</a
        ><a href="#videos" class="text-black underline hover:text-grey">Videos</a
        ><a href="#podcasts" class="text-black underline hover:text-grey">Podcasts</a
        ><a href="#tech" class="text-black underline hover:text-grey">Tech</a>
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
        srcset="
          https://www.anxiousgeneration.com/_next/image?url=%2Fgi%2Fgi-guide.png&w=384&q=75 1x,
          https://www.anxiousgeneration.com/_next/image?url=%2Fgi%2Fgi-guide.png&w=750&q=75 2x
        "
        src="https://www.anxiousgeneration.com/_next/image?url=%2Fgi%2Fgi-guide.png&w=750&q=75"
        style="color: transparent"
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
      <div class="p-4 bg-gray-100 rounded-full">
        <img
          :alt="Books"
          loading="lazy"
          width="24"
          height="24"
          decoding="async"
          data-nimg="1"
          class="w-8 h-8"
          :src="item.imageSrc"
          style="color: transparent"
        />
      </div>
      {{ item.title }}
    </h2>
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
