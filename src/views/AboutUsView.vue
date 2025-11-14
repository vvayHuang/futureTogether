<script setup>
import ComponentNavigation from '@/components/ComponentNavigation.vue'
</script>

<template>
  <ComponentNavigation />
  <div class="bg-cover bg-yellow-pixels">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-16">
      <h1 class="text-black text-4xl lg:text-5xl font-bold mb-8">什麼是焦慮世代？</h1>
      <p>
        大家都常聽許多世代的劃分說法。<br />
        譬如，1946至1964年間出生是「嬰兒潮世代」，1965至1980年出生是「X世代」，<br />
        1981至1995年出生是「Y世代」，1996年到2012年之間出生的是「Z世代」。<br />
        在掀起全球話題與熱烈關注的《失控的焦慮世代》這本書裡，<br />
        作者海德特所定義的「焦慮世代」則是從「Z世代」談起，但不只包含Z世代。<br />
        他觀察到Z世代不同於之前的世代，呈現許多特別的焦慮狀態，而形成這些焦慮狀態的又有些特別的社會和個人因素。<br />
        所以他認為除非能改變讓孩子如此焦慮的童年環境，那麼不管Z世代之後是叫Alpha世代還是Beta世代，<br />
        <br />
        其實他們都仍然還是焦慮世代。<br />
      </p>
    </div>
  </div>
  <div class="bg-white w-full px-4 md:px-16 lg:px-20 py-8">
    <div class="flex flex-col justify-between pb-2 pt-6">
      <div
        class="mx-auto w-full grid grid-cols-1 max-w-2xl lg:max-w-none lg:grid-cols-3 gap-x-8 gap-y-4 pt-6"
      >
        <div class="flex flex-col items-start border-b justify-between">
          <a
            class="flex flex-col justify-between h-full min-w-full"
            href="/research/collaborative-review-docs"
            ><div class="relative h-32 w-full">
              <img
                alt="resource image"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                class="aspect-[16/9] w-full rounded-md bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                sizes="100vw"
                srcset="
                  https://www.anxiousgeneration.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fo6e8cqq8kv0k%2F4qpnD0kXKvkDs9bidZYelH%2F94e533ff15884a39c86de3b2dfd2cf73%2Fimage.png&w=640&q=75   640w,
                  https://www.anxiousgeneration.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fo6e8cqq8kv0k%2F4qpnD0kXKvkDs9bidZYelH%2F94e533ff15884a39c86de3b2dfd2cf73%2Fimage.png&w=750&q=75   750w,
                  https://www.anxiousgeneration.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fo6e8cqq8kv0k%2F4qpnD0kXKvkDs9bidZYelH%2F94e533ff15884a39c86de3b2dfd2cf73%2Fimage.png&w=828&q=75   828w,
                  https://www.anxiousgeneration.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fo6e8cqq8kv0k%2F4qpnD0kXKvkDs9bidZYelH%2F94e533ff15884a39c86de3b2dfd2cf73%2Fimage.png&w=1080&q=75 1080w,
                  https://www.anxiousgeneration.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fo6e8cqq8kv0k%2F4qpnD0kXKvkDs9bidZYelH%2F94e533ff15884a39c86de3b2dfd2cf73%2Fimage.png&w=1200&q=75 1200w,
                  https://www.anxiousgeneration.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fo6e8cqq8kv0k%2F4qpnD0kXKvkDs9bidZYelH%2F94e533ff15884a39c86de3b2dfd2cf73%2Fimage.png&w=1920&q=75 1920w,
                  https://www.anxiousgeneration.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fo6e8cqq8kv0k%2F4qpnD0kXKvkDs9bidZYelH%2F94e533ff15884a39c86de3b2dfd2cf73%2Fimage.png&w=2048&q=75 2048w,
                  https://www.anxiousgeneration.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fo6e8cqq8kv0k%2F4qpnD0kXKvkDs9bidZYelH%2F94e533ff15884a39c86de3b2dfd2cf73%2Fimage.png&w=3840&q=75 3840w
                "
                src="https://www.anxiousgeneration.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fo6e8cqq8kv0k%2F4qpnD0kXKvkDs9bidZYelH%2F94e533ff15884a39c86de3b2dfd2cf73%2Fimage.png&w=3840&q=75"
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
              <h3 class="text-xl text-black font-bold pb-2 mt-4">心理疾病的證據</h3>
            </div>
            <div class="group relative">
              <p class="text-base text-gray-600 flex flex-grow">
                從美國及世界各地的青少年所呈現的數據，可以看得出這是一場席捲全球的心理疾病的瘟疫...
              </p>
            </div>
            <div class="relative mt-8 pb-3 flex flex-row justify-between">
              <p class="text-xs text-gray-500">February 20, 2024</p>
              <p class="text-xs text-grey hidden">6 MIN READ</p>
            </div></a
          >
        </div>
        <div class="flex flex-col items-start border-b justify-between">
          <a
            class="flex flex-col justify-between h-full min-w-full"
            href="/research/collaborative-review-docs"
            ><div class="relative h-32 w-full">
              <img
                alt="resource image"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                class="aspect-[16/9] w-full rounded-md bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                sizes="100vw"
                srcset="
                  https://www.anxiousgeneration.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fo6e8cqq8kv0k%2F3EWblAu7zpLZLRkiEJSZ05%2F5a914d6f714e79ea6712ae6eacd46d84%2FEratta-min.jpg&w=680&q=75   640w,
                  https://www.anxiousgeneration.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fo6e8cqq8kv0k%2F3EWblAu7zpLZLRkiEJSZ05%2F5a914d6f714e79ea6712ae6eacd46d84%2FEratta-min.jpg&w=750&q=75   750w,
                  https://www.anxiousgeneration.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fo6e8cqq8kv0k%2F3EWblAu7zpLZLRkiEJSZ05%2F5a914d6f714e79ea6712ae6eacd46d84%2FEratta-min.jpg&w=828&q=75   828w,
                  https://www.anxiousgeneration.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fo6e8cqq8kv0k%2F3EWblAu7zpLZLRkiEJSZ05%2F5a914d6f714e79ea6712ae6eacd46d84%2FEratta-min.jpg&w=1080&q=75 1080w,
                  https://www.anxiousgeneration.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fo6e8cqq8kv0k%2F3EWblAu7zpLZLRkiEJSZ05%2F5a914d6f714e79ea6712ae6eacd46d84%2FEratta-min.jpg&w=1200&q=75 1200w,
                  https://www.anxiousgeneration.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fo6e8cqq8kv0k%2F3EWblAu7zpLZLRkiEJSZ05%2F5a914d6f714e79ea6712ae6eacd46d84%2FEratta-min.jpg&w=1920&q=75 1920w,
                  https://www.anxiousgeneration.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fo6e8cqq8kv0k%2F3EWblAu7zpLZLRkiEJSZ05%2F5a914d6f714e79ea6712ae6eacd46d84%2FEratta-min.jpg&w=2048&q=75 2048w,
                  https://www.anxiousgeneration.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fo6e8cqq8kv0k%2F3EWblAu7zpLZLRkiEJSZ05%2F5a914d6f714e79ea6712ae6eacd46d84%2FEratta-min.jpg&w=3840&q=75 3840w
                "
                src="https://www.anxiousgeneration.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fo6e8cqq8kv0k%2F3EWblAu7zpLZLRkiEJSZ05%2F5a914d6f714e79ea6712ae6eacd46d84%2FEratta-min.jpg&w=3840&q=75"
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
              <h3 class="text-xl text-black font-bold pb-2 mt-4">導致瘟疫的起因</h3>
            </div>
            <div class="group relative">
              <p class="text-base text-gray-600 flex flex-grow">
                主要有兩個原因，讓這場心理疾病的瘟疫一發不可收拾...
              </p>
            </div>
            <div class="relative mt-8 pb-3 flex flex-row justify-between">
              <p class="text-xs text-gray-500">February 20, 2024</p>
              <p class="text-xs text-grey hidden">6 MIN READ</p>
            </div></a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.bg-yellow-pixels {
  background-image: url('https://www.anxiousgeneration.com/yellow-pixels.webp');
}
</style>
