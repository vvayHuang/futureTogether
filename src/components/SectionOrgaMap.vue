<script setup lang="ts">
import BtnBlack from './BtnBlack.vue'
</script>

<template>
  <div class="relative lg:mb-24 bg-[#A8D3DF]">
    <div
      class="pointer-events-none relative z-[3] grid lg:grid-cols-2 text-black max-w-6xl mx-auto px-4 py-8 lg:py-24"
    >
      <div
        class="pointer-events-auto flex-1 space-y-8 p-8 bg-blue-light rounded-md lg:rounded-l-md"
      >
        <div class="space-y-4">
          <h3 class="text-2xl font-semibold">尋找合作夥伴</h3>
          <p>
            協助尋找在你關注的問題上與你目標一致的機構和專家，大
            家一起努力結束以手機為中心的童年，重建以遊戲為基礎的 童年。
          </p>
          <BtnBlack>看全部</BtnBlack>
        </div>
      </div>
      <div class="pointer-events-none"></div>
    </div>
    <!-- 地圖 -->
    <!-- <div class="pointer-events-auto top-0 lg:absolute z-[2] w-full">
      <div
        class="leaflet-container leaflet-touch leaflet-retina leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom"
        tabindex="0"
        style="height: 500px; width: 100%; position: relative"
      >
        <div class="leaflet-pane leaflet-map-pane" style="transform: translate3d(0px, 0px, 0px)">
          <div class="leaflet-pane leaflet-tile-pane">
            <div class="leaflet-layer" style="z-index: 1; opacity: 1">
              <div
                class="leaflet-tile-container leaflet-zoom-animated"
                style="z-index: 18; transform: translate3d(0px, 0px, 0px) scale(1)"
              >
                <img
                  alt=""
                  src="https://b.tile.openstreetmap.org/2/0/1.png"
                  class="leaflet-tile leaflet-tile-loaded"
                  style="
                    width: 256px;
                    height: 256px;
                    transform: translate3d(1175px, 92px, 0px);
                    opacity: 1;
                  "
                /><img
                  alt=""
                  src="https://a.tile.openstreetmap.org/2/0/0.png"
                  class="leaflet-tile leaflet-tile-loaded"
                  style="
                    width: 256px;
                    height: 256px;
                    transform: translate3d(1175px, -164px, 0px);
                    opacity: 1;
                  "
                /><img
                  alt=""
                  src="https://b.tile.openstreetmap.org/2/3/1.png"
                  class="leaflet-tile leaflet-tile-loaded"
                  style="
                    width: 256px;
                    height: 256px;
                    transform: translate3d(919px, 92px, 0px);
                    opacity: 1;
                  "
                /><img
                  alt=""
                  src="https://c.tile.openstreetmap.org/2/1/1.png"
                  class="leaflet-tile leaflet-tile-loaded"
                  style="
                    width: 256px;
                    height: 256px;
                    transform: translate3d(1431px, 92px, 0px);
                    opacity: 1;
                  "
                /><img
                  alt=""
                  src="https://c.tile.openstreetmap.org/2/0/2.png"
                  class="leaflet-tile leaflet-tile-loaded"
                  style="
                    width: 256px;
                    height: 256px;
                    transform: translate3d(1175px, 348px, 0px);
                    opacity: 1;
                  "
                /><img
                  alt=""
                  src="https://a.tile.openstreetmap.org/2/3/0.png"
                  class="leaflet-tile leaflet-tile-loaded"
                  style="
                    width: 256px;
                    height: 256px;
                    transform: translate3d(919px, -164px, 0px);
                    opacity: 1;
                  "
                /><img
                  alt=""
                  src="https://b.tile.openstreetmap.org/2/1/0.png"
                  class="leaflet-tile leaflet-tile-loaded"
                  style="
                    width: 256px;
                    height: 256px;
                    transform: translate3d(1431px, -164px, 0px);
                    opacity: 1;
                  "
                /><img
                  alt=""
                  src="https://c.tile.openstreetmap.org/2/3/2.png"
                  class="leaflet-tile leaflet-tile-loaded"
                  style="
                    width: 256px;
                    height: 256px;
                    transform: translate3d(919px, 348px, 0px);
                    opacity: 1;
                  "
                /><img
                  alt=""
                  src="https://a.tile.openstreetmap.org/2/1/2.png"
                  class="leaflet-tile leaflet-tile-loaded"
                  style="
                    width: 256px;
                    height: 256px;
                    transform: translate3d(1431px, 348px, 0px);
                    opacity: 1;
                  "
                /><img
                  alt=""
                  src="https://a.tile.openstreetmap.org/2/2/1.png"
                  class="leaflet-tile leaflet-tile-loaded"
                  style="
                    width: 256px;
                    height: 256px;
                    transform: translate3d(663px, 92px, 0px);
                    opacity: 1;
                  "
                /><img
                  alt=""
                  src="https://a.tile.openstreetmap.org/2/2/1.png"
                  class="leaflet-tile leaflet-tile-loaded"
                  style="
                    width: 256px;
                    height: 256px;
                    transform: translate3d(1687px, 92px, 0px);
                    opacity: 1;
                  "
                /><img
                  alt=""
                  src="https://c.tile.openstreetmap.org/2/2/0.png"
                  class="leaflet-tile leaflet-tile-loaded"
                  style="
                    width: 256px;
                    height: 256px;
                    transform: translate3d(663px, -164px, 0px);
                    opacity: 1;
                  "
                /><img
                  alt=""
                  src="https://c.tile.openstreetmap.org/2/2/0.png"
                  class="leaflet-tile leaflet-tile-loaded"
                  style="
                    width: 256px;
                    height: 256px;
                    transform: translate3d(1687px, -164px, 0px);
                    opacity: 1;
                  "
                /><img
                  alt=""
                  src="https://b.tile.openstreetmap.org/2/2/2.png"
                  class="leaflet-tile leaflet-tile-loaded"
                  style="
                    width: 256px;
                    height: 256px;
                    transform: translate3d(663px, 348px, 0px);
                    opacity: 1;
                  "
                /><img
                  alt=""
                  src="https://b.tile.openstreetmap.org/2/2/2.png"
                  class="leaflet-tile leaflet-tile-loaded"
                  style="
                    width: 256px;
                    height: 256px;
                    transform: translate3d(1687px, 348px, 0px);
                    opacity: 1;
                  "
                /><img
                  alt=""
                  src="https://c.tile.openstreetmap.org/2/1/1.png"
                  class="leaflet-tile leaflet-tile-loaded"
                  style="
                    width: 256px;
                    height: 256px;
                    transform: translate3d(407px, 92px, 0px);
                    opacity: 1;
                  "
                /><img
                  alt=""
                  src="https://b.tile.openstreetmap.org/2/3/1.png"
                  class="leaflet-tile leaflet-tile-loaded"
                  style="
                    width: 256px;
                    height: 256px;
                    transform: translate3d(1943px, 92px, 0px);
                    opacity: 1;
                  "
                /><img
                  alt=""
                  src="https://b.tile.openstreetmap.org/2/1/0.png"
                  class="leaflet-tile leaflet-tile-loaded"
                  style="
                    width: 256px;
                    height: 256px;
                    transform: translate3d(407px, -164px, 0px);
                    opacity: 1;
                  "
                /><img
                  alt=""
                  src="https://a.tile.openstreetmap.org/2/3/0.png"
                  class="leaflet-tile leaflet-tile-loaded"
                  style="
                    width: 256px;
                    height: 256px;
                    transform: translate3d(1943px, -164px, 0px);
                    opacity: 1;
                  "
                /><img
                  alt=""
                  src="https://a.tile.openstreetmap.org/2/1/2.png"
                  class="leaflet-tile leaflet-tile-loaded"
                  style="
                    width: 256px;
                    height: 256px;
                    transform: translate3d(407px, 348px, 0px);
                    opacity: 1;
                  "
                /><img
                  alt=""
                  src="https://c.tile.openstreetmap.org/2/3/2.png"
                  class="leaflet-tile leaflet-tile-loaded"
                  style="
                    width: 256px;
                    height: 256px;
                    transform: translate3d(1943px, 348px, 0px);
                    opacity: 1;
                  "
                /><img
                  alt=""
                  src="https://b.tile.openstreetmap.org/2/0/1.png"
                  class="leaflet-tile leaflet-tile-loaded"
                  style="
                    width: 256px;
                    height: 256px;
                    transform: translate3d(151px, 92px, 0px);
                    opacity: 1;
                  "
                /><img
                  alt=""
                  src="https://b.tile.openstreetmap.org/2/0/1.png"
                  class="leaflet-tile leaflet-tile-loaded"
                  style="
                    width: 256px;
                    height: 256px;
                    transform: translate3d(2199px, 92px, 0px);
                    opacity: 1;
                  "
                /><img
                  alt=""
                  src="https://a.tile.openstreetmap.org/2/0/0.png"
                  class="leaflet-tile leaflet-tile-loaded"
                  style="
                    width: 256px;
                    height: 256px;
                    transform: translate3d(151px, -164px, 0px);
                    opacity: 1;
                  "
                /><img
                  alt=""
                  src="https://a.tile.openstreetmap.org/2/0/0.png"
                  class="leaflet-tile leaflet-tile-loaded"
                  style="
                    width: 256px;
                    height: 256px;
                    transform: translate3d(2199px, -164px, 0px);
                    opacity: 1;
                  "
                /><img
                  alt=""
                  src="https://c.tile.openstreetmap.org/2/0/2.png"
                  class="leaflet-tile leaflet-tile-loaded"
                  style="
                    width: 256px;
                    height: 256px;
                    transform: translate3d(151px, 348px, 0px);
                    opacity: 1;
                  "
                /><img
                  alt=""
                  src="https://c.tile.openstreetmap.org/2/0/2.png"
                  class="leaflet-tile leaflet-tile-loaded"
                  style="
                    width: 256px;
                    height: 256px;
                    transform: translate3d(2199px, 348px, 0px);
                    opacity: 1;
                  "
                /><img
                  alt=""
                  src="https://b.tile.openstreetmap.org/2/3/1.png"
                  class="leaflet-tile leaflet-tile-loaded"
                  style="
                    width: 256px;
                    height: 256px;
                    transform: translate3d(-105px, 92px, 0px);
                    opacity: 1;
                  "
                /><img
                  alt=""
                  src="https://c.tile.openstreetmap.org/2/1/1.png"
                  class="leaflet-tile leaflet-tile-loaded"
                  style="
                    width: 256px;
                    height: 256px;
                    transform: translate3d(2455px, 92px, 0px);
                    opacity: 1;
                  "
                /><img
                  alt=""
                  src="https://a.tile.openstreetmap.org/2/3/0.png"
                  class="leaflet-tile leaflet-tile-loaded"
                  style="
                    width: 256px;
                    height: 256px;
                    transform: translate3d(-105px, -164px, 0px);
                    opacity: 1;
                  "
                /><img
                  alt=""
                  src="https://b.tile.openstreetmap.org/2/1/0.png"
                  class="leaflet-tile leaflet-tile-loaded"
                  style="
                    width: 256px;
                    height: 256px;
                    transform: translate3d(2455px, -164px, 0px);
                    opacity: 1;
                  "
                /><img
                  alt=""
                  src="https://c.tile.openstreetmap.org/2/3/2.png"
                  class="leaflet-tile leaflet-tile-loaded"
                  style="
                    width: 256px;
                    height: 256px;
                    transform: translate3d(-105px, 348px, 0px);
                    opacity: 1;
                  "
                /><img
                  alt=""
                  src="https://a.tile.openstreetmap.org/2/1/2.png"
                  class="leaflet-tile leaflet-tile-loaded"
                  style="
                    width: 256px;
                    height: 256px;
                    transform: translate3d(2455px, 348px, 0px);
                    opacity: 1;
                  "
                />
              </div>
            </div>
          </div>
          <div class="leaflet-pane leaflet-overlay-pane"></div>
          <div class="leaflet-pane leaflet-shadow-pane">
            <img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1687px, 177px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1675px, 152px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1477px, 221px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1409px, 258px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1468px, 228px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1479px, 218px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1687px, 177px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1339px, 232px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1478px, 221px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1339px, 232px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1485px, 215px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1485px, 215px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1485px, 215px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1416px, 259px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1440px, 247px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1468px, 228px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1337px, 186px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1476px, 221px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1351px, 245px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1418px, 227px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1339px, 194px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1422px, 205px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1338px, 231px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1341px, 202px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1444px, 178px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1693px, 218px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1676px, 222px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1479px, 219px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1433px, 221px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1436px, 217px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1676px, 222px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1485px, 215px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1468px, 228px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1715px, 167px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(2111px, 455px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1479px, 221px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1702px, 211px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1461px, 209px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1351px, 245px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1723px, 157px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1378px, 213px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1687px, 177px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1438px, 198px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1484px, 215px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1468px, 228px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1453px, 260px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1468px, 228px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1485px, 215px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1339px, 232px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1370px, 221px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1464px, 231px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1433px, 309px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1554px, 417px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1402px, 272px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1476px, 222px, 0px);
              "
            /><img
              src="https://www.anxiousgeneration.com/map/markershadow.png"
              class="leaflet-marker-shadow leaflet-zoom-animated"
              alt=""
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 41px;
                height: 41px;
                transform: translate3d(1451px, 224px, 0px);
              "
            />
          </div>
          <div class="leaflet-pane leaflet-marker-pane">
            <img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1687px, 177px, 0px);
                z-index: 177;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1675px, 152px, 0px);
                z-index: 152;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1477px, 221px, 0px);
                z-index: 221;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1409px, 258px, 0px);
                z-index: 258;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1468px, 228px, 0px);
                z-index: 228;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1479px, 218px, 0px);
                z-index: 218;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1687px, 177px, 0px);
                z-index: 177;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1339px, 232px, 0px);
                z-index: 232;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1478px, 221px, 0px);
                z-index: 221;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1339px, 232px, 0px);
                z-index: 232;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1485px, 215px, 0px);
                z-index: 215;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1485px, 215px, 0px);
                z-index: 215;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1485px, 215px, 0px);
                z-index: 215;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1416px, 259px, 0px);
                z-index: 259;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1440px, 247px, 0px);
                z-index: 247;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1468px, 228px, 0px);
                z-index: 228;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1337px, 186px, 0px);
                z-index: 186;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1476px, 221px, 0px);
                z-index: 221;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1351px, 245px, 0px);
                z-index: 245;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1418px, 227px, 0px);
                z-index: 227;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1339px, 194px, 0px);
                z-index: 194;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1422px, 205px, 0px);
                z-index: 205;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1338px, 231px, 0px);
                z-index: 231;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1341px, 202px, 0px);
                z-index: 202;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1444px, 178px, 0px);
                z-index: 178;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1693px, 218px, 0px);
                z-index: 218;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1676px, 222px, 0px);
                z-index: 222;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1479px, 219px, 0px);
                z-index: 219;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1433px, 221px, 0px);
                z-index: 221;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1436px, 217px, 0px);
                z-index: 217;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1676px, 222px, 0px);
                z-index: 222;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1485px, 215px, 0px);
                z-index: 215;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1468px, 228px, 0px);
                z-index: 228;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1715px, 167px, 0px);
                z-index: 167;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(2111px, 455px, 0px);
                z-index: 455;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1479px, 221px, 0px);
                z-index: 221;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1702px, 211px, 0px);
                z-index: 211;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1461px, 209px, 0px);
                z-index: 209;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1351px, 245px, 0px);
                z-index: 245;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1723px, 157px, 0px);
                z-index: 157;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1378px, 213px, 0px);
                z-index: 213;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1687px, 177px, 0px);
                z-index: 177;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1438px, 198px, 0px);
                z-index: 198;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1484px, 215px, 0px);
                z-index: 215;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1468px, 228px, 0px);
                z-index: 228;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1453px, 260px, 0px);
                z-index: 260;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1468px, 228px, 0px);
                z-index: 228;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1485px, 215px, 0px);
                z-index: 215;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1339px, 232px, 0px);
                z-index: 232;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1370px, 221px, 0px);
                z-index: 221;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1464px, 231px, 0px);
                z-index: 231;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1433px, 309px, 0px);
                z-index: 309;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1554px, 417px, 0px);
                z-index: 417;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1402px, 272px, 0px);
                z-index: 272;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1476px, 222px, 0px);
                z-index: 222;
              "
            /><img
              src="https://www.anxiousgeneration.com/map/marker2x.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt="Marker"
              tabindex="0"
              role="button"
              style="
                margin-left: -12px;
                margin-top: -41px;
                width: 25px;
                height: 41px;
                transform: translate3d(1451px, 224px, 0px);
                z-index: 224;
              "
            />
          </div>
          <div class="leaflet-pane leaflet-tooltip-pane"></div>
          <div class="leaflet-pane leaflet-popup-pane"></div>
          <div
            class="leaflet-proxy leaflet-zoom-animated"
            style="transform: translate3d(105.099px, 413.552px, 0px) scale(2)"
          ></div>
        </div>
        <div class="leaflet-control-container">
          <div class="leaflet-top leaflet-left">
            <div class="leaflet-control-zoom leaflet-bar leaflet-control">
              <a
                class="leaflet-control-zoom-in"
                href="#"
                title="Zoom in"
                role="button"
                aria-label="Zoom in"
                aria-disabled="false"
                ><span aria-hidden="true">+</span></a
              ><a
                class="leaflet-control-zoom-out"
                href="#"
                title="Zoom out"
                role="button"
                aria-label="Zoom out"
                aria-disabled="false"
                ><span aria-hidden="true">−</span></a
              >
            </div>
          </div>
          <div class="leaflet-top leaflet-right"></div>
          <div class="leaflet-bottom leaflet-left"></div>
          <div class="leaflet-bottom leaflet-right">
            <div class="leaflet-control-attribution leaflet-control">
              <a href="https://leafletjs.com" title="A JavaScript library for interactive maps"
                ><svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  class="leaflet-attribution-flag"
                >
                  <path fill="#4C7BE1" d="M0 0h12v4H0z"></path>
                  <path fill="#FFD500" d="M0 4h12v3H0z"></path>
                  <path fill="#E0BC00" d="M0 7h12v1H0z"></path>
                </svg>
                Leaflet</a
              >
              <span aria-hidden="true">|</span> ©
              <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
