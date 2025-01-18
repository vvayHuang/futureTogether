<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/20/solid'
import BtnBlack from '@/components/BtnBlack.vue'
import ComponentNavigation from '@/components/ComponentNavigation.vue'
import faqForPhoneFreeSchool from '@/data/faq-for-phone-free-school'

const { faq, category } = faqForPhoneFreeSchool
</script>

<template>
  <ComponentNavigation />
  <div class="bg-black">
    <div class="relative">
      <div
        class="z-10 relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-16 items-center px-4"
      >
        <div class="lg:col-span-8 px-2 pt-8 lg:p-8 mx-auto">
          <h1 class="text-white text-3xl lg:text-6xl font-bold relative inline-block">
            <span class="relative inline-block"
              ><span class="absolute -inset-10 bg-black transform -rotate-2 -skew-x-6 z-0"></span
              ><span class="relative z-10 font-bold"
                >怎樣可以讓學校<br />成為無手機校園？</span
              ></span
            >
          </h1>
        </div>
        <div class="lg:col-span-4 pt-4 lg:pt-24">
          <img
            alt="Foreground"
            loading="lazy"
            width="960"
            height="693"
            decoding="async"
            data-nimg="1"
            class="max-w-[200px] sm:max-w-[300px] mx-auto lg:max-w-full"
            style="color: transparent"
            srcset="
              https://www.anxiousgeneration.com/_next/image?url=%2Fphone-free-schools%2Fphone-header.png&w=1080&q=75 1x,
              https://www.anxiousgeneration.com/_next/image?url=%2Fphone-free-schools%2Fphone-header.png&w=1920&q=75 2x
            "
            src="https://www.anxiousgeneration.com/_next/image?url=%2Fphone-free-schools%2Fphone-header.png&w=1920&q=75"
          />
        </div>
      </div>
      <div class="absolute z-0 top-0 left-0 w-full h-full">
        <img
          alt="Background"
          loading="lazy"
          decoding="async"
          data-nimg="fill"
          class="object-cover"
          style="
            position: absolute;
            height: 100%;
            width: 100%;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            color: transparent;
          "
          sizes="100vw"
          srcset="
            https://www.anxiousgeneration.com/_next/image?url=%2Fphone-free-schools%2Fphone-bg-3.jpg&w=640&q=75   640w,
            https://www.anxiousgeneration.com/_next/image?url=%2Fphone-free-schools%2Fphone-bg-3.jpg&w=750&q=75   750w,
            https://www.anxiousgeneration.com/_next/image?url=%2Fphone-free-schools%2Fphone-bg-3.jpg&w=828&q=75   828w,
            https://www.anxiousgeneration.com/_next/image?url=%2Fphone-free-schools%2Fphone-bg-3.jpg&w=1080&q=75 1080w,
            https://www.anxiousgeneration.com/_next/image?url=%2Fphone-free-schools%2Fphone-bg-3.jpg&w=1200&q=75 1200w,
            https://www.anxiousgeneration.com/_next/image?url=%2Fphone-free-schools%2Fphone-bg-3.jpg&w=1920&q=75 1920w,
            https://www.anxiousgeneration.com/_next/image?url=%2Fphone-free-schools%2Fphone-bg-3.jpg&w=2048&q=75 2048w,
            https://www.anxiousgeneration.com/_next/image?url=%2Fphone-free-schools%2Fphone-bg-3.jpg&w=3840&q=75 3840w
          "
          src="https://www.anxiousgeneration.com/_next/image?url=%2Fphone-free-schools%2Fphone-bg-3.jpg&w=3840&q=75"
        />
      </div>
    </div>
  </div>
  <!-- 錨點連結 -->
  <div class="bg-[#F4FEE7] mt-1 lg:sticky top-12 lg:top-20 z-[49]">
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
  <div class="max-w-4xl mx-auto pt-4 lg:pt-16 px-4 space-y-4">
    <h2 class="text-3xl -indent-4">
      「我們怎樣才能讓學校成為無手機環境？」<br />
      這是我們收到最多的問題之一。 <br />因此我們整理了一個行動方案來幫助大家找到答案。
    </h2>
    <p>
      我們還把這些資源整合到三個行動套件中⸺分別適用於學校管理者、家長和老師。<br />
      請先看我們為所有人準備的建議，然後選擇最適合您的行動套件。<br />
      附註：有任何反饋、想法或需求，請隨時給我們留言！<br />
    </p>
  </div>
  <div class="max-w-6xl mx-auto py-4 lg:py-16">
    <div class="px-4">
      <div class="p-4 lg:py-4 lg:px-8 rounded-xl bg-gray-100 my-4">
        <div class="flex flex-col lg:flex-row justify-between lg:items-center">
          <div class="flex flex-col grow">
            <p class="text-base pb-4 lg:py-4">
              <b> 取得你個人無手機學校行動套件</b
              ><br />準備好開始了嗎？告訴我們你的身份，我們將為你發送合適的行動套件！有任何反饋、想法或需求，請隨時給我們留言！
            </p>
          </div>
          <div class="shrink-0 lg:ml-4">
            <a class="button-black min-w-[150px]"><BtnBlack>Get your action kit</BtnBlack></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 行動步驟 -->
  <div class="max-w-6xl mx-auto pb-12 lg:py-16">
    <h1 class="text-2xl lg:text-4xl font-bold px-4 lg:px-0">行動步驟</h1>
  </div>
  <!-- 了解問題 -->
  <div class="max-w-6xl mx-auto px-4">
    <div class="relative" :id="category[0].name">
      <img
        alt="Understand The Problem"
        loading="lazy"
        width="1024"
        height="768"
        decoding="async"
        data-nimg="1"
        class="absolute h-full w-3/4 object-cover rounded-md bottom-0 right-0 mb-4"
        style="color: transparent"
        srcset="
          https://www.anxiousgeneration.com/_next/image?url=%2Fphone-free-schools%2Feducate.jpg&w=1080&q=75 1x,
          https://www.anxiousgeneration.com/_next/image?url=%2Fphone-free-schools%2Feducate.jpg&w=2048&q=75 2x
        "
        src="https://www.anxiousgeneration.com/_next/image?url=%2Fphone-free-schools%2Feducate.jpg&w=2048&q=75"
      />
      <div class="pt-16">
        <div class="relative z-10 p-4 lg:p-8 bg-[#F4FEE7] rounded-md flex flex-col w-3/4 lg:w-1/2">
          <div class="flex items-center gap-4 mb-4 lg:mb-0">
            <div
              class="bg-[#BDDB4B] shrink-0 rounded-full h-12 w-12 flex items-center justify-center text-lg font-bold"
            >
              1
            </div>
            <h2 class="text-2xl font-bold">{{ category[0].title }}</h2>
          </div>
          <p class="text-base lg:pt-4">
            Whether you’re a school administrator, parent, or educator, the first step is to educate
            yourself and your community about why it’s so important to keep phones out of school
            from bell to bell. Here are our three top resources to read and share.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="text-black max-w-6xl mx-auto py-6 mb-16">
    <div class="px-4">
      <ul class="grid md:grid-cols-3 gap-4">
        <li class="border rounded-md">
          <a
            href="https://www.afterbabel.com/p/phone-free-schools"
            target="_blank"
            rel="noopener noreferrer"
            class="p-4 bg-white block flex justify-between items-center h-full"
            >The Case for Phone-Free Schools<img
              alt="External Link"
              loading="lazy"
              width="24"
              height="24"
              decoding="async"
              data-nimg="1"
              class="w-4 w-4"
              style="color: transparent"
              src="https://www.anxiousgeneration.com/external-link-black.svg"
          /></a>
        </li>
        <li class="border rounded-md">
          <a
            href="https://www.afterbabel.com/t/what-schools-and-educators-can-do-c60"
            target="_blank"
            rel="noopener noreferrer"
            class="p-4 bg-white block flex justify-between items-center h-full"
            >Substack Series: What Schools and Educators Can Do Now<img
              alt="External Link"
              loading="lazy"
              width="24"
              height="24"
              decoding="async"
              data-nimg="1"
              class="w-4 w-4"
              style="color: transparent"
              src="https://www.anxiousgeneration.com/external-link-black.svg"
          /></a>
        </li>
        <li class="border rounded-md">
          <a
            href="/book"
            target="_blank"
            rel="noopener noreferrer"
            class="p-4 bg-white block flex justify-between items-center h-full"
            ><span><em>The Anxious Generation</em>, by Jonathan Haidt</span></a
          >
        </li>
      </ul>
    </div>
  </div>
  <!-- 開始對話 -->
  <div class="max-w-6xl mx-auto px-4">
    <div class="relative" :id="category[1].name">
      <img
        alt="Start a Conversation"
        loading="lazy"
        width="1024"
        height="768"
        decoding="async"
        data-nimg="1"
        class="absolute h-full w-3/4 object-cover rounded-md bottom-0 right-0 mb-4"
        style="color: transparent"
        srcset="
          https://www.anxiousgeneration.com/_next/image?url=%2Fphone-free-schools%2Fconversation.jpg&w=1080&q=75 1x,
          https://www.anxiousgeneration.com/_next/image?url=%2Fphone-free-schools%2Fconversation.jpg&w=2048&q=75 2x
        "
        src="https://www.anxiousgeneration.com/_next/image?url=%2Fphone-free-schools%2Fconversation.jpg&w=2048&q=75"
      />
      <div class="pt-16">
        <div class="relative z-10 p-4 lg:p-8 bg-[#F4FEE7] rounded-md flex flex-col w-3/4 lg:w-1/2">
          <div class="flex items-center gap-4 mb-4 lg:mb-0">
            <div
              class="bg-[#BDDB4B] shrink-0 rounded-full h-12 w-12 flex items-center justify-center text-lg font-bold"
            >
              2
            </div>
            <h2 class="text-2xl font-bold">{{ category[1].title }}</h2>
          </div>
          <p class="text-base lg:pt-4">
            Next, invite other people in your community to join you for a discussion. Here are some
            additional resources to help spark conversation.
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- 採取行動 -->
  <div class="max-w-6xl mx-auto px-4">
    <div class="relative" :id="category[2].name">
      <img
        alt="Take Action"
        loading="lazy"
        width="1024"
        height="768"
        decoding="async"
        data-nimg="1"
        class="absolute h-full w-3/4 object-cover rounded-md bottom-0 right-0 mb-4"
        style="color: transparent"
        srcset="
          https://www.anxiousgeneration.com/_next/image?url=%2Fphone-free-schools%2Faction.jpg&w=1080&q=75 1x,
          https://www.anxiousgeneration.com/_next/image?url=%2Fphone-free-schools%2Faction.jpg&w=2048&q=75 2x
        "
        src="https://www.anxiousgeneration.com/_next/image?url=%2Fphone-free-schools%2Faction.jpg&w=2048&q=75"
      />
      <div class="pt-16">
        <div class="relative z-10 p-4 lg:p-8 bg-[#F4FEE7] rounded-md flex flex-col w-3/4 lg:w-1/2">
          <div class="flex items-center gap-4 mb-4 lg:mb-0">
            <div
              class="bg-[#BDDB4B] shrink-0 rounded-full h-12 w-12 flex items-center justify-center text-lg font-bold"
            >
              3
            </div>
            <h2 class="text-2xl font-bold">{{ category[2].title }}</h2>
          </div>
          <p class="text-base lg:pt-4">
            The next step is to plan and implement a phone-free policy for your school from bell to
            bell. Here are ideas for how administrators, parents, and educators can take action and
            support each other’s efforts.
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- 成功的故事 -->
  <div
    class="flex items-center gap-4 mb-4 lg:mb-0 max-w-6xl mx-auto px-4 lg:px-0"
    :id="category[3].name"
  >
    <div
      class="bg-[#BDDB4B] shrink-0 rounded-full h-12 w-12 flex items-center justify-center text-lg font-bold"
    >
      <img
        alt="Success Stories Icon"
        loading="lazy"
        width="24"
        height="24"
        decoding="async"
        data-nimg="1"
        class="w-[24px]"
        style="color: transparent"
        src="https://www.anxiousgeneration.com/phone-free-schools/success.svg"
      />
    </div>
    <h2 class="text-2xl font-bold">{{ category[3].title }}</h2>
  </div>
  <div class="text-black max-w-6xl mx-auto py-6 mb-16">
    <div class="px-4">
      <ul class="grid md:grid-cols-3 gap-4">
        <li class="border rounded-md">
          <img
            alt="How a Connecticut middle school won the battle against cellphones"
            loading="lazy"
            width="340"
            height="121"
            decoding="async"
            data-nimg="1"
            class="w-full"
            style="color: transparent"
            srcset="
              https://www.anxiousgeneration.com/_next/image?url=%2Fphone-free-schools%2Fsuccess1.jpg&w=384&q=75 1x,
              https://www.anxiousgeneration.com/_next/image?url=%2Fphone-free-schools%2Fsuccess1.jpg&w=750&q=75 2x
            "
            src="https://www.anxiousgeneration.com/_next/image?url=%2Fphone-free-schools%2Fsuccess1.jpg&w=750&q=75"
          /><a
            href="https://www.washingtonpost.com/nation/2024/05/01/school-cellphones-confiscate/"
            target="_blank"
            rel="noopener noreferrer"
            class="p-4 bg-white block flex justify-between items-center gap-4"
            >How a Connecticut middle school won the battle against cellphones<img
              alt="External Link"
              loading="lazy"
              width="24"
              height="24"
              decoding="async"
              data-nimg="1"
              class="w-4 w-4"
              style="color: transparent"
              src="https://www.anxiousgeneration.com/external-link-black.svg"
          /></a>
        </li>
        <li class="border rounded-md">
          <img
            alt="How a Connecticut middle school won the battle against cellphones"
            loading="lazy"
            width="340"
            height="121"
            decoding="async"
            data-nimg="1"
            class="w-full"
            style="color: transparent"
            srcset="
              https://www.anxiousgeneration.com/_next/image?url=%2Fphone-free-schools%2Fsuccess2.jpg&w=384&q=75 1x,
              https://www.anxiousgeneration.com/_next/image?url=%2Fphone-free-schools%2Fsuccess2.jpg&w=750&q=75 2x
            "
            src="https://www.anxiousgeneration.com/_next/image?url=%2Fphone-free-schools%2Fsuccess2.jpg&w=750&q=75"
          /><a
            href="https://www.spectator.co.uk/article/the-extraordinary-results-of-one-schools-ban-on-smartphones/"
            target="_blank"
            rel="noopener noreferrer"
            class="p-4 bg-white block flex justify-between items-center gap-4"
            >The extraordinary results of one school’s ban on smartphones<img
              alt="External Link"
              loading="lazy"
              width="24"
              height="24"
              decoding="async"
              data-nimg="1"
              class="w-4 w-4"
              style="color: transparent"
              src="https://www.anxiousgeneration.com/external-link-black.svg"
          /></a>
        </li>
        <li class="border rounded-md">
          <img
            alt="How a Connecticut middle school won the battle against cellphones"
            loading="lazy"
            width="340"
            height="121"
            decoding="async"
            data-nimg="1"
            class="w-full"
            style="color: transparent"
            srcset="
              https://www.anxiousgeneration.com/_next/image?url=%2Fphone-free-schools%2Fsuccess3.jpg&w=384&q=75 1x,
              https://www.anxiousgeneration.com/_next/image?url=%2Fphone-free-schools%2Fsuccess3.jpg&w=750&q=75 2x
            "
            src="https://www.anxiousgeneration.com/_next/image?url=%2Fphone-free-schools%2Fsuccess3.jpg&w=750&q=75"
          /><a
            href="https://www.theguardian.com/lifeandstyle/2024/jan/17/cellphone-smartphone-bans-schools"
            target="_blank"
            rel="noopener noreferrer"
            class="p-4 bg-white block flex justify-between items-center gap-4"
            >What happens when a school bans smartphones?<img
              alt="External Link"
              loading="lazy"
              width="24"
              height="24"
              decoding="async"
              data-nimg="1"
              class="w-4 w-4"
              style="color: transparent"
              src="https://www.anxiousgeneration.com/external-link-black.svg"
          /></a>
        </li>
      </ul>
    </div>
  </div>
  <!-- 無手機校園的 FAQ -->
  <div :id="category[4].name">
    <div class="flex items-center gap-4 mb-4 lg:mb-0 max-w-6xl mx-auto">
      <div
        class="bg-[#BDDB4B] shrink-0 rounded-full h-12 w-12 flex items-center justify-center text-lg font-bold"
      >
        <img
          alt="Success Stories Icon"
          loading="lazy"
          width="24"
          height="24"
          decoding="async"
          data-nimg="1"
          class="w-[24px]"
          style="color: transparent"
          src="https://www.anxiousgeneration.com/phone-free-schools/question-mark-circle.svg"
        />
      </div>
      <h2 class="text-2xl font-bold">{{ category[4].title }}</h2>
    </div>
    <div class="text-black max-w-6xl mx-auto py-6">
      <div class="mx-auto w-full max-w-6xl rounded-2xl bg-white p-2 grid grid-cols-1 gap-4">
        <Disclosure v-for="item in faq" :key="item.id" v-slot="{ open }">
          <DisclosureButton
            class="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring border bg-white"
          >
            <span>{{ item.question }}</span>
            <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5" />
          </DisclosureButton>
          <DisclosurePanel class="px-4 pb-2 pt-4">
            {{ item.answer }}
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  </div>
  <div class="max-w-6xl mx-auto py-4 lg:py-16">
    <div class="px-4">
      <div class="p-4 lg:py-4 lg:px-8 rounded-xl bg-gray-100 my-4">
        <div class="flex flex-col lg:flex-row justify-between lg:items-center">
          <div class="flex flex-col grow">
            <p class="text-base pb-4 lg:py-4">
              <b> 取得你個人無手機學校行動套件</b
              ><br />準備好開始了嗎？告訴我們你的身份，我們將為你發送合適的行動套件！有任何反饋、想法或需求，請隨時給我們留言！
            </p>
          </div>
          <div class="shrink-0 lg:ml-4">
            <a class="button-black min-w-[150px]"><BtnBlack>Get your action kit</BtnBlack></a>
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
