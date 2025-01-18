<script setup>
import BtnBlack from '@/components/BtnBlack.vue'
import ComponentNavigation from '@/components/ComponentNavigation.vue'
import takeAction from '@/data/take-action'

const { parents, school, genZ, legislators, everyone, category } = takeAction
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
          <router-link to="/phonefreeschool"><BtnBlack>請廣周知</BtnBlack></router-link>
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
  <div
    v-for="item in [category[0]]"
    :key="item.id"
    class="max-w-6xl px-4 text-black mx-auto pt-8 lg:flex justify-between items-start flex-col"
    :id="item.name"
  >
    <h2 class="flex items-center gap-4">
      {{ item.subTitle }}
    </h2>
    <p class="max-w-3xl">{{ item.description }}</p>
    <div class="max-w-7xl grid grid-cols-1 lg:grid-cols-4 gap-4 mx-auto px-4 py-8">
      <div
        v-for="item in parents"
        :key="item.id"
        class="grid grid-rows-[auto_auto_1fr_auto] gap-4 bg-gray-100 rounded-lg p-4 h-full"
      >
        <img
          :alt="item.imageAlt"
          loading="lazy"
          width="300"
          height="200"
          decoding="async"
          data-nimg="1"
          class="w-full aspect-[10/5] rounded object-cover"
          :srcset="item.secret"
          :src="item.imageSrc"
          style="color: transparent"
        />
        <h3 class="text-xl font-bold">{{ item.title }}</h3>
        <p>
          {{ item.content }}
        </p>
        <div>
          <a :href="item.href" target="_blank"
            ><BtnBlack>{{ item.buttonText }}</BtnBlack></a
          >
        </div>
      </div>
    </div>
  </div>
  <div
    v-for="item in [category[1]]"
    :key="item.id"
    class="max-w-6xl px-4 text-black mx-auto pt-8 lg:flex justify-between items-start flex-col"
    :id="item.name"
  >
    <h2 class="flex items-center gap-4">
      {{ item.subTitle }}
    </h2>
    <p class="max-w-3xl">{{ item.description }}</p>
    <div class="max-w-7xl grid grid-cols-1 lg:grid-cols-4 gap-4 mx-auto px-4 py-8">
      <div
        v-for="item in school"
        :key="item.id"
        class="grid grid-rows-[auto_auto_1fr_auto] gap-4 bg-gray-100 rounded-lg p-4 h-full"
      >
        <img
          :alt="item.imageAlt"
          loading="lazy"
          width="300"
          height="200"
          decoding="async"
          data-nimg="1"
          class="w-full aspect-[10/5] rounded object-cover"
          :srcset="item.secret"
          :src="item.imageSrc"
          style="color: transparent"
        />
        <h3 class="text-xl font-bold">{{ item.title }}</h3>
        <p>
          {{ item.content }}
        </p>
        <div>
          <a :href="item.href" target="_blank"
            ><BtnBlack>{{ item.buttonText }}</BtnBlack></a
          >
        </div>
      </div>
    </div>
  </div>
  <div
    v-for="item in [category[2]]"
    :key="item.id"
    class="max-w-6xl px-4 text-black mx-auto pt-8 lg:flex justify-between items-start flex-col"
    :id="item.name"
  >
    <h2 class="flex items-center gap-4">
      {{ item.subTitle }}
    </h2>
    <p class="max-w-3xl">{{ item.description }}</p>
    <div class="max-w-7xl grid grid-cols-1 lg:grid-cols-4 gap-4 mx-auto px-4 py-8">
      <div
        v-for="item in genZ"
        :key="item.id"
        class="grid grid-rows-[auto_auto_1fr_auto] gap-4 bg-gray-100 rounded-lg p-4 h-full"
      >
        <img
          :alt="item.imageAlt"
          loading="lazy"
          width="300"
          height="200"
          decoding="async"
          data-nimg="1"
          class="w-full aspect-[10/5] rounded object-cover"
          :srcset="item.secret"
          :src="item.imageSrc"
          style="color: transparent"
        />
        <h3 class="text-xl font-bold">{{ item.title }}</h3>
        <p>
          {{ item.content }}
        </p>
        <div>
          <a :href="item.href" target="_blank"
            ><BtnBlack>{{ item.buttonText }}</BtnBlack></a
          >
        </div>
      </div>
    </div>
  </div>
  <div
    v-for="item in [category[3]]"
    :key="item.id"
    class="max-w-6xl px-4 text-black mx-auto pt-8 lg:flex justify-between items-start flex-col"
    :id="item.name"
  >
    <h2 class="flex items-center gap-4">
      {{ item.subTitle }}
    </h2>
    <p class="max-w-3xl">{{ item.description }}</p>
    <div class="max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-4 mx-auto px-4 py-8">
      <div
        v-for="item in legislators"
        :key="item.id"
        class="grid grid-rows-[auto_auto_1fr_auto] gap-4 bg-gray-100 rounded-lg p-4 h-full"
      >
        <img
          :alt="item.imageAlt"
          loading="lazy"
          width="300"
          height="200"
          decoding="async"
          data-nimg="1"
          class="w-full aspect-[10/5] rounded object-cover"
          :srcset="item.secret"
          :src="item.imageSrc"
          style="color: transparent"
        />
        <h3 class="text-xl font-bold">{{ item.title }}</h3>
        <p>
          {{ item.content }}
        </p>
        <div>
          <a :href="item.href" target="_blank"
            ><BtnBlack>{{ item.buttonText }}</BtnBlack></a
          >
        </div>
      </div>
    </div>
  </div>
  <div
    v-for="item in [category[4]]"
    :key="item.id"
    class="max-w-6xl px-4 text-black mx-auto pt-8 lg:flex justify-between items-start flex-col"
    :id="item.name"
  >
    <h2 class="flex items-center gap-4">
      {{ item.subTitle }}
    </h2>
    <p class="max-w-3xl">{{ item.description }}</p>
    <div class="max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto px-4 pt-8 pb-8 lg:pb-16">
      <div v-for="item in everyone" :key="item.id" class="p-4 lg:p-8 rounded-md bg-gray-100">
        <div>
          <div class="flex items-center gap-4">
            <div class="bg-white rounded-full items-center flex justify-center p-4">
              <img
                :alt="item.imageAlt"
                loading="lazy"
                width="24"
                height="24"
                decoding="async"
                data-nimg="1"
                class="w-12 h-auto"
                :src="item.imageSrc"
                style="color: transparent"
              />
            </div>
            <h3 class="text-xl font-bold">{{ item.title }}</h3>
          </div>
          <p class="text-base py-4">
            {{ item.content }}
          </p>
          <div>
            <a :href="item.href" target="_blank"
              ><BtnBlack>{{ item.buttonText }}</BtnBlack></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="relative px-4 bg-[rgb(231,248,248)] text-black">
    <div class="absolute inset-0 z-0">
      <img
        alt="Background"
        loading="lazy"
        decoding="async"
        data-nimg="fill"
        class=""
        sizes="100vw"
        srcset="
          https://www.anxiousgeneration.com/_next/image?url=%2Foutline-map.png&w=640&q=75   640w,
          https://www.anxiousgeneration.com/_next/image?url=%2Foutline-map.png&w=750&q=75   750w,
          https://www.anxiousgeneration.com/_next/image?url=%2Foutline-map.png&w=828&q=75   828w,
          https://www.anxiousgeneration.com/_next/image?url=%2Foutline-map.png&w=1080&q=75 1080w,
          https://www.anxiousgeneration.com/_next/image?url=%2Foutline-map.png&w=1200&q=75 1200w,
          https://www.anxiousgeneration.com/_next/image?url=%2Foutline-map.png&w=1920&q=75 1920w,
          https://www.anxiousgeneration.com/_next/image?url=%2Foutline-map.png&w=2048&q=75 2048w,
          https://www.anxiousgeneration.com/_next/image?url=%2Foutline-map.png&w=3840&q=75 3840w
        "
        src="https://www.anxiousgeneration.com/_next/image?url=%2Foutline-map.png&w=3840&q=75"
        style="
          position: absolute;
          height: 100%;
          width: 100%;
          inset: 0px;
          object-fit: cover;
          color: transparent;
        "
      />
    </div>
    <div v-for="item in [category[5]]" :key="item.id" class="relative z-10 max-w-5xl mx-auto py-12">
      <h2 class="mb-8">{{ item.subTitle }}</h2>
      <div class="py-8 grid lg:grid-cols-2 gap-8" :id="item.name">
        <div class="bg-white rounded-lg p-4 md:p-8 flex flex-col space-y-4">
          <h3 class="text-xl font-bold">Let Grow</h3>
          <p>
            <img
              alt="Let Grow"
              loading="lazy"
              width="300"
              height="177"
              decoding="async"
              data-nimg="1"
              class="max-w-[170px] float-right pb-4 pl-4"
              srcset="
                https://www.anxiousgeneration.com/_next/image?url=%2Fletgrow.png&w=384&q=75 1x,
                https://www.anxiousgeneration.com/_next/image?url=%2Fletgrow.png&w=640&q=75 2x
              "
              src="https://www.anxiousgeneration.com/_next/image?url=%2Fletgrow.png&w=640&q=75"
              style="color: transparent"
            />我們正與許多合作組織攜手合作， 致力於減少手機型童年的影響，重
            建以遊戲為基礎的童年。我們與 Let Grow建立了特別的合作關係， 合作組織
            該組織致力於讓孩子獲得必要的獨立性， 幫助他們成長為有能力、自信且快樂的成年人，
            並讓這一過程變得簡單、正常且合法化。
          </p>
          <div>
            <a
              href="https://letgrow.org/program/anxious-generation/"
              target="_blank"
              rel="noopener noreferrer inl"
              class="hover:underline"
              >Visit Let Grow for more →</a
            >
          </div>
        </div>
        <div class="bg-white rounded-lg p-4 md:p-8 flex flex-col gap-2 space-y-4">
          <h3 class="text-xl font-bold">合作組織</h3>
          <img
            alt="Aligned Organizations"
            loading="lazy"
            width="300"
            height="177"
            decoding="async"
            data-nimg="1"
            class="w-full rounded-md aspect-[16/4] object-cover"
            srcset="
              https://www.anxiousgeneration.com/_next/image?url=%2Faligned-orgs.webp&w=384&q=75 1x,
              https://www.anxiousgeneration.com/_next/image?url=%2Faligned-orgs.webp&w=640&q=75 2x
            "
            src="https://www.anxiousgeneration.com/_next/image?url=%2Faligned-orgs.webp&w=640&q=75"
            style="color: transparent"
          />
          <p>致力於結束手機型童年並重建遊戲型童年的相關組織。</p>
          <div><a class="hover:underline" href="/aligned-orgs">View orgs →</a></div>
        </div>
      </div>
    </div>
  </div>
  <div v-for="item in [category[6]]" :key="item.id" class="relative px-4" :id="item.name">
    <div class="absolute inset-0 z-0">
      <img
        alt="Background"
        loading="lazy"
        decoding="async"
        data-nimg="fill"
        sizes="100vw"
        srcset="
          https://www.anxiousgeneration.com/_next/image?url=%2Fslideshow%2F11_0A8012.jpg&w=640&q=75   640w,
          https://www.anxiousgeneration.com/_next/image?url=%2Fslideshow%2F11_0A8012.jpg&w=750&q=75   750w,
          https://www.anxiousgeneration.com/_next/image?url=%2Fslideshow%2F11_0A8012.jpg&w=828&q=75   828w,
          https://www.anxiousgeneration.com/_next/image?url=%2Fslideshow%2F11_0A8012.jpg&w=1080&q=75 1080w,
          https://www.anxiousgeneration.com/_next/image?url=%2Fslideshow%2F11_0A8012.jpg&w=1200&q=75 1200w,
          https://www.anxiousgeneration.com/_next/image?url=%2Fslideshow%2F11_0A8012.jpg&w=1920&q=75 1920w,
          https://www.anxiousgeneration.com/_next/image?url=%2Fslideshow%2F11_0A8012.jpg&w=2048&q=75 2048w,
          https://www.anxiousgeneration.com/_next/image?url=%2Fslideshow%2F11_0A8012.jpg&w=3840&q=75 3840w
        "
        src="https://www.anxiousgeneration.com/_next/image?url=%2Fslideshow%2F11_0A8012.jpg&w=3840&q=75"
        style="
          position: absolute;
          height: 100%;
          width: 100%;
          inset: 0px;
          object-fit: cover;
          color: transparent;
        "
      />
    </div>
    <div class="relative z-10 max-w-3xl mx-auto py-64">
      <div
        class="p-4 lg:p-8 rounded-lg border-4 border-black bg-white text-black flex flex-col lg:flex-row justify-between items-center gap-8"
      >
        <span class="text-lg flex flex-col lg:flex-row items-center gap-8"
          ><div class="bg-yellow rounded-full items-center flex justify-center p-4">
            <img
              alt="Share your Story"
              loading="lazy"
              width="24"
              height="24"
              decoding="async"
              data-nimg="1"
              class="w-28 h-auto"
              src="https://www.anxiousgeneration.com/share.svg"
              style="color: transparent"
            />
          </div>
          <p class="text-base">
            <b class="font-bold">{{ item.subTitle }}</b
            ><br />如果讀過這本書你發生了一些改變，也許是在現實
            世界裡變得不那麼過度保護孩子，或者在網絡世界
            中開始更加注重保護孩子，非常歡迎和我們分享你 的故事。
          </p></span
        >
        <div class="min-w-[200px]">
          <a href="https://www.anxiousgeneration.com/your-story"
            ><BtnBlack class="mt-0">Share your story</BtnBlack></a
          >
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
