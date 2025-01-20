<script setup>
import SectionEmoji from './SectionEmoji.vue'
import { onMounted, onBeforeUnmount, ref } from 'vue'

const heroContainer = ref(null)

const handleScroll = () => {
  const scrollTop = window.scrollY
  const maxScroll = 2000 // 最大滾動距離
  const opacity = Math.max(0, 1 - scrollTop / maxScroll)
  if (heroContainer.value) {
    heroContainer.value.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<template>
  <div class="Hero-bg-transition pb-48 lg:-mt-20" ref="heroContainer">
    <div class="Hero_container">
      <SectionEmoji />
      <h1 class="Hero_textArea">挽救失控的焦慮世代</h1>
      <div
        class="bottom-4 lg:bottom-8 absolute inset-0 flex flex-col justify-end items-center overflow-hidden"
        style="opacity: 1; clip-path: inset(0px 0%)"
      >
        <svg
          width="2110"
          height="831"
          viewBox="0 0 2110 831"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-[660px] sm:w-full h-auto lg:w-auto min-w-[300px]"
          role="presentation"
        >
          <path
            d="M0 193V10L2110 0v183l-686.32 648H675.32L0 193z"
            fill="url(#paint0_linear_1256_22307)"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_1256_22307"
              x1="1130.5"
              y1="945.5"
              x2="1130.5"
              y2="435"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFD500"></stop>
              <stop offset="0.798038" stop-color="#FFD500" stop-opacity="0.101505"></stop>
              <stop offset="0.992077" stop-color="#FFD500" stop-opacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        class="bottom-0 absolute inset-0 flex flex-col justify-end items-center"
        style="opacity: 1"
      >
        <svg
          width="2110"
          height="845"
          viewBox="0 0 2110 845"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-[660px] sm:w-full h-auto lg:w-auto"
          role="presentation"
        >
          <path
            d="M898.918 603.733A56.006 56.006 0 01931.887 593h246.533c11.85 0 23.4 3.758 32.97 10.733L1423.48 758.2c37.56 27.358 18.21 86.8-28.26 86.8H715.092c-46.47 0-65.822-59.442-28.259-86.8l212.085-154.467z"
            fill="#262626"
          ></path>
          <path
            d="M908.863 612.32a39.992 39.992 0 0124.42-8.32h243.747a40.01 40.01 0 0124.42 8.32l201.31 155.176c9.07 6.991 4.12 21.504-7.33 21.504H714.879c-11.452 0-16.396-14.513-7.326-21.504l201.31-155.176z"
            fill="#FFD500"
          ></path>
          <rect x="1295.66" y="810" width="99" height="12" rx="6" fill="#5D5D5D"></rect>
          <rect x="1270.66" y="810" width="12" height="12" rx="6" fill="#5D5D5D"></rect>
        </svg>
      </div>
      <!-- 背景圖片 -->
      <div
        class="z-0 w-[351px] sm:w-[546px] absolute top-0 left-1/2 transform -translate-x-1/2 mx-auto"
        style="opacity: 1"
      >
        <img
          alt="Girl's face"
          loading="eager"
          width="1200"
          height="958"
          decoding="async"
          data-nimg="1"
          style="color: transparent"
          srcset="
            https://www.anxiousgeneration.com/_next/image?url=%2Fgirl2.png&w=1200&q=75 1x,
            https://www.anxiousgeneration.com/_next/image?url=%2Fgirl2.png&w=3840&q=75 2x
          "
          src="https://www.anxiousgeneration.com/_next/image?url=%2Fgirl2.png&w=3840&q=75"
        />
      </div>
    </div>
    <div class="relative overflow-hidden w-full mt-32 lg:my-48">
      <div class="md:-mx-16 grid grid-cols-2 md:grid-cols-6 gap-2 pb-2">
        <video
          autoplay=""
          playsinline=""
          muted=""
          loop=""
          preload="auto"
          aria-label="Video player"
          class="hidden md:block h-full object-cover w-full aspect-[357/233]"
        >
          <source
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDc4eXFpODFvZHcxc3VxZmQwdGFoZjJpNDJxaDI1MnFhNG9oM3UybSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xUPN3lFweTO9jnXgCk/giphy.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.</video
        ><video
          autoplay=""
          playsinline=""
          muted=""
          loop=""
          preload="auto"
          aria-label="Video player"
          class="hidden md:block h-full object-cover w-full aspect-[357/233]"
        >
          <source
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTRvamZ4dnA0ZDk5ejAzZ3R1aXBqMnN3ZTF0Z3IzZGgzMTRjZzJobyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l49JHGy62UFv8e3PG/giphy.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.</video
        ><img
          alt="IG Warning"
          loading="lazy"
          width="357"
          height="233"
          decoding="async"
          data-nimg="1"
          style="color: transparent"
          srcset="
            https://www.anxiousgeneration.com/_next/image?url=%2Ftheseresults.png&w=384&q=75 1x,
            https://www.anxiousgeneration.com/_next/image?url=%2Ftheseresults.png&w=750&q=75 2x
          "
          src="https://www.anxiousgeneration.com/_next/image?url=%2Ftheseresults.png&w=750&q=75"
        /><img
          alt="IG Warning"
          loading="lazy"
          width="357"
          height="233"
          decoding="async"
          data-nimg="1"
          class="hidden md:block"
          style="color: transparent"
          srcset="
            https://www.anxiousgeneration.com/_next/image?url=%2Fsadp.png&w=384&q=75 1x,
            https://www.anxiousgeneration.com/_next/image?url=%2Fsadp.png&w=750&q=75 2x
          "
          src="https://www.anxiousgeneration.com/_next/image?url=%2Fsadp.png&w=750&q=75"
        /><video
          autoplay=""
          playsinline=""
          muted=""
          loop=""
          preload="auto"
          aria-label="Video player"
          class="h-full object-cover w-full aspect-[357/233]"
        >
          <source
            src="https://www.anxiousgeneration.com/shutterstock_1095258735-3mb.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.</video
        ><img
          alt="meme-happy-sad-face"
          loading="lazy"
          width="162"
          height="162"
          decoding="async"
          data-nimg="1"
          class="hidden md:block h-full object-cover w-full aspect-[357/233]"
          style="color: transparent"
          srcset="
            https://www.anxiousgeneration.com/_next/image?url=%2Fmeme-happy-sad-face.webp&w=256&q=75 1x,
            https://www.anxiousgeneration.com/_next/image?url=%2Fmeme-happy-sad-face.webp&w=384&q=75 2x
          "
          src="https://www.anxiousgeneration.com/_next/image?url=%2Fmeme-happy-sad-face.webp&w=384&q=75"
        />
      </div>
      <div class="md:-mx-16 grid grid-cols-1 md:grid-cols-12 gap-2">
        <div
          class="col-span-3 md:col-span-4 xl:col-span-4 hidden md:grid grid-cols-2 xl:grid-cols-3 gap-2 justify-start items-start self-start"
        >
          <div class="hidden xl:grid grid-cols-1 gap-2">
            <video
              autoplay=""
              playsinline=""
              muted=""
              loop=""
              preload="auto"
              aria-label="Video player"
              class="h-full object-cover w-full aspect-square"
            >
              <source
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExazBwYmVpM3QzNDJodGllODc4b2Y4d2wxYTl6ZmN4dDAwcW9heHNtbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uyg7sZdtYRbri/giphy.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.</video
            ><video
              autoplay=""
              playsinline=""
              muted=""
              loop=""
              preload="auto"
              aria-label="Video player"
              class="h-full object-cover w-full aspect-square"
            >
              <source
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHI1NmV4bm43czE3OHp2bDNpYjRnZXYzdWxocWJ2c3dtNTR1d2hkNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d9oskG5xSZXQEj44pi/giphy.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="grid grid-cols-1 gap-2">
            <video
              autoplay=""
              playsinline=""
              muted=""
              loop=""
              preload="auto"
              aria-label="Video player"
              class="h-full object-cover w-full aspect-square"
            >
              <source
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2o2ZTBhcmU1MG5pOWI2ajJxdzJieXhydHU5c2l4dDNyMGRzeHYxMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uqQY4o6v1U2XsSHlzc/giphy.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.</video
            ><video
              autoplay=""
              playsinline=""
              muted=""
              loop=""
              preload="auto"
              aria-label="Video player"
              class="h-full object-cover w-full aspect-square"
            >
              <source
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnVpN25uenJoaGIxaWhtcGJ6MTF6eXd2aGN2bXE0cW96eTl6NjkxdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1oILVEAqFirJy2E3Bc/giphy.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.</video
            ><video
              autoplay=""
              playsinline=""
              muted=""
              loop=""
              preload="auto"
              aria-label="Video player"
              class="h-full object-cover w-full aspect-square"
            >
              <source
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGV4aHdwYzZ6YjFkazRhajQ3d2w4NW1kMDR1Nmo1dmZsc2NhOGx5YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ov9jGaEl9fMbMGHPG/giphy.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="grid grid-cols-1 gap-2">
            <video
              autoplay=""
              playsinline=""
              muted=""
              loop=""
              preload="auto"
              aria-label="Video player"
              class="hidden md:block h-full object-cover w-full aspect-[162/332]"
            >
              <source
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa25wMTB5ZTdpdnNlbjJibTh2MXpzNXVkY2QwZDNoOTQ5MTMxcmZxNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/npWd6TOLNNl0frvD7g/giphy.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.</video
            ><video
              autoplay=""
              playsinline=""
              muted=""
              loop=""
              preload="auto"
              aria-label="Video player"
              class="h-full object-cover w-full aspect-[3/4]"
            >
              <source
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmFka2lhbjE2ODJlNmc4NW1qdHhlaGZlODMzendsenVsMHY0dTl6eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PvPCBc9FV1m2wHU4TF/giphy.mp4 "
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div
          class="col-span-6 md:col-span-4 xl:col-span-4 grid gap-2 justify-start items-start self-start"
        >
          <div class="grid grid-cols-3 gap-2">
            <div class="grid grid-cols-1 gap-2">
              <video
                autoplay=""
                playsinline=""
                muted=""
                loop=""
                preload="auto"
                aria-label="Video player"
                class="h-full object-cover w-full aspect-[162/332]"
              >
                <source
                  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXF5ZWtrZDFndGFzajI2ZTd2a2M4Y2JteHRmaDdwc3pucjR6cTNkeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1zlDVu6EqjNmghCXSS/giphy.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div class="grid grid-cols-1 gap-2">
              <video
                autoplay=""
                playsinline=""
                muted=""
                loop=""
                preload="auto"
                aria-label="Video player"
                class="object-cover w-full aspect-square"
              >
                <source
                  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWpiY2tpdWdrOTZ1dm9jaTFqemR3d3ZuNGptcGwxNzdtMGlpOWJ4MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PkRmZS3QOiCzptyC2j/giphy.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.</video
              ><img
                alt="Social Square"
                loading="lazy"
                width="162"
                height="162"
                decoding="async"
                data-nimg="1"
                class="object-cover w-full aspect-square"
                style="color: transparent"
                srcset="
                  https://www.anxiousgeneration.com/_next/image?url=%2Fsocial-square.jpg&w=256&q=75 1x,
                  https://www.anxiousgeneration.com/_next/image?url=%2Fsocial-square.jpg&w=384&q=75 2x
                "
                src="https://www.anxiousgeneration.com/_next/image?url=%2Fsocial-square.jpg&w=384&q=75"
              />
            </div>
            <div class="grid grid-cols-1 gap-2">
              <video
                autoplay=""
                playsinline=""
                muted=""
                loop=""
                preload="auto"
                aria-label="Video player"
                class="h-full object-cover w-full aspect-square"
              >
                <source src="https://www.anxiousgeneration.com/home-scroll.mp4" type="video/mp4" />
                Your browser does not support the video tag.</video
              ><video
                autoplay=""
                playsinline=""
                muted=""
                loop=""
                preload="auto"
                aria-label="Video player"
                class="object-cover w-full aspect-square"
              >
                <source
                  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDc3MmVkMGdleXoyamowOHZ2Y2E0YjRpN3pqdWV2NXR1eXV3dHloeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fyUnksTLS9qLf4vT3q/giphy.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div class="bg-white text-black p-8 text-center">
            <h2>我們重新塑造了童年，<br />卻引發了一場心理疾病的瘟疫。</h2>
            <p>
              全球青少年的心理健康從2010年代初開始急劇惡化。
              憂鬱症、焦慮、自殘和自殺的比例急劇上升， 許多指標都比之前的世代增長超過一倍。
            </p>
            <a class="block py-4 font-bold underline hover:text-grey" href="/research/the-evidence"
              >瀏覽看這裡</a
            >
          </div>
        </div>
        <div
          class="col-span-6 md:col-span-4 xl:col-span-4 grid grid-cols-3 md:grid-cols-2 xl:grid-cols-3 gap-2 justify-start items-start self-start"
        >
          <div class="grid grid-cols-1 gap-2">
            <video
              autoplay=""
              playsinline=""
              muted=""
              loop=""
              preload="auto"
              aria-label="Video player"
              class="h-full object-cover w-full aspect-[100/160]"
            >
              <source
                src="https://www.anxiousgeneration.com/shutterstock_1094666215.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.</video
            ><video
              autoplay=""
              playsinline=""
              muted=""
              loop=""
              preload="auto"
              aria-label="Video player"
              class="h-full object-cover w-full aspect-square"
            >
              <source src="https://www.anxiousgeneration.com/home-scroll-2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="grid grid-cols-1 gap-2">
            <video
              autoplay=""
              playsinline=""
              muted=""
              loop=""
              preload="auto"
              aria-label="Video player"
              class="h-full object-cover w-full aspect-[162/332]"
            >
              <source
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWQxam4xY2dpNjcyNHJtcmJvd2Y1OGNsMDF1c2kxb29seGU2OXplMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kqzD9pnX5eA6l7avzq/giphy.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.</video
            ><video
              autoplay=""
              playsinline=""
              muted=""
              loop=""
              preload="auto"
              aria-label="Video player"
              class="h-full object-cover w-full aspect-[3/4]"
            >
              <source
                src="https://www.anxiousgeneration.com/shutterstock_3387605265.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="grid md:hidden xl:grid grid-cols-1 gap-2">
            <video
              autoplay=""
              playsinline=""
              muted=""
              loop=""
              preload="auto"
              aria-label="Video player"
              class="h-full object-cover w-full aspect-[162/332]"
            >
              <source
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWFiM3VtZ2k5MWc3MWVzbDFrbGwzODY5Nmd5aGN5Ymp4MzJ5anQ3YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1xnNgr3dylWQIcNydQ/giphy.mp4 "
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <!-- 停止播放 -->
      <!-- <button
        class="text-sm lg:text-base absolute top-2 bottom-auto lg:top-auto lg:bottom-4 right-4 z-10 bg-white border-2 border-black text-black px-2 lg:px-4 py-2 rounded-full"
        aria-label="Stop all video playback"
      >
        Stop Videos
      </button> -->
    </div>
    <div class="bg-white text-black p-8 max-w-2xl mx-auto text-center">
      <h2>
        孩子的童年生活大規模從實體世界遷移至虛擬世界，<br />
        不論對他們的神經發展還是對整體社會的發展，<br />
        都造成了干擾。
      </h2>
      <p>
        這些干擾包括社交焦慮、睡眠不足、注意力分散以及成癮。 面對青少年中焦慮和抑鬱比例的上升，
        美國紐約大學社會心理學家喬納森·海特（Jonathan Haidt）撰寫了 《失控的焦慮世代》（The Anxious
        Generation）。 這本書探討了這些日益嚴重的現象，也歸納了原因。
        出書後激起全球關注，在臺灣也引發熱烈討論如何一起來改善， 因而有了這個行動及網站。
      </p>
      <a class="block py-4 font-bold underline hover:text-grey" href="/book">想要多了解這本書</a
      ><a class="block py-4 font-bold underline hover:text-grey" href="/about"
        >想要多了解這個行動</a
      >
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
@media (min-width: 1024px) {
  h2.large {
    font-size: 3.75rem;
    line-height: 1;
  }
}
.Hero_textArea {
  color: #fff;
  z-index: 10;
  text-shadow:
    2px 2px 10px rgba(0, 0, 0, 0.8),
    -2px -2px 20px rgba(0, 0, 0, 0.8),
    2px -2px 40px rgba(0, 0, 0, 0.8),
    -2px 2px 60px rgba(0, 0, 0, 0.8);
  text-align: center;
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.025em;
}
@media (min-width: 1024px) {
  .Hero_textArea {
    font-size: 3rem;
    line-height: 1;
    margin-top: -2rem;
  }
}
.Hero_container {
  overflow: hidden;
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 88px);
}
.Hero-bg-transition {
  background-color: rgba(0, 0, 0, 1); /* 初始背景色 */
}

@media (min-width: 1024px) {
  .Hero_container {
    height: 90vh;
  }
}
</style>
