<script setup lang="ts">
import BtnBlack from './BtnBlack.vue'
</script>

<template>
  <div class="bg-white text-gray-900">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center py-16">
        <h2 class="large">我們可以如何一起行動 挽救焦慮世代？</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div class="space-y-4 bg-green-light rounded-lg p-4 lg:p-8">
          <img
            alt=""
            aria-hidden="true"
            loading="lazy"
            width="64"
            height="64"
            decoding="async"
            data-nimg="1"
            class="text-green mx-auto lg:-mt-16"
            style="color: transparent"
            src="https://images.ctfassets.net/o6e8cqq8kv0k/23XICX4Si8urB38DWGJ52R/cc305378e66f4371b6c8fd95744549d5/no-phone.svg"
          />
          <h2 class="text-xl font-bold text-center">逆轉以手機為主的童年</h2>
          <p class="text-center">
            這表示要把孩子接觸智能手機的時間延遲到高中，接觸社交媒體平台的時間
            延遲到16歲。學校需要實現無手機環境。
          </p>
          <p class="text-center">
            <router-link class="underline" to="/phonefreeschool">了解無手機學校環境</router-link>
          </p>
        </div>
        <div class="space-y-4 bg-green-light rounded-lg p-4 lg:p-8">
          <img
            alt=""
            aria-hidden="true"
            loading="lazy"
            width="64"
            height="64"
            decoding="async"
            data-nimg="1"
            class="text-green mx-auto lg:-mt-16"
            style="color: transparent"
            src="https://images.ctfassets.net/o6e8cqq8kv0k/3MdtOWJhO3Yn1dQtgkEi5q/bdd3e395af7cc54454e249f682ccc625/play.svg"
          />
          <h2 class="text-xl font-bold text-center">恢復以遊戲為主的童年</h2>
          <p class="text-center">
            這表示要把孩子接觸智能手機的時間延遲到高中，接觸社交媒體平台的時間
            延遲到16歲。學校需要實現無手機環境。
          </p>
        </div>
        <div class="space-y-4 bg-green-light rounded-lg p-4 lg:p-8">
          <img
            alt=""
            aria-hidden="true"
            loading="lazy"
            width="64"
            height="64"
            decoding="async"
            data-nimg="1"
            class="text-green mx-auto lg:-mt-16"
            style="color: transparent"
            src="https://images.ctfassets.net/o6e8cqq8kv0k/6aI7oeCnXsYr71GBhvvRCU/aed560b63d6de99537fe95573a0d936d/world.svg"
          />
          <h2 class="text-xl font-bold text-center">重拾現實世界中的生活</h2>
          <p class="text-center">
            讓孩子用自主活動，以及與朋友相處的現 實體驗來取代花在螢幕上的時間，並進一
            步讓他們體會到限制使用電子設備不是受 到剝奪，而是為他們開啟一個充滿新的機會的世界。
          </p>
        </div>
      </div>
    </div>
    <div
      class="bg-[url('https://www.anxiousgeneration.com/grasstowhite.webp')] bg-cover bg-bottom pb-16"
    >
      <div class="grid lg:grid-cols-2 text-black px-4 max-w-6xl mx-auto rounded-md">
        <div class="flex-1 space-y-8 items-center p-16 bg-green-light rounded-l-md">
          <div class="flex items-start space-x-4">
            <div
              class="flex-shrink-0 w-10 h-10 rounded-full bg-green flex items-center justify-center"
            >
              <span class="text-white font-bold">1</span>
            </div>
            <div><h3 class="text-xl font-semibold">高中前禁用智能手機</h3></div>
          </div>
          <div class="flex items-start space-x-4">
            <div
              class="flex-shrink-0 w-10 h-10 rounded-full bg-green flex items-center justify-center"
            >
              <span class="text-white font-bold">2</span>
            </div>
            <div><h3 class="text-xl font-semibold">16歲前不使用社交媒體</h3></div>
          </div>
          <div class="flex items-start space-x-4">
            <div
              class="flex-shrink-0 w-10 h-10 rounded-full bg-green flex items-center justify-center"
            >
              <span class="text-white font-bold">3</span>
            </div>
            <div><h3 class="text-xl font-semibold">無手機學校</h3></div>
          </div>
          <div class="flex items-start space-x-4">
            <div
              class="flex-shrink-0 w-10 h-10 rounded-full bg-green flex items-center justify-center"
            >
              <span class="text-white font-bold">4</span>
            </div>
            <div>
              <h3 class="text-xl font-semibold">更多自由遊戲、現實世界的責任與獨立性</h3>
            </div>
          </div>
        </div>
        <div class="flex-1 space-y-8 p-8 bg-green-lighter rounded-r-md">
          <div class="space-y-4">
            <h3 class="text-2xl font-semibold">建立四個新準則</h3>
            <div class="hidden">
              In *The Anxious Generation*, Jonathan Haidt lays out four reforms or “new norms” that
              would provide a foundation for a healthier kind of childhood in the digital age. Each
              norm helps parents and teens escape the social trap they find themselves in. No teen
              wants to be the only one who does not have a smartphone and social media, and no
              parent wants to socially isolate their child. These four norms help families escape
              the trap and reverse the two big (well-intentioned) mistakes we’ve made:
              overprotecting children in the real world and under-protecting them online. [Download
              the summary PDF](/pdfs/four-norms.pdf) or find more ways you can take action to
              establish four new norms.
            </div>
            <p>
              <em>《失控的焦慮世代》</em>提出了四項改革的新準則，為數位時代中更健
              康的童年時光奠定基礎。每個準則都希望幫助家長和青少年擺脫當
              前的社交困境。沒有青少年願意成為唯一沒有智能手機和社交媒體
              的人，也沒有家長願意讓自己的孩子在社交上被孤立。這四項新準
              則可以協助家庭走出困境，並逆轉我們犯下的兩個（本意良好的）
              重大錯誤：在現實世界中過度保護孩子，卻在網絡世界中對他們保 護不足。
            </p>
            <p>
              <a href="https://www.anxiousgeneration.com/pdfs/four-norms.pdf" class="underline"
                >下載摘要 PDF</a
              >
              或探索更多方法，幫助推動這四項新準則的建立。
            </p>
            <div class="text-white">
              <div>
                <BtnBlack><router-link to="takeaction">採取行動</router-link></BtnBlack>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
h2.large {
  padding-bottom: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.5rem;
}
@media (min-width: 768px) {
  h2.large {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
}
.bg-green-light {
  background-color: hsla(87, 97%, 85%, 0.3);
}
.bg-green {
  --tw-bg-opacity: 1;
  background-color: rgb(93 167 2 / var(--tw-bg-opacity));
}
</style>
