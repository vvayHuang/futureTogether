<script setup>
import ComponentNavigation from '@/components/ComponentNavigation.vue'
import articleData from '@/data/research'
const { article } = articleData
</script>

<template>
  <ComponentNavigation />
  <div v-if="$route.path === '/research'">
    <div class="bg-cover bg-yellow-pixels">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-16">
        <h1 class="text-black text-4xl lg:text-5xl font-bold mb-8">延伸閱讀</h1>
        <p>
          《失控的焦慮世代》除了書的內容紮實豐富之外，<br />因為海德特教授和他的團隊還有許多研究資料可供讀者參考，因此我們整理其中可轉譯為中文的內容，收錄在這裡。<br />此外，我們也會把臺灣相關的文章收錄在這裡。
        </p>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-4 py-8">
      <section aria-labelledby="additional-research">
        <div class="flex flex-col justify-between pb-2">
          <div class="mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-4 pt-6">
            <div
              v-for="item in article"
              :key="item.id"
              class="flex flex-col items-start border-b justify-between items-center"
            >
              <router-link :to="item.href" class="flex flex-col justify-between h-full min-w-full">
                <div class="relative h-32 w-full">
                  <img
                    :alt="item.imageAlt"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    class="aspect-[16/9] w-full rounded-md bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    sizes="100vw"
                    :srcset="item.srcset"
                    :src="item.imageSrc"
                    style="
                      position: absolute;
                      height: 100%;
                      width: 100%;
                      inset: 0px;
                      color: transparent;
                    "
                  />
                </div>
                <div class="max-w-md">
                  <h3 class="text-xl text-black font-bold pb-2 mt-4">{{ item.title }}</h3>
                </div>
                <div class="group relative">
                  <p class="text-base text-gray-600 flex flex-grow">
                    {{ item.content }}
                  </p>
                </div>
                <div class="relative mt-8 pb-3 flex flex-row justify-between">
                  <p class="text-xs text-gray-500">{{ item.date }}</p>
                </div></router-link
              >
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <router-view></router-view>
</template>
<style scoped>
.bg-yellow-pixels {
  background-image: url('https://www.anxiousgeneration.com/yellow-pixels.webp');
}
</style>
