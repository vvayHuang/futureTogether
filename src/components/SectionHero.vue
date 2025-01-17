<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const heroContainer = ref(null)

const handleScroll = () => {
  const scrollTop = window.scrollY
  const maxScroll = 1500 // 最大滾動距離
  const opacity = Math.max(0, 1 - scrollTop / maxScroll)
  if (heroContainer.value) {
    heroContainer.value.style.backgroundColor = `rgba(38, 38, 38, ${opacity})`
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
      <div class="inset-0 absolute emoji">
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -31.76539447008637vw;
            --randY: -32.848023368667214vh;
            --randScale: 0.99;
            --randRotate: 251deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 27.378982410107653vw;
            --randY: -67.45064363482716vh;
            --randScale: 0.99;
            --randRotate: 191deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -9.3192187299912vw;
            --randY: -27.253061469218864vh;
            --randScale: 0.59;
            --randRotate: 148deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -19.670213882760756vw;
            --randY: -68.15972182715109vh;
            --randScale: 0.6;
            --randRotate: 239deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 28.95404786050446vw;
            --randY: -25.887749974829163vh;
            --randScale: 0.72;
            --randRotate: 76deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -19.49276812741294vw;
            --randY: -35.55604384030717vh;
            --randScale: 0.52;
            --randRotate: 71deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 35.67786072119708vw;
            --randY: -62.65725238844253vh;
            --randScale: 0.84;
            --randRotate: 142deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -32.33355880103284vw;
            --randY: -62.23796290644283vh;
            --randScale: 0.98;
            --randRotate: 135deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 25.00671682642148vw;
            --randY: -69.33833532485367vh;
            --randScale: 0.67;
            --randRotate: 6deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 38.650512529050474vw;
            --randY: -57.20747142267493vh;
            --randScale: 0.51;
            --randRotate: 359deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -30.65535084733002vw;
            --randY: -22.68385837682338vh;
            --randScale: 0.8;
            --randRotate: 253deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -15.409603369925406vw;
            --randY: -59.488352450234025vh;
            --randScale: 0.97;
            --randRotate: 342deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 20.694669030155623vw;
            --randY: -64.09624683054574vh;
            --randScale: 0.67;
            --randRotate: 94deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -11.403267199929545vw;
            --randY: -34.61184695944219vh;
            --randScale: 0.73;
            --randRotate: 40deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 30.722104347467535vw;
            --randY: -35.105065481326235vh;
            --randScale: 0.81;
            --randRotate: 302deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -22.672719213631233vw;
            --randY: -59.15882858474282vh;
            --randScale: 0.75;
            --randRotate: 354deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 18.211426652699544vw;
            --randY: -36.09300194294023vh;
            --randScale: 0.89;
            --randRotate: 70deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -28.593173583711206vw;
            --randY: -28.59145766710911vh;
            --randScale: 0.9;
            --randRotate: 260deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -32.2227296801924vw;
            --randY: -31.316980670406537vh;
            --randScale: 0.7;
            --randRotate: 15deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -16.50720565278332vw;
            --randY: -61.290189769371416vh;
            --randScale: 0.89;
            --randRotate: 37deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -16.213668718701598vw;
            --randY: -61.188466936788835vh;
            --randScale: 1;
            --randRotate: 328deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 21.463826697334795vw;
            --randY: -61.40771211069727vh;
            --randScale: 0.82;
            --randRotate: 181deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -19.87839333470085vw;
            --randY: -72.67502844656579vh;
            --randScale: 0.65;
            --randRotate: 355deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -25.12328930407175vw;
            --randY: -69.08893476970911vh;
            --randScale: 0.67;
            --randRotate: 127deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 22.27974687946397vw;
            --randY: -22.232634077995115vh;
            --randScale: 0.82;
            --randRotate: 258deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -19.257494384965135vw;
            --randY: -72.71805222260127vh;
            --randScale: 0.64;
            --randRotate: 163deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -41.34576979250511vw;
            --randY: -64.48076589650626vh;
            --randScale: 0.79;
            --randRotate: 285deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 23.244170021106726vw;
            --randY: -34.44862312940886vh;
            --randScale: 0.82;
            --randRotate: 158deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -33.831124763584896vw;
            --randY: -37.55043155331923vh;
            --randScale: 0.72;
            --randRotate: 16deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 17.617044233203274vw;
            --randY: -61.370447078878556vh;
            --randScale: 0.59;
            --randRotate: 53deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -28.05663122970723vw;
            --randY: -28.72711812831099vh;
            --randScale: 0.6;
            --randRotate: 191deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 25.67455809292227vw;
            --randY: -65.07550183027193vh;
            --randScale: 0.85;
            --randRotate: 112deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -22.67614152887225vw;
            --randY: -73.21621301323171vh;
            --randScale: 0.51;
            --randRotate: 50deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -26.225358067664818vw;
            --randY: -25.432617449613844vh;
            --randScale: 0.9;
            --randRotate: 228deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 11.392113831898975vw;
            --randY: -26.935160961391674vh;
            --randScale: 0.95;
            --randRotate: 296deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 34.40168404941957vw;
            --randY: -72.84972574102164vh;
            --randScale: 0.95;
            --randRotate: 221deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 15.680049230759323vw;
            --randY: -20.046067519184405vh;
            --randScale: 0.82;
            --randRotate: 348deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -23.931781235665106vw;
            --randY: -64.7440378609787vh;
            --randScale: 0.77;
            --randRotate: 165deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -6.171861245626921vw;
            --randY: -27.330837005280316vh;
            --randScale: 0.56;
            --randRotate: 353deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -42.65444403418475vw;
            --randY: -68.89222256253684vh;
            --randScale: 0.66;
            --randRotate: 177deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 35.784260100692805vw;
            --randY: -49.85782971237818vh;
            --randScale: 0.52;
            --randRotate: 70deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -14.75467761051128vw;
            --randY: -72.6039306480665vh;
            --randScale: 0.54;
            --randRotate: 310deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -37.981325090722166vw;
            --randY: -68.09784617619094vh;
            --randScale: 0.98;
            --randRotate: 288deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 23.112505729771442vw;
            --randY: -32.24982196728685vh;
            --randScale: 0.99;
            --randRotate: 207deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 15.109544207253634vw;
            --randY: -41.06844827391078vh;
            --randScale: 0.88;
            --randRotate: 358deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -35.89177843467424vw;
            --randY: -44.493044527846635vh;
            --randScale: 0.84;
            --randRotate: 184deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 14.387179621143247vw;
            --randY: -38.501786233494364vh;
            --randScale: 0.98;
            --randRotate: 100deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 24.789557261746992vw;
            --randY: -39.0661378682138vh;
            --randScale: 0.81;
            --randRotate: 53deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 23.101714085808922vw;
            --randY: -24.458201908359626vh;
            --randScale: 0.66;
            --randRotate: 62deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -18.92405690655805vw;
            --randY: -34.40998064223757vh;
            --randScale: 0.77;
            --randRotate: 258deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -20.0252983597327vw;
            --randY: -23.121488511483747vh;
            --randScale: 0.92;
            --randRotate: 356deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 24.554974741600915vw;
            --randY: -20.657709175587485vh;
            --randScale: 0.79;
            --randRotate: 343deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -41.015738159135836vw;
            --randY: -64.38436567716334vh;
            --randScale: 0.98;
            --randRotate: 286deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -17.3474661099879vw;
            --randY: -34.91575716588129vh;
            --randScale: 0.84;
            --randRotate: 229deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 30.544668536672773vw;
            --randY: -71.5942267752088vh;
            --randScale: 0.91;
            --randRotate: 111deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -19.36387785437439vw;
            --randY: -65.36918500285394vh;
            --randScale: 0.98;
            --randRotate: 108deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -13.976209902752323vw;
            --randY: -34.16949684371082vh;
            --randScale: 0.95;
            --randRotate: 339deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -8.800062764975827vw;
            --randY: -23.564074344841018vh;
            --randScale: 0.98;
            --randRotate: 331deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -40.59815052947644vw;
            --randY: -56.99268072169843vh;
            --randScale: 0.73;
            --randRotate: 276deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 15.785149973968089vw;
            --randY: -25.82245383261339vh;
            --randScale: 0.81;
            --randRotate: 185deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 35.99137913805612vw;
            --randY: -66.91586299648584vh;
            --randScale: 0.55;
            --randRotate: 344deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 16.297234632379528vw;
            --randY: -60.77663666109028vh;
            --randScale: 0.9;
            --randRotate: 68deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -23.923960929488008vw;
            --randY: -20.262742472078372vh;
            --randScale: 0.93;
            --randRotate: 285deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 20.419006986243616vw;
            --randY: -61.79556448209724vh;
            --randScale: 0.75;
            --randRotate: 124deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -35.683588293190006vw;
            --randY: -65.99745872748375vh;
            --randScale: 0.7;
            --randRotate: 359deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -34.98749793687295vw;
            --randY: -68.75711078612417vh;
            --randScale: 0.98;
            --randRotate: 71deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 19.204620958024506vw;
            --randY: -33.19300401600039vh;
            --randScale: 0.88;
            --randRotate: 300deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -21.798871082223535vw;
            --randY: -41.1863862466421vh;
            --randScale: 0.55;
            --randRotate: 290deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 16.18365819916275vw;
            --randY: -64.82695332007651vh;
            --randScale: 0.92;
            --randRotate: 336deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -30.88291159626508vw;
            --randY: -31.28159018155563vh;
            --randScale: 0.65;
            --randRotate: 321deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 11.179371261406224vw;
            --randY: -30.003841139569374vh;
            --randScale: 0.5;
            --randRotate: 227deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 7.467306368830684vw;
            --randY: -27.13868108157962vh;
            --randScale: 0.65;
            --randRotate: 108deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -15.147953137733005vw;
            --randY: -64.04200240643165vh;
            --randScale: 0.6;
            --randRotate: 49deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -17.498125475064505vw;
            --randY: -60.54829219307709vh;
            --randScale: 0.6;
            --randRotate: 319deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -34.46404894024219vw;
            --randY: -35.17018666647405vh;
            --randScale: 0.99;
            --randRotate: 306deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 18.430118306193236vw;
            --randY: -59.32133127731616vh;
            --randScale: 0.97;
            --randRotate: 25deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 29.121869657023353vw;
            --randY: -29.116321464432417vh;
            --randScale: 0.87;
            --randRotate: 355deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 12.619346541632659vw;
            --randY: -35.07064393824169vh;
            --randScale: 0.59;
            --randRotate: 47deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 11.976322091246175vw;
            --randY: -33.338634088261216vh;
            --randScale: 0.91;
            --randRotate: 240deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -25.619351338380604vw;
            --randY: -20.005963738080368vh;
            --randScale: 0.85;
            --randRotate: 18deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 27.631346898719528vw;
            --randY: -36.17068093682876vh;
            --randScale: 0.61;
            --randRotate: 93deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -25.26694941545886vw;
            --randY: -24.85319275502303vh;
            --randScale: 0.7;
            --randRotate: 170deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -38.7421769083941vw;
            --randY: -53.26230960423057vh;
            --randScale: 0.94;
            --randRotate: 230deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -19.70255301128363vw;
            --randY: -59.21295253466767vh;
            --randScale: 0.8;
            --randRotate: 53deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -27.46383517867612vw;
            --randY: -27.421776716935042vh;
            --randScale: 0.71;
            --randRotate: 173deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -17.369422194732522vw;
            --randY: -73.54442575010205vh;
            --randScale: 0.73;
            --randRotate: 196deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 29.27580283679862vw;
            --randY: -40.20170080207883vh;
            --randScale: 0.83;
            --randRotate: 338deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 17.16599401301366vw;
            --randY: -25.86077571524737vh;
            --randScale: 0.66;
            --randRotate: 166deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 14.612764699829413vw;
            --randY: -24.63676582113463vh;
            --randScale: 0.84;
            --randRotate: 177deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 27.77086003745299vw;
            --randY: -25.613653113284514vh;
            --randScale: 0.56;
            --randRotate: 84deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 12.213833182537371vw;
            --randY: -33.44216324582288vh;
            --randScale: 0.78;
            --randRotate: 262deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -27.256592884245535vw;
            --randY: -35.249111803126794vh;
            --randScale: 0.52;
            --randRotate: 240deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -25.073665096177677vw;
            --randY: -62.88127142864104vh;
            --randScale: 0.76;
            --randRotate: 272deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -37.90182795793664vw;
            --randY: -52.630198831879696vh;
            --randScale: 0.75;
            --randRotate: 185deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -40.97053613752073vw;
            --randY: -68.33881914075646vh;
            --randScale: 0.71;
            --randRotate: 31deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -16.89728300741593vw;
            --randY: -20.474522799071565vh;
            --randScale: 0.75;
            --randRotate: 54deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -20.95180835025627vw;
            --randY: -20.230159320655588vh;
            --randScale: 0.84;
            --randRotate: 356deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -33.03585297822844vw;
            --randY: -63.70020565901082vh;
            --randScale: 0.97;
            --randRotate: 103deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 27.840122226466704vw;
            --randY: -59.76567579592924vh;
            --randScale: 0.84;
            --randRotate: 358deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 23.867402642693207vw;
            --randY: -24.46745878947536vh;
            --randScale: 0.84;
            --randRotate: 126deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -37.48765477017826vw;
            --randY: -53.31296874387328vh;
            --randScale: 0.71;
            --randRotate: 30deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -33.25068558153421vw;
            --randY: -62.967629653042145vh;
            --randScale: 0.87;
            --randRotate: 354deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 33.09923118941637vw;
            --randY: -71.28409529049333vh;
            --randScale: 0.88;
            --randRotate: 340deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 19.085014330871047vw;
            --randY: -68.67248364485988vh;
            --randScale: 0.71;
            --randRotate: 1deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -28.192497208823152vw;
            --randY: -37.160948141698505vh;
            --randScale: 0.91;
            --randRotate: 224deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 10.476341523490703vw;
            --randY: -20.489102520510883vh;
            --randScale: 0.93;
            --randRotate: 29deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 0.32893760582428655vw;
            --randY: -24.488564344907942vh;
            --randScale: 0.89;
            --randRotate: 237deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 21.610106186524277vw;
            --randY: -26.287044601143634vh;
            --randScale: 0.59;
            --randRotate: 264deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -37.55535725249675vw;
            --randY: -69.92005189010197vh;
            --randScale: 0.94;
            --randRotate: 232deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -40.23419156863033vw;
            --randY: -67.3406966127961vh;
            --randScale: 0.51;
            --randRotate: 124deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 13.509726131728343vw;
            --randY: -34.51923938381766vh;
            --randScale: 0.65;
            --randRotate: 235deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 32.169237683710634vw;
            --randY: -30.675890843341037vh;
            --randScale: 0.69;
            --randRotate: 274deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 23.79636998050212vw;
            --randY: -59.77301975193168vh;
            --randScale: 0.94;
            --randRotate: 12deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 36.464781432417624vw;
            --randY: -67.54114171501078vh;
            --randScale: 0.84;
            --randRotate: 268deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -11.947403902499978vw;
            --randY: -38.51682787046469vh;
            --randScale: 0.59;
            --randRotate: 239deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -19.821735253664087vw;
            --randY: -20.61104429809555vh;
            --randScale: 0.91;
            --randRotate: 106deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -23.797790970279607vw;
            --randY: -40.0760233999397vh;
            --randScale: 0.75;
            --randRotate: 48deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 20.917957802617266vw;
            --randY: -66.8571871002074vh;
            --randScale: 0.86;
            --randRotate: 140deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 37.47700328909205vw;
            --randY: -66.44465754588882vh;
            --randScale: 0.69;
            --randRotate: 148deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 16.129573124351083vw;
            --randY: -64.96748890186254vh;
            --randScale: 0.57;
            --randRotate: 75deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 37.948241876982294vw;
            --randY: -71.43089677633394vh;
            --randScale: 0.91;
            --randRotate: 258deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 23.106787178288783vw;
            --randY: -36.28147072395922vh;
            --randScale: 0.85;
            --randRotate: 267deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -16.294704929833713vw;
            --randY: -69.09085340292103vh;
            --randScale: 0.98;
            --randRotate: 43deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -38.584943379236634vw;
            --randY: -72.44181505312838vh;
            --randScale: 0.82;
            --randRotate: 313deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -30.84154825860974vw;
            --randY: -25.914037915896245vh;
            --randScale: 0.85;
            --randRotate: 228deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 10.555531618872884vw;
            --randY: -33.85398000244635vh;
            --randScale: 0.91;
            --randRotate: 209deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -36.21452577522803vw;
            --randY: -60.71707217102953vh;
            --randScale: 0.51;
            --randRotate: 15deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 8.94850015830766vw;
            --randY: -21.918602565303402vh;
            --randScale: 0.89;
            --randRotate: 357deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -18.471009521366668vw;
            --randY: -20.606048105792254vh;
            --randScale: 0.65;
            --randRotate: 144deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 29.597728240089637vw;
            --randY: -38.46175474763385vh;
            --randScale: 0.68;
            --randRotate: 202deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -35.608362438228156vw;
            --randY: -39.58745523248921vh;
            --randScale: 0.72;
            --randRotate: 191deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -26.65207140256736vw;
            --randY: -60.717238580036856vh;
            --randScale: 0.6;
            --randRotate: 78deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -29.919864507955097vw;
            --randY: -61.97553023206368vh;
            --randScale: 0.89;
            --randRotate: 178deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 19.523239433283067vw;
            --randY: -64.3444388176753vh;
            --randScale: 0.51;
            --randRotate: 67deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -26.794265591137467vw;
            --randY: -29.926590275876563vh;
            --randScale: 0.87;
            --randRotate: 28deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -14.86567111611965vw;
            --randY: -38.53754863353937vh;
            --randScale: 0.96;
            --randRotate: 256deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -31.777591144220118vw;
            --randY: -40.877782559950624vh;
            --randScale: 0.99;
            --randRotate: 96deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 30.71415587203849vw;
            --randY: -26.974086283294625vh;
            --randScale: 0.89;
            --randRotate: 106deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -32.975812191715264vw;
            --randY: -64.16146606219135vh;
            --randScale: 0.82;
            --randRotate: 165deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -12.699667354311806vw;
            --randY: -27.651215359928386vh;
            --randScale: 0.64;
            --randRotate: 188deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -26.252375427900642vw;
            --randY: -67.53429125962616vh;
            --randScale: 0.74;
            --randRotate: 124deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 13.135963956955244vw;
            --randY: -25.686892510805464vh;
            --randScale: 0.75;
            --randRotate: 97deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 20.402139949304484vw;
            --randY: -39.46738333518043vh;
            --randScale: 0.76;
            --randRotate: 53deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 27.78515028539978vw;
            --randY: -39.70476773985296vh;
            --randScale: 0.7;
            --randRotate: 160deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 34.771664072705065vw;
            --randY: -68.58427232817728vh;
            --randScale: 0.7;
            --randRotate: 314deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 23.513429542398583vw;
            --randY: -61.11783323204871vh;
            --randScale: 0.64;
            --randRotate: 23deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -17.456585742571626vw;
            --randY: -25.896125329672273vh;
            --randScale: 0.58;
            --randRotate: 122deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -36.26560421887957vw;
            --randY: -66.8735833934029vh;
            --randScale: 0.7;
            --randRotate: 206deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -41.34790029765361vw;
            --randY: -60.12938567843427vh;
            --randScale: 0.84;
            --randRotate: 304deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -27.03876899322415vw;
            --randY: -64.3815733405706vh;
            --randScale: 0.78;
            --randRotate: 313deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 38.80095670089207vw;
            --randY: -57.42728403266242vh;
            --randScale: 0.7;
            --randRotate: 350deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 18.55482065202112vw;
            --randY: -73.38783020791013vh;
            --randScale: 0.7;
            --randRotate: 284deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 34.138837469888344vw;
            --randY: -62.68312132897105vh;
            --randScale: 0.51;
            --randRotate: 254deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 25.44310494688189vw;
            --randY: -32.73014349885253vh;
            --randScale: 0.61;
            --randRotate: 231deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 35.8465538673741vw;
            --randY: -66.7253618214108vh;
            --randScale: 0.96;
            --randRotate: 202deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -23.075836959229612vw;
            --randY: -34.06323802910592vh;
            --randScale: 0.5;
            --randRotate: 227deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -18.690387296208332vw;
            --randY: -60.2540353055734vh;
            --randScale: 0.76;
            --randRotate: 157deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -24.33258839655943vw;
            --randY: -40.07351995747661vh;
            --randScale: 0.77;
            --randRotate: 198deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -13.952418035814262vw;
            --randY: -36.51883068084673vh;
            --randScale: 0.55;
            --randRotate: 26deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -16.879274450647827vw;
            --randY: -58.96821802945074vh;
            --randScale: 0.94;
            --randRotate: 182deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -39.108038664452025vw;
            --randY: -70.59330303305947vh;
            --randScale: 0.55;
            --randRotate: 222deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 20.004907407222277vw;
            --randY: -60.27107427928977vh;
            --randScale: 0.72;
            --randRotate: 341deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 36.562910681679vw;
            --randY: -57.31926847563338vh;
            --randScale: 0.7;
            --randRotate: 320deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 2.2723636195737953vw;
            --randY: -20.18770702550117vh;
            --randScale: 0.76;
            --randRotate: 226deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 15.201181323596941vw;
            --randY: -70.79729678459105vh;
            --randScale: 0.98;
            --randRotate: 62deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -12.395239660311816vw;
            --randY: -38.865595466890056vh;
            --randScale: 0.94;
            --randRotate: 49deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 38.86840277773888vw;
            --randY: -67.0211141305117vh;
            --randScale: 0.55;
            --randRotate: 274deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -14.647301728876961vw;
            --randY: -29.929019122574843vh;
            --randScale: 0.74;
            --randRotate: 7deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -16.217598797923237vw;
            --randY: -22.92454705724039vh;
            --randScale: 0.83;
            --randRotate: 294deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -26.50256188609772vw;
            --randY: -63.97901657303209vh;
            --randScale: 0.74;
            --randRotate: 49deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -19.730042523644077vw;
            --randY: -70.7664591530846vh;
            --randScale: 0.51;
            --randRotate: 72deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -15.603196545839836vw;
            --randY: -30.89073395537551vh;
            --randScale: 0.52;
            --randRotate: 311deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -26.232879171093828vw;
            --randY: -67.13305769110664vh;
            --randScale: 0.81;
            --randRotate: 186deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 39.021034193681785vw;
            --randY: -71.30209146828246vh;
            --randScale: 0.69;
            --randRotate: 30deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -38.046036031452715vw;
            --randY: -61.14649961320959vh;
            --randScale: 0.96;
            --randRotate: 150deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 32.19479246429937vw;
            --randY: -65.10403699804564vh;
            --randScale: 0.83;
            --randRotate: 344deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 16.348342396538vw;
            --randY: -39.38225611378827vh;
            --randScale: 0.82;
            --randRotate: 140deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -24.518321585361825vw;
            --randY: -32.39396045501289vh;
            --randScale: 0.91;
            --randRotate: 77deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 13.846250891782752vw;
            --randY: -38.674047190556536vh;
            --randScale: 0.96;
            --randRotate: 324deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -20.729690678410662vw;
            --randY: -40.624264003982624vh;
            --randScale: 0.81;
            --randRotate: 121deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 23.356374573571202vw;
            --randY: -69.80367315405225vh;
            --randScale: 0.81;
            --randRotate: 74deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 24.312723630889394vw;
            --randY: -68.74602014731212vh;
            --randScale: 0.64;
            --randRotate: 115deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -13.826516294945378vw;
            --randY: -25.187847132067986vh;
            --randScale: 0.77;
            --randRotate: 218deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 22.539486450535847vw;
            --randY: -32.87699742039945vh;
            --randScale: 0.97;
            --randRotate: 78deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 24.391335060118365vw;
            --randY: -72.03819983056584vh;
            --randScale: 0.86;
            --randRotate: 268deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -31.548507831174vw;
            --randY: -28.38892973460048vh;
            --randScale: 0.8;
            --randRotate: 272deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -40.473510153243055vw;
            --randY: -55.01745112894767vh;
            --randScale: 0.87;
            --randRotate: 109deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -7.278566063177095vw;
            --randY: -26.039330151407185vh;
            --randScale: 0.7;
            --randRotate: 277deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -30.533168674875522vw;
            --randY: -32.59062208252281vh;
            --randScale: 0.73;
            --randRotate: 255deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -28.08187730012679vw;
            --randY: -73.36457197326267vh;
            --randScale: 0.83;
            --randRotate: 111deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 27.56604382613213vw;
            --randY: -21.717416567070046vh;
            --randScale: 0.87;
            --randRotate: 121deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 36.33350593098311vw;
            --randY: -49.950091689641596vh;
            --randScale: 0.72;
            --randRotate: 354deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -28.647516455297684vw;
            --randY: -40.62207216131502vh;
            --randScale: 0.76;
            --randRotate: 308deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -19.830296549937376vw;
            --randY: -61.699463985093004vh;
            --randScale: 0.86;
            --randRotate: 215deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -38.12069160335094vw;
            --randY: -56.40248430981156vh;
            --randScale: 0.64;
            --randRotate: 286deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 23.625124230999674vw;
            --randY: -71.77193155250768vh;
            --randScale: 0.61;
            --randRotate: 328deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 19.97087459215325vw;
            --randY: -64.65094089172047vh;
            --randScale: 0.86;
            --randRotate: 311deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -30.576775790965915vw;
            --randY: -73.11980119252475vh;
            --randScale: 0.69;
            --randRotate: 212deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -36.76928483774988vw;
            --randY: -55.58266902903017vh;
            --randScale: 0.89;
            --randRotate: 171deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -13.226605332334707vw;
            --randY: -35.26801319201154vh;
            --randScale: 0.53;
            --randRotate: 18deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 34.3726227196006vw;
            --randY: -59.01801340174608vh;
            --randScale: 0.52;
            --randRotate: 150deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -31.418421920158224vw;
            --randY: -27.237047295977803vh;
            --randScale: 0.69;
            --randRotate: 29deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -34.40303266055875vw;
            --randY: -63.086597235482664vh;
            --randScale: 0.55;
            --randRotate: 108deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -35.981594119592515vw;
            --randY: -51.62376517182257vh;
            --randScale: 0.6;
            --randRotate: 168deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 27.672182894272794vw;
            --randY: -29.255082191239822vh;
            --randScale: 0.55;
            --randRotate: 241deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -35.93593116473892vw;
            --randY: -69.92453724663727vh;
            --randScale: 0.68;
            --randRotate: 36deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -21.55009446319649vw;
            --randY: -23.703878263677524vh;
            --randScale: 0.57;
            --randRotate: 286deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 16.899577038024887vw;
            --randY: -20.42265332337972vh;
            --randScale: 0.78;
            --randRotate: 148deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -37.59497618557792vw;
            --randY: -62.4553249793709vh;
            --randScale: 0.54;
            --randRotate: 239deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 21.663107044451294vw;
            --randY: -68.76983890059279vh;
            --randScale: 0.72;
            --randRotate: 313deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -22.110546931322794vw;
            --randY: -34.89912516214166vh;
            --randScale: 0.53;
            --randRotate: 97deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -22.60152251131331vw;
            --randY: -60.90224661409434vh;
            --randScale: 0.51;
            --randRotate: 202deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -35.47364862074984vw;
            --randY: -36.26239255545038vh;
            --randScale: 0.56;
            --randRotate: 102deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 29.284942342614116vw;
            --randY: -35.48714977618039vh;
            --randScale: 1;
            --randRotate: 82deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -43.64507395185149vw;
            --randY: -71.9745108061185vh;
            --randScale: 0.53;
            --randRotate: 214deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 34.42004641751299vw;
            --randY: -44.910137219072624vh;
            --randScale: 0.56;
            --randRotate: 108deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -40.06118655701747vw;
            --randY: -60.79688143302451vh;
            --randScale: 0.89;
            --randRotate: 221deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -38.41283093653678vw;
            --randY: -60.15179264682564vh;
            --randScale: 0.99;
            --randRotate: 71deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 26.245233491264514vw;
            --randY: -63.58587032175569vh;
            --randScale: 0.81;
            --randRotate: 289deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -13.983320608573948vw;
            --randY: -23.53314969382268vh;
            --randScale: 0.82;
            --randRotate: 151deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -31.35891553981647vw;
            --randY: -68.0737717870165vh;
            --randScale: 0.9;
            --randRotate: 323deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 38.22179082548888vw;
            --randY: -63.62374282058487vh;
            --randScale: 0.84;
            --randRotate: 121deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -28.976018370877576vw;
            --randY: -40.58179635363099vh;
            --randScale: 0.71;
            --randRotate: 139deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 36.90410330302787vw;
            --randY: -67.21260138007945vh;
            --randScale: 0.66;
            --randRotate: 50deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -12.852962482832567vw;
            --randY: -34.85780425397904vh;
            --randScale: 0.92;
            --randRotate: 35deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 28.54372177535494vw;
            --randY: -30.291733868421034vh;
            --randScale: 0.75;
            --randRotate: 250deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -25.49784053349391vw;
            --randY: -30.94446220878946vh;
            --randScale: 0.8;
            --randRotate: 331deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 32.03915256319874vw;
            --randY: -34.71810633255055vh;
            --randScale: 0.83;
            --randRotate: 78deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 35.622903579007385vw;
            --randY: -69.51744303324429vh;
            --randScale: 0.52;
            --randRotate: 32deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -32.57504766336168vw;
            --randY: -73.10890397379792vh;
            --randScale: 0.67;
            --randRotate: 7deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -29.390747610061062vw;
            --randY: -23.1267934344976vh;
            --randScale: 0.98;
            --randRotate: 133deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 27.682988346218877vw;
            --randY: -24.946693679262054vh;
            --randScale: 0.83;
            --randRotate: 356deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -37.52048415749554vw;
            --randY: -56.89826758719321vh;
            --randScale: 0.77;
            --randRotate: 32deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 16.705612547352743vw;
            --randY: -30.8483234620804vh;
            --randScale: 0.93;
            --randRotate: 214deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 39.93678847347944vw;
            --randY: -66.785035494803vh;
            --randScale: 0.95;
            --randRotate: 262deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -38.45985526859887vw;
            --randY: -55.4294380209708vh;
            --randScale: 0.54;
            --randRotate: 355deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -33.8232483890434vw;
            --randY: -29.694746156789492vh;
            --randScale: 0.65;
            --randRotate: 232deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -35.815922516101885vw;
            --randY: -54.02611986412005vh;
            --randScale: 0.66;
            --randRotate: 207deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -41.354960582130396vw;
            --randY: -69.42275415815524vh;
            --randScale: 0.71;
            --randRotate: 82deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -36.90918277231556vw;
            --randY: -60.748463428767565vh;
            --randScale: 0.94;
            --randRotate: 295deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 22.99440123791443vw;
            --randY: -33.62127051507191vh;
            --randScale: 0.7;
            --randRotate: 206deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -21.63711069219165vw;
            --randY: -64.66989382303436vh;
            --randScale: 0.87;
            --randRotate: 9deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 29.175537182750745vw;
            --randY: -69.31813348724742vh;
            --randScale: 0.61;
            --randRotate: 262deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 8.306349276644887vw;
            --randY: -25.03065520324192vh;
            --randScale: 0.9;
            --randRotate: 185deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 28.985876116484334vw;
            --randY: -71.05755787837032vh;
            --randScale: 0.53;
            --randRotate: 145deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -27.319499503506073vw;
            --randY: -59.985171350496344vh;
            --randScale: 0.53;
            --randRotate: 231deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 21.58149049717582vw;
            --randY: -67.4523765190737vh;
            --randScale: 0.51;
            --randRotate: 118deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 39.361074181148155vw;
            --randY: -64.27309867854443vh;
            --randScale: 0.98;
            --randRotate: 297deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -18.20324103617448vw;
            --randY: -67.35601648491325vh;
            --randScale: 0.62;
            --randRotate: 57deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 15.453644448327793vw;
            --randY: -59.11103709636147vh;
            --randScale: 0.99;
            --randRotate: 273deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -6.758960014847901vw;
            --randY: -25.079092959581104vh;
            --randScale: 0.92;
            --randRotate: 316deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -43.84181828140497vw;
            --randY: -67.92228845512597vh;
            --randScale: 0.94;
            --randRotate: 81deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -30.089797222975044vw;
            --randY: -27.763753725075134vh;
            --randScale: 0.88;
            --randRotate: 6deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 30.231637485062876vw;
            --randY: -65.2612485271361vh;
            --randScale: 0.51;
            --randRotate: 210deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -31.24907623885602vw;
            --randY: -61.06710686796832vh;
            --randScale: 0.93;
            --randRotate: 173deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -32.71395151358545vw;
            --randY: -40.20718837132131vh;
            --randScale: 0.6;
            --randRotate: 192deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -28.837435079047037vw;
            --randY: -26.475484801310856vh;
            --randScale: 0.56;
            --randRotate: 185deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -14.618950830996603vw;
            --randY: -27.135851444670706vh;
            --randScale: 0.81;
            --randRotate: 32deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 5.826413374660568vw;
            --randY: -25.95393438202443vh;
            --randScale: 0.97;
            --randRotate: 237deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 33.08105655234519vw;
            --randY: -69.76453065161658vh;
            --randScale: 0.96;
            --randRotate: 131deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 16.83960083844876vw;
            --randY: -35.00002248744471vh;
            --randScale: 0.92;
            --randRotate: 104deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 12.310515733840568vw;
            --randY: -28.13876804317404vh;
            --randScale: 0.62;
            --randRotate: 220deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -18.931426508988245vw;
            --randY: -72.65923903817352vh;
            --randScale: 0.64;
            --randRotate: 305deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -37.71314619522481vw;
            --randY: -65.95159594167006vh;
            --randScale: 0.63;
            --randRotate: 278deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 14.114354327519905vw;
            --randY: -37.291435670835014vh;
            --randScale: 0.83;
            --randRotate: 54deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -13.138488445056474vw;
            --randY: -40.48115060981146vh;
            --randScale: 0.92;
            --randRotate: 123deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -18.742913100254576vw;
            --randY: -41.055609561054496vh;
            --randScale: 0.59;
            --randRotate: 192deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -14.697675496191252vw;
            --randY: -27.5203931623238vh;
            --randScale: 0.99;
            --randRotate: 203deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 28.20309100429104vw;
            --randY: -34.49431452683338vh;
            --randScale: 0.81;
            --randRotate: 302deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 14.07109159641567vw;
            --randY: -22.418216327352212vh;
            --randScale: 0.5;
            --randRotate: 183deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 34.73357068467287vw;
            --randY: -51.34532551811364vh;
            --randScale: 0.85;
            --randRotate: 127deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -33.50189457856487vw;
            --randY: -62.43978868512674vh;
            --randScale: 0.76;
            --randRotate: 350deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -14.212350954801266vw;
            --randY: -40.584728190066535vh;
            --randScale: 0.94;
            --randRotate: 245deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 20.876798240376203vw;
            --randY: -34.93922064623922vh;
            --randScale: 0.82;
            --randRotate: 97deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 15.797117984972147vw;
            --randY: -38.58677810220947vh;
            --randScale: 0.54;
            --randRotate: 98deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 36.541277099826885vw;
            --randY: -55.66243335650969vh;
            --randScale: 0.89;
            --randRotate: 283deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -43.65480279622631vw;
            --randY: -68.78798448919136vh;
            --randScale: 0.93;
            --randRotate: 191deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 20.031084925396087vw;
            --randY: -70.23213719092907vh;
            --randScale: 0.96;
            --randRotate: 352deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -20.352659785209394vw;
            --randY: -27.085327903919904vh;
            --randScale: 0.53;
            --randRotate: 87deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 14.683188583845876vw;
            --randY: -39.108262513011496vh;
            --randScale: 0.9;
            --randRotate: 174deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 21.135974158634127vw;
            --randY: -71.79021229226913vh;
            --randScale: 0.78;
            --randRotate: 60deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -23.743625945970237vw;
            --randY: -20.968921221810973vh;
            --randScale: 0.85;
            --randRotate: 43deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 33.474777097950565vw;
            --randY: -38.572979191898725vh;
            --randScale: 0.8;
            --randRotate: 356deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -29.61307712967114vw;
            --randY: -32.48385807553585vh;
            --randScale: 0.66;
            --randRotate: 43deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -16.131352093585647vw;
            --randY: -72.17042375915959vh;
            --randScale: 0.56;
            --randRotate: 185deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 22.011910661368404vw;
            --randY: -39.90648964326557vh;
            --randScale: 0.51;
            --randRotate: 146deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 22.406259802837198vw;
            --randY: -37.649300378847215vh;
            --randScale: 0.87;
            --randRotate: 335deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 39.47692582326954vw;
            --randY: -67.78841086856173vh;
            --randScale: 0.86;
            --randRotate: 165deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 19.379668326553883vw;
            --randY: -35.879134903464305vh;
            --randScale: 0.81;
            --randRotate: 124deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 28.302040461832306vw;
            --randY: -29.68180999091696vh;
            --randScale: 0.61;
            --randRotate: 211deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 16.07630006056418vw;
            --randY: -62.400827639597026vh;
            --randScale: 0.64;
            --randRotate: 262deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 24.882555842654057vw;
            --randY: -35.11696362070451vh;
            --randScale: 0.71;
            --randRotate: 40deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 28.668914521164353vw;
            --randY: -33.2831499522928vh;
            --randScale: 0.51;
            --randRotate: 244deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -25.158648966215445vw;
            --randY: -71.54389341248822vh;
            --randScale: 0.66;
            --randRotate: 67deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -27.301205964419783vw;
            --randY: -70.71044633002003vh;
            --randScale: 0.89;
            --randRotate: 241deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 19.634918947418555vw;
            --randY: -26.863312740159444vh;
            --randScale: 0.7;
            --randRotate: 85deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 29.30421309521698vw;
            --randY: -70.48739507794008vh;
            --randScale: 0.87;
            --randRotate: 123deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -35.225536752951236vw;
            --randY: -50.443672541436534vh;
            --randScale: 0.7;
            --randRotate: 118deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 23.15833874258331vw;
            --randY: -67.58898028721057vh;
            --randScale: 0.62;
            --randRotate: 161deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 35.821530230583136vw;
            --randY: -71.03852448970424vh;
            --randScale: 0.71;
            --randRotate: 39deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -31.18881782396823vw;
            --randY: -36.83273795320326vh;
            --randScale: 0.81;
            --randRotate: 91deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 20.539312530659544vw;
            --randY: -31.126400629903728vh;
            --randScale: 0.86;
            --randRotate: 267deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -39.22130664170149vw;
            --randY: -67.63324096458373vh;
            --randScale: 0.63;
            --randRotate: 336deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -20.974330779466797vw;
            --randY: -72.16952522488305vh;
            --randScale: 0.56;
            --randRotate: 117deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -29.69704562459585vw;
            --randY: -64.11052667801721vh;
            --randScale: 0.59;
            --randRotate: 160deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -17.428516908239835vw;
            --randY: -63.15988913443vh;
            --randScale: 0.96;
            --randRotate: 312deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -33.479094699800505vw;
            --randY: -26.748864040929973vh;
            --randScale: 0.63;
            --randRotate: 78deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -25.5677228864978vw;
            --randY: -22.31230584261887vh;
            --randScale: 0.62;
            --randRotate: 94deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 19.401166509559104vw;
            --randY: -34.803005031867045vh;
            --randScale: 0.99;
            --randRotate: 101deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 38.147170928947034vw;
            --randY: -60.96866411225683vh;
            --randScale: 0.92;
            --randRotate: 223deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -17.73043612394727vw;
            --randY: -36.67326701717983vh;
            --randScale: 0.51;
            --randRotate: 242deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 22.45155488210817vw;
            --randY: -73.23039288832184vh;
            --randScale: 0.9;
            --randRotate: 267deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -17.53223976065008vw;
            --randY: -63.55381367161064vh;
            --randScale: 0.57;
            --randRotate: 254deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -34.35451016028699vw;
            --randY: -34.96851923603117vh;
            --randScale: 0.58;
            --randRotate: 267deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 11.26221721715546vw;
            --randY: -36.82458874642771vh;
            --randScale: 0.6;
            --randRotate: 278deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -12.79315682217863vw;
            --randY: -38.918037810584295vh;
            --randScale: 0.88;
            --randRotate: 221deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 0.7505636940418299vw;
            --randY: -20.02651719552408vh;
            --randScale: 0.92;
            --randRotate: 131deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -43.52131280582468vw;
            --randY: -70.9400561890787vh;
            --randScale: 0.65;
            --randRotate: 272deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 3.1062877085207248vw;
            --randY: -23.586921862236494vh;
            --randScale: 0.66;
            --randRotate: 213deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 13.938806278230878vw;
            --randY: -27.359145008767555vh;
            --randScale: 0.85;
            --randRotate: 319deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -4.902098931526133vw;
            --randY: -22.071619749409095vh;
            --randScale: 0.77;
            --randRotate: 256deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 37.945159284508875vw;
            --randY: -60.74985983615129vh;
            --randScale: 0.75;
            --randRotate: 84deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 37.92630216892971vw;
            --randY: -65.22366748260582vh;
            --randScale: 0.55;
            --randRotate: 76deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 11.338732309427257vw;
            --randY: -36.37697112757707vh;
            --randScale: 0.71;
            --randRotate: 242deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 19.922452723131116vw;
            --randY: -70.51189744957529vh;
            --randScale: 0.73;
            --randRotate: 94deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 19.449292783203532vw;
            --randY: -58.84079401389675vh;
            --randScale: 0.73;
            --randRotate: 157deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -26.65459944758077vw;
            --randY: -61.04805209376072vh;
            --randScale: 0.64;
            --randRotate: 330deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 35.21351188579065vw;
            --randY: -49.00666836952874vh;
            --randScale: 0.53;
            --randRotate: 196deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 24.297012962119766vw;
            --randY: -22.890858819653886vh;
            --randScale: 0.76;
            --randRotate: 247deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -32.17566319559315vw;
            --randY: -70.14282534134398vh;
            --randScale: 0.77;
            --randRotate: 98deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 7.932236774879712vw;
            --randY: -23.285656913317993vh;
            --randScale: 0.78;
            --randRotate: 72deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 39.767954107125874vw;
            --randY: -67.13935850030286vh;
            --randScale: 0.68;
            --randRotate: 76deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -40.20118155630985vw;
            --randY: -56.32209465298212vh;
            --randScale: 0.89;
            --randRotate: 156deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -12.619781939071139vw;
            --randY: -30.391710873687416vh;
            --randScale: 0.9;
            --randRotate: 290deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -38.70336905903344vw;
            --randY: -57.63956764287772vh;
            --randScale: 0.55;
            --randRotate: 357deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 19.042263885226603vw;
            --randY: -65.2266189918079vh;
            --randScale: 0.61;
            --randRotate: 196deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -23.56738193384855vw;
            --randY: -31.800974489749592vh;
            --randScale: 0.81;
            --randRotate: 171deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 26.068093617044724vw;
            --randY: -37.70065544057428vh;
            --randScale: 0.77;
            --randRotate: 282deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -24.028499267637017vw;
            --randY: -20.192432240764816vh;
            --randScale: 0.75;
            --randRotate: 262deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -24.73527647088103vw;
            --randY: -36.56139690104465vh;
            --randScale: 0.68;
            --randRotate: 212deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 32.24616053970412vw;
            --randY: -61.18062580011496vh;
            --randScale: 0.97;
            --randRotate: 36deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 9.666530298416461vw;
            --randY: -25.4138376295858vh;
            --randScale: 0.55;
            --randRotate: 220deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 3.435827763254707vw;
            --randY: -21.139322326270744vh;
            --randScale: 0.6;
            --randRotate: 84deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -17.205313048348955vw;
            --randY: -25.15373164420251vh;
            --randScale: 0.57;
            --randRotate: 351deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 34.87724423314211vw;
            --randY: -53.8930280851349vh;
            --randScale: 0.85;
            --randRotate: 114deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -18.71795467964512vw;
            --randY: -24.087118584072044vh;
            --randScale: 0.58;
            --randRotate: 205deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 21.1458036571252vw;
            --randY: -61.61328265875947vh;
            --randScale: 0.69;
            --randRotate: 280deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 35.183675729575725vw;
            --randY: -57.73787923182579vh;
            --randScale: 0.58;
            --randRotate: 148deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 3.3231828609849217vw;
            --randY: -21.542833287114703vh;
            --randScale: 0.92;
            --randRotate: 66deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 21.88810655096293vw;
            --randY: -40.32031223762207vh;
            --randScale: 0.93;
            --randRotate: 136deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -8.169333534187253vw;
            --randY: -27.664447348043424vh;
            --randScale: 0.77;
            --randRotate: 88deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -26.993243032717974vw;
            --randY: -26.806711016440943vh;
            --randScale: 0.53;
            --randRotate: 356deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 28.273368931986226vw;
            --randY: -27.80094453966828vh;
            --randScale: 0.86;
            --randRotate: 40deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 25.551040194691794vw;
            --randY: -33.26251981450936vh;
            --randScale: 0.59;
            --randRotate: 1deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 17.042714699149244vw;
            --randY: -25.582729763970107vh;
            --randScale: 0.85;
            --randRotate: 15deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 26.851613771726107vw;
            --randY: -20.51784608031879vh;
            --randScale: 0.56;
            --randRotate: 308deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 5.484060413428281vw;
            --randY: -23.740881972723727vh;
            --randScale: 0.8;
            --randRotate: 109deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -31.09176277552368vw;
            --randY: -26.707198907077952vh;
            --randScale: 0.83;
            --randRotate: 211deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -23.127574018148vw;
            --randY: -67.88664456550495vh;
            --randScale: 0.91;
            --randRotate: 25deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 20.91889940185571vw;
            --randY: -39.37771026370345vh;
            --randScale: 0.63;
            --randRotate: 151deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 21.404377316248983vw;
            --randY: -70.71379100357906vh;
            --randScale: 0.52;
            --randRotate: 336deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -24.7364562164746vw;
            --randY: -64.61039833093395vh;
            --randScale: 0.55;
            --randRotate: 135deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 13.800298189047247vw;
            --randY: -28.744607964211326vh;
            --randScale: 0.91;
            --randRotate: 236deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 26.599475054209037vw;
            --randY: -32.332172304019096vh;
            --randScale: 0.93;
            --randRotate: 66deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 26.50466787853209vw;
            --randY: -69.58236883113669vh;
            --randScale: 0.59;
            --randRotate: 116deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 26.03022517679561vw;
            --randY: -25.713828949235037vh;
            --randScale: 0.65;
            --randRotate: 106deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -17.18670462692036vw;
            --randY: -65.62950940151222vh;
            --randScale: 0.53;
            --randRotate: 83deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -36.18450023600541vw;
            --randY: -71.54723957073791vh;
            --randScale: 0.91;
            --randRotate: 185deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -36.20479660336326vw;
            --randY: -70.1732167689157vh;
            --randScale: 0.83;
            --randRotate: 185deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -35.435965613222955vw;
            --randY: -35.3634884300909vh;
            --randScale: 0.81;
            --randRotate: 25deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 22.742017968535365vw;
            --randY: -69.77033321445421vh;
            --randScale: 0.5;
            --randRotate: 41deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -21.49622046459725vw;
            --randY: -69.24598093214611vh;
            --randScale: 0.87;
            --randRotate: 236deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -23.57493662326671vw;
            --randY: -26.851249075288976vh;
            --randScale: 0.65;
            --randRotate: 195deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -18.26422533215748vw;
            --randY: -65.67198592929552vh;
            --randScale: 0.9;
            --randRotate: 144deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 21.142744143253992vw;
            --randY: -60.36458899289387vh;
            --randScale: 0.55;
            --randRotate: 133deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 24.82098741565413vw;
            --randY: -65.22480791816426vh;
            --randScale: 0.6;
            --randRotate: 105deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -13.832629168980581vw;
            --randY: -33.43391500799177vh;
            --randScale: 0.85;
            --randRotate: 272deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -12.82379749051281vw;
            --randY: -37.42979897332983vh;
            --randScale: 0.51;
            --randRotate: 315deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -28.768152416817916vw;
            --randY: -39.293743894938004vh;
            --randScale: 0.97;
            --randRotate: 23deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -30.89419227409975vw;
            --randY: -63.676689003401975vh;
            --randScale: 0.64;
            --randRotate: 355deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 27.399640626911534vw;
            --randY: -68.47986678021925vh;
            --randScale: 0.8;
            --randRotate: 126deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 19.243502962219708vw;
            --randY: -37.706523460551566vh;
            --randScale: 0.63;
            --randRotate: 203deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -18.86733323839462vw;
            --randY: -37.635098064328744vh;
            --randScale: 0.7;
            --randRotate: 28deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 17.002934654497352vw;
            --randY: -65.73175891130403vh;
            --randScale: 0.97;
            --randRotate: 354deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -39.34675840196482vw;
            --randY: -56.474056165572776vh;
            --randScale: 0.87;
            --randRotate: 296deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 27.774845012803894vw;
            --randY: -64.78785343988878vh;
            --randScale: 0.66;
            --randRotate: 142deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 6.791756221516465vw;
            --randY: -28.63026163205285vh;
            --randScale: 0.58;
            --randRotate: 15deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 25.845464889516293vw;
            --randY: -26.48924419212524vh;
            --randScale: 0.51;
            --randRotate: 53deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -36.35972480268539vw;
            --randY: -71.8176874867917vh;
            --randScale: 0.56;
            --randRotate: 52deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -22.55720484284469vw;
            --randY: -69.13550589207287vh;
            --randScale: 0.69;
            --randRotate: 176deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 21.81793598208526vw;
            --randY: -60.213197741585134vh;
            --randScale: 0.75;
            --randRotate: 148deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -32.69633930066844vw;
            --randY: -72.14787654123947vh;
            --randScale: 0.96;
            --randRotate: 168deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -32.55818078117314vw;
            --randY: -68.97269215927402vh;
            --randScale: 0.6;
            --randRotate: 15deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -35.48859816230892vw;
            --randY: -55.49146448314786vh;
            --randScale: 0.7;
            --randRotate: 70deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -37.10478938660029vw;
            --randY: -69.86384160895406vh;
            --randScale: 0.74;
            --randRotate: 157deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 12.08811945279642vw;
            --randY: -35.14060130164593vh;
            --randScale: 0.85;
            --randRotate: 294deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 34.02023705709651vw;
            --randY: -62.27589779738187vh;
            --randScale: 0.53;
            --randRotate: 212deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -34.37795347808146vw;
            --randY: -49.80303934187526vh;
            --randScale: 0.75;
            --randRotate: 311deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -13.100299731807795vw;
            --randY: -24.063277640735038vh;
            --randScale: 0.51;
            --randRotate: 109deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 41.026133085433656vw;
            --randY: -67.25996036165722vh;
            --randScale: 0.71;
            --randRotate: 107deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 32.6141270567629vw;
            --randY: -59.60288078749909vh;
            --randScale: 0.65;
            --randRotate: 260deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 27.562345216580425vw;
            --randY: -24.35560168263231vh;
            --randScale: 0.93;
            --randRotate: 257deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -27.83921658742603vw;
            --randY: -59.47251737331969vh;
            --randScale: 0.76;
            --randRotate: 315deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -13.50287550175426vw;
            --randY: -24.268454419941804vh;
            --randScale: 0.89;
            --randRotate: 114deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -16.51991832564412vw;
            --randY: -70.63541047969646vh;
            --randScale: 0.63;
            --randRotate: 154deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -36.96451861131757vw;
            --randY: -61.66957684453567vh;
            --randScale: 0.93;
            --randRotate: 41deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -13.268073018296668vw;
            --randY: -20.16002471277973vh;
            --randScale: 0.9;
            --randRotate: 163deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 29.207408301309655vw;
            --randY: -26.099831328254666vh;
            --randScale: 0.59;
            --randRotate: 229deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 7.153745762559403vw;
            --randY: -21.034232960043255vh;
            --randScale: 0.71;
            --randRotate: 301deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 19.640580677637985vw;
            --randY: -35.711347238419464vh;
            --randScale: 0.96;
            --randRotate: 215deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 35.19594602328857vw;
            --randY: -62.22923344828028vh;
            --randScale: 0.84;
            --randRotate: 347deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -26.10966163113071vw;
            --randY: -20.473219942266937vh;
            --randScale: 0.56;
            --randRotate: 74deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 14.382512077440097vw;
            --randY: -26.705739840388816vh;
            --randScale: 0.81;
            --randRotate: 211deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -31.855331079502356vw;
            --randY: -30.369925055693997vh;
            --randScale: 0.92;
            --randRotate: 300deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 35.1084392362809vw;
            --randY: -57.3139219622012vh;
            --randScale: 0.95;
            --randRotate: 261deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -23.841951916332114vw;
            --randY: -32.00558027386971vh;
            --randScale: 0.79;
            --randRotate: 103deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 20.151501603622023vw;
            --randY: -60.073618913481155vh;
            --randScale: 0.59;
            --randRotate: 79deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -6.2059723430530696vw;
            --randY: -22.46964235695397vh;
            --randScale: 0.87;
            --randRotate: 283deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 25.18394843339516vw;
            --randY: -26.944533638517626vh;
            --randScale: 0.9;
            --randRotate: 334deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -11.20842348964257vw;
            --randY: -33.80017534598623vh;
            --randScale: 0.69;
            --randRotate: 59deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 22.839337438862458vw;
            --randY: -39.08428924343856vh;
            --randScale: 0.51;
            --randRotate: 173deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -32.43462194015314vw;
            --randY: -26.909558307819495vh;
            --randScale: 0.67;
            --randRotate: 204deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 24.545241562213334vw;
            --randY: -23.452913986109294vh;
            --randScale: 0.88;
            --randRotate: 200deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 29.25605964455127vw;
            --randY: -66.56588314549859vh;
            --randScale: 0.84;
            --randRotate: 299deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 34.75100560242505vw;
            --randY: -58.45647571347881vh;
            --randScale: 0.97;
            --randRotate: 279deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -42.02414466626665vw;
            --randY: -64.41594912782129vh;
            --randScale: 0.5;
            --randRotate: 326deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -13.274282138967905vw;
            --randY: -28.033505032897807vh;
            --randScale: 0.99;
            --randRotate: 245deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -18.078325611668824vw;
            --randY: -26.457725451391426vh;
            --randScale: 0.72;
            --randRotate: 355deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -32.59734573877317vw;
            --randY: -25.477796546460212vh;
            --randScale: 0.54;
            --randRotate: 37deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -38.481389543819255vw;
            --randY: -62.44275085765993vh;
            --randScale: 0.62;
            --randRotate: 346deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -26.85218461887393vw;
            --randY: -39.517968216873015vh;
            --randScale: 0.6;
            --randRotate: 43deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 21.379185923621606vw;
            --randY: -34.65831560821131vh;
            --randScale: 0.99;
            --randRotate: 119deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -35.252038211518745vw;
            --randY: -59.61907283611978vh;
            --randScale: 0.91;
            --randRotate: 182deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -43.76502418599575vw;
            --randY: -73.0917386067955vh;
            --randScale: 0.65;
            --randRotate: 343deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -35.85261454242274vw;
            --randY: -50.36334355214287vh;
            --randScale: 0.65;
            --randRotate: 162deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -24.791930054264032vw;
            --randY: -65.70564312359309vh;
            --randScale: 0.88;
            --randRotate: 114deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 20.318939396938646vw;
            --randY: -73.42282142976471vh;
            --randScale: 0.93;
            --randRotate: 210deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 17.6105638334771vw;
            --randY: -30.639482553168946vh;
            --randScale: 0.76;
            --randRotate: 40deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -13.395560764162525vw;
            --randY: -34.14638314233605vh;
            --randScale: 0.62;
            --randRotate: 261deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -28.083899295373026vw;
            --randY: -35.11520117282592vh;
            --randScale: 0.65;
            --randRotate: 7deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 28.46893929103915vw;
            --randY: -39.08742608637408vh;
            --randScale: 0.78;
            --randRotate: 311deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 34.81159852714161vw;
            --randY: -54.722577714980304vh;
            --randScale: 0.61;
            --randRotate: 282deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -33.483004123249vw;
            --randY: -36.42021885192197vh;
            --randScale: 0.9;
            --randRotate: 310deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 19.74259565282341vw;
            --randY: -68.57294033012627vh;
            --randScale: 0.82;
            --randRotate: 41deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -20.429571750546003vw;
            --randY: -59.70493955734986vh;
            --randScale: 0.5;
            --randRotate: 273deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -29.614822474518498vw;
            --randY: -71.2020012834185vh;
            --randScale: 0.95;
            --randRotate: 316deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -0.7425358879175477vw;
            --randY: -24.739653898806907vh;
            --randScale: 0.75;
            --randRotate: 137deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -22.668774662829282vw;
            --randY: -30.050568676795947vh;
            --randScale: 0.66;
            --randRotate: 245deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -13.385942747894973vw;
            --randY: -37.19180434777445vh;
            --randScale: 0.72;
            --randRotate: 199deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -36.12321038416295vw;
            --randY: -64.69175070715829vh;
            --randScale: 0.55;
            --randRotate: 104deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -41.99684656186551vw;
            --randY: -73.47006893205335vh;
            --randScale: 0.72;
            --randRotate: 51deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 17.606031590390828vw;
            --randY: -27.086338966404952vh;
            --randScale: 0.79;
            --randRotate: 145deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -27.124029125387892vw;
            --randY: -66.16880677049076vh;
            --randScale: 0.56;
            --randRotate: 172deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -13.595294490256137vw;
            --randY: -30.780191325388145vh;
            --randScale: 0.82;
            --randRotate: 315deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -28.18858351811333vw;
            --randY: -71.39733152912666vh;
            --randScale: 0.66;
            --randRotate: 24deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -34.50759716075795vw;
            --randY: -54.02323564380791vh;
            --randScale: 0.92;
            --randRotate: 355deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -24.386123729425258vw;
            --randY: -73.54934210938693vh;
            --randScale: 0.81;
            --randRotate: 265deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 36.62023748012926vw;
            --randY: -55.09197051914781vh;
            --randScale: 0.72;
            --randRotate: 201deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -17.307152461880214vw;
            --randY: -27.99962681573183vh;
            --randScale: 0.57;
            --randRotate: 107deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 20.683215256394135vw;
            --randY: -38.823230364020446vh;
            --randScale: 0.93;
            --randRotate: 209deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -19.97026042751957vw;
            --randY: -63.66106182406306vh;
            --randScale: 0.57;
            --randRotate: 293deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 33.93115129725342vw;
            --randY: -40.13571006518448vh;
            --randScale: 0.92;
            --randRotate: 41deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 36.032868634093035vw;
            --randY: -59.86593179582278vh;
            --randScale: 0.58;
            --randRotate: 303deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 28.99806950086463vw;
            --randY: -29.338908004791236vh;
            --randScale: 0.53;
            --randRotate: 166deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -33.623461762511965vw;
            --randY: -28.84320757476901vh;
            --randScale: 0.69;
            --randRotate: 177deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -13.598682322188196vw;
            --randY: -23.110799268801927vh;
            --randScale: 0.97;
            --randRotate: 252deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -25.605493937422064vw;
            --randY: -66.46932545550982vh;
            --randScale: 0.52;
            --randRotate: 357deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 30.762338475855728vw;
            --randY: -35.35561132161406vh;
            --randScale: 0.68;
            --randRotate: 219deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 10.886296597671354vw;
            --randY: -25.927416592181388vh;
            --randScale: 0.79;
            --randRotate: 229deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -16.123052061786147vw;
            --randY: -23.159751621537495vh;
            --randScale: 0.53;
            --randRotate: 85deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -27.448905054108486vw;
            --randY: -73.41688129680367vh;
            --randScale: 0.86;
            --randRotate: 138deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -24.70587960585369vw;
            --randY: -60.33434548309338vh;
            --randScale: 0.71;
            --randRotate: 357deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -38.8006740546909vw;
            --randY: -60.404318383650015vh;
            --randScale: 0.62;
            --randRotate: 116deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 34.68880285529042vw;
            --randY: -61.913801174435676vh;
            --randScale: 0.62;
            --randRotate: 40deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 13.157525035687215vw;
            --randY: -35.361575806220074vh;
            --randScale: 0.53;
            --randRotate: 124deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -30.967373736378747vw;
            --randY: -31.2395949257797vh;
            --randScale: 0.8;
            --randRotate: 110deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 29.085530231642466vw;
            --randY: -24.56373846334236vh;
            --randScale: 0.53;
            --randRotate: 236deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 31.997251730228598vw;
            --randY: -58.809805112306776vh;
            --randScale: 0.79;
            --randRotate: 233deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -20.010987658836086vw;
            --randY: -21.179527284142523vh;
            --randScale: 0.88;
            --randRotate: 275deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 26.68269069271274vw;
            --randY: -29.27246993316095vh;
            --randScale: 0.67;
            --randRotate: 215deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 20.97637539025692vw;
            --randY: -38.36054883649294vh;
            --randScale: 0.62;
            --randRotate: 76deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -32.27158666978163vw;
            --randY: -71.32228376055001vh;
            --randScale: 0.73;
            --randRotate: 161deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -32.94597635041705vw;
            --randY: -34.22202738947979vh;
            --randScale: 0.58;
            --randRotate: 297deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -25.55618117085463vw;
            --randY: -22.5540457670635vh;
            --randScale: 0.54;
            --randRotate: 206deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 38.87523169095613vw;
            --randY: -58.020511576671716vh;
            --randScale: 0.62;
            --randRotate: 225deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -16.359059363973813vw;
            --randY: -66.47343533271203vh;
            --randScale: 0.94;
            --randRotate: 359deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 11.092996302330313vw;
            --randY: -23.050454286210027vh;
            --randScale: 0.86;
            --randRotate: 143deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 20.57706876234471vw;
            --randY: -61.092592271366875vh;
            --randScale: 0.69;
            --randRotate: 191deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -24.949376610679597vw;
            --randY: -23.516309074138263vh;
            --randScale: 1;
            --randRotate: 68deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -8.013262186240212vw;
            --randY: -25.354367303652808vh;
            --randScale: 0.84;
            --randRotate: 35deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -34.14360518609389vw;
            --randY: -53.12138338330483vh;
            --randScale: 0.81;
            --randRotate: 43deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -19.640233254438087vw;
            --randY: -37.069240927692015vh;
            --randScale: 0.72;
            --randRotate: 42deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 15.49565695467507vw;
            --randY: -59.49386242249173vh;
            --randScale: 0.5;
            --randRotate: 91deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -34.55823306000269vw;
            --randY: -56.44990621850181vh;
            --randScale: 0.58;
            --randRotate: 335deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -34.51614512980539vw;
            --randY: -60.029915739651244vh;
            --randScale: 0.65;
            --randRotate: 28deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 22.842024618751623vw;
            --randY: -26.303946873233073vh;
            --randScale: 0.65;
            --randRotate: 206deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 33.7854196554259vw;
            --randY: -66.49059808636682vh;
            --randScale: 0.62;
            --randRotate: 255deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -22.918052433783622vw;
            --randY: -32.97272342209112vh;
            --randScale: 0.89;
            --randRotate: 207deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -19.125865637160743vw;
            --randY: -29.29308738743042vh;
            --randScale: 0.66;
            --randRotate: 189deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 5.631496155758818vw;
            --randY: -24.6315802955189vh;
            --randScale: 0.56;
            --randRotate: 96deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -17.392829449054247vw;
            --randY: -65.42653653666207vh;
            --randScale: 0.95;
            --randRotate: 347deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 16.369720991005593vw;
            --randY: -33.57529691273014vh;
            --randScale: 0.58;
            --randRotate: 353deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -22.20821680773668vw;
            --randY: -59.802379913138836vh;
            --randScale: 0.78;
            --randRotate: 229deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 25.114726655697723vw;
            --randY: -70.64986243267224vh;
            --randScale: 0.5;
            --randRotate: 295deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -35.17355967953526vw;
            --randY: -35.70297583387672vh;
            --randScale: 0.59;
            --randRotate: 45deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 31.221531851557543vw;
            --randY: -69.01593824664134vh;
            --randScale: 0.89;
            --randRotate: 235deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -14.95811569724723vw;
            --randY: -26.954763953735636vh;
            --randScale: 0.94;
            --randRotate: 83deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -15.720146168932267vw;
            --randY: -72.67304462239936vh;
            --randScale: 0.88;
            --randRotate: 251deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -41.456762510182664vw;
            --randY: -65.99004408878156vh;
            --randScale: 0.9;
            --randRotate: 194deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 30.232685739259566vw;
            --randY: -70.65837137964368vh;
            --randScale: 0.58;
            --randRotate: 101deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 10.296321213769247vw;
            --randY: -29.521938242604406vh;
            --randScale: 0.68;
            --randRotate: 241deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -28.517874923267783vw;
            --randY: -64.65137125957853vh;
            --randScale: 0.63;
            --randRotate: 222deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 18.912872141369633vw;
            --randY: -28.024560260374585vh;
            --randScale: 0.85;
            --randRotate: 246deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -5.018381910814853vw;
            --randY: -23.46152677613813vh;
            --randScale: 0.91;
            --randRotate: 215deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 13.485750750685277vw;
            --randY: -34.08877591652197vh;
            --randScale: 0.91;
            --randRotate: 13deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 27.333527149507205vw;
            --randY: -64.11798257055659vh;
            --randScale: 0.95;
            --randRotate: 254deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 24.80589895968386vw;
            --randY: -69.58408222441881vh;
            --randScale: 0.56;
            --randRotate: 189deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -18.214767364704887vw;
            --randY: -69.50537868068352vh;
            --randScale: 0.74;
            --randRotate: 266deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 0.6589803350513606vw;
            --randY: -19.83279055842064vh;
            --randScale: 0.69;
            --randRotate: 217deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 37.50938350442698vw;
            --randY: -54.865570620880334vh;
            --randScale: 0.71;
            --randRotate: 321deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -7.676152532013994vw;
            --randY: -23.367978884166703vh;
            --randScale: 0.99;
            --randRotate: 315deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -20.425841696543333vw;
            --randY: -65.7041541535196vh;
            --randScale: 0.6;
            --randRotate: 102deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 40.97517224067711vw;
            --randY: -71.35948049746708vh;
            --randScale: 0.8;
            --randRotate: 130deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 35.460526783936544vw;
            --randY: -49.52463022402669vh;
            --randScale: 0.55;
            --randRotate: 78deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -33.122702166667vw;
            --randY: -40.20051147308297vh;
            --randScale: 0.9;
            --randRotate: 165deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 27.14925630794498vw;
            --randY: -21.101215633287325vh;
            --randScale: 0.67;
            --randRotate: 54deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -30.67639216786775vw;
            --randY: -37.610163963398534vh;
            --randScale: 0.66;
            --randRotate: 99deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -14.901300343240287vw;
            --randY: -38.952532691734866vh;
            --randScale: 0.89;
            --randRotate: 300deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -31.783030019012525vw;
            --randY: -37.004383165606036vh;
            --randScale: 0.61;
            --randRotate: 165deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 20.394357430535422vw;
            --randY: -21.199261733211443vh;
            --randScale: 0.89;
            --randRotate: 45deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -36.12483988546826vw;
            --randY: -65.78412856148314vh;
            --randScale: 1;
            --randRotate: 101deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -31.18236179026834vw;
            --randY: -62.94681698237359vh;
            --randScale: 0.61;
            --randRotate: 272deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -31.93107275236329vw;
            --randY: -67.16686696636759vh;
            --randScale: 0.7;
            --randRotate: 255deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 31.02771259170187vw;
            --randY: -38.154623569472456vh;
            --randScale: 0.84;
            --randRotate: 121deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -29.62185594266944vw;
            --randY: -19.68856205410006vh;
            --randScale: 0.73;
            --randRotate: 5deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -15.397353241986963vw;
            --randY: -37.51978676455683vh;
            --randScale: 0.98;
            --randRotate: 163deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 18.03714150276818vw;
            --randY: -36.983019906867455vh;
            --randScale: 0.9;
            --randRotate: 169deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -5.5009033718228295vw;
            --randY: -23.81245144833683vh;
            --randScale: 0.94;
            --randRotate: 61deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -20.693292698664134vw;
            --randY: -21.739922186406034vh;
            --randScale: 0.87;
            --randRotate: 9deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -24.320268907690455vw;
            --randY: -65.81014316977962vh;
            --randScale: 0.72;
            --randRotate: 240deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -36.057017625563525vw;
            --randY: -53.79158963078589vh;
            --randScale: 0.62;
            --randRotate: 223deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -36.88569656746776vw;
            --randY: -72.37948209370104vh;
            --randScale: 0.88;
            --randRotate: 333deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -29.010802991189255vw;
            --randY: -34.20560434346014vh;
            --randScale: 0.65;
            --randRotate: 120deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -22.785431712543726vw;
            --randY: -21.91820538466311vh;
            --randScale: 0.51;
            --randRotate: 281deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -39.191563527067345vw;
            --randY: -62.556745977279334vh;
            --randScale: 0.95;
            --randRotate: 356deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 12.52450987336178vw;
            --randY: -33.06116219367637vh;
            --randScale: 0.7;
            --randRotate: 349deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 11.494710815403764vw;
            --randY: -34.79939217680845vh;
            --randScale: 0.72;
            --randRotate: 324deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -21.092657243877543vw;
            --randY: -71.32128221602771vh;
            --randScale: 0.75;
            --randRotate: 213deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 27.945866346386367vw;
            --randY: -68.67144103674346vh;
            --randScale: 0.56;
            --randRotate: 75deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 32.77441881622349vw;
            --randY: -61.82216750689435vh;
            --randScale: 0.81;
            --randRotate: 63deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 29.40984493330727vw;
            --randY: -26.390404120483964vh;
            --randScale: 0.93;
            --randRotate: 0deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -35.056133405782106vw;
            --randY: -49.63578040858365vh;
            --randScale: 0.78;
            --randRotate: 236deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 36.29607711548451vw;
            --randY: -57.89575466205896vh;
            --randScale: 0.63;
            --randRotate: 142deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 24.782582737704246vw;
            --randY: -31.590564663001146vh;
            --randScale: 0.92;
            --randRotate: 315deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -42.67952239515844vw;
            --randY: -71.84354388612815vh;
            --randScale: 0.83;
            --randRotate: 5deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -16.907194366657883vw;
            --randY: -40.14996493438916vh;
            --randScale: 0.78;
            --randRotate: 222deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -29.984216372059368vw;
            --randY: -41.07737216413159vh;
            --randScale: 0.88;
            --randRotate: 279deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -26.54291588278066vw;
            --randY: -34.72380782086731vh;
            --randScale: 0.91;
            --randRotate: 228deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -23.46372028930672vw;
            --randY: -23.259338511351118vh;
            --randScale: 0.66;
            --randRotate: 112deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -34.20935145859323vw;
            --randY: -41.98417683291575vh;
            --randScale: 0.98;
            --randRotate: 22deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 16.47146732523963vw;
            --randY: -37.57225043052195vh;
            --randScale: 0.77;
            --randRotate: 167deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 17.860382825240336vw;
            --randY: -26.958385487769803vh;
            --randScale: 0.7;
            --randRotate: 352deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -40.53372468170724vw;
            --randY: -56.12661257839973vh;
            --randScale: 0.66;
            --randRotate: 232deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -19.731100340153972vw;
            --randY: -68.32793205357213vh;
            --randScale: 0.96;
            --randRotate: 58deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 36.22477256456324vw;
            --randY: -71.02860724353647vh;
            --randScale: 0.89;
            --randRotate: 248deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 4.347966848550854vw;
            --randY: -20.17200226937706vh;
            --randScale: 0.52;
            --randRotate: 91deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -6.972299224048605vw;
            --randY: -25.85858614076166vh;
            --randScale: 0.96;
            --randRotate: 99deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -17.35209262930057vw;
            --randY: -62.335891003512266vh;
            --randScale: 0.9;
            --randRotate: 14deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -11.39456152486715vw;
            --randY: -23.456481035267473vh;
            --randScale: 0.71;
            --randRotate: 27deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -18.714022877531058vw;
            --randY: -68.22098436372823vh;
            --randScale: 0.6;
            --randRotate: 324deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -33.77514064540898vw;
            --randY: -27.96528017424629vh;
            --randScale: 0.52;
            --randRotate: 344deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -23.499430041238824vw;
            --randY: -68.8042758404559vh;
            --randScale: 0.65;
            --randRotate: 342deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -23.571183188119814vw;
            --randY: -72.88511460131666vh;
            --randScale: 0.65;
            --randRotate: 145deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 0.9940109433070461vw;
            --randY: -24.20997434069176vh;
            --randScale: 0.68;
            --randRotate: 207deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 2.7592460294088212vw;
            --randY: -22.27548275339359vh;
            --randScale: 0.71;
            --randRotate: 297deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -26.75720668878212vw;
            --randY: -29.814550113780115vh;
            --randScale: 0.83;
            --randRotate: 31deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -24.019975512621695vw;
            --randY: -70.50524123391735vh;
            --randScale: 0.71;
            --randRotate: 23deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -20.087268696915082vw;
            --randY: -60.87951030611545vh;
            --randScale: 0.7;
            --randRotate: 92deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -17.30620030801218vw;
            --randY: -69.38467101930183vh;
            --randScale: 0.88;
            --randRotate: 247deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 31.366484308539327vw;
            --randY: -28.336181375975244vh;
            --randScale: 0.65;
            --randRotate: 346deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 12.015877420834208vw;
            --randY: -32.514339016125476vh;
            --randScale: 0.56;
            --randRotate: 20deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 28.050349268994907vw;
            --randY: -28.627842707775542vh;
            --randScale: 0.96;
            --randRotate: 285deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -22.749387999864233vw;
            --randY: -37.861559091876785vh;
            --randScale: 0.87;
            --randRotate: 305deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -32.02614430786834vw;
            --randY: -72.37757816063404vh;
            --randScale: 0.61;
            --randRotate: 69deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 5.707130892605974vw;
            --randY: -25.762566010737032vh;
            --randScale: 0.58;
            --randRotate: 340deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -26.177955239525865vw;
            --randY: -70.53012019640343vh;
            --randScale: 0.81;
            --randRotate: 171deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -26.15500710943448vw;
            --randY: -26.115469610894863vh;
            --randScale: 0.83;
            --randRotate: 359deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -31.403833425003146vw;
            --randY: -26.9483308448672vh;
            --randScale: 0.64;
            --randRotate: 311deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -35.86606909515544vw;
            --randY: -40.447205209001865vh;
            --randScale: 0.59;
            --randRotate: 270deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 7.52565002245484vw;
            --randY: -21.416628298948595vh;
            --randScale: 0.85;
            --randRotate: 55deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -25.323172951393325vw;
            --randY: -22.34123914789248vh;
            --randScale: 0.94;
            --randRotate: 39deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 25.358145176213583vw;
            --randY: -71.8289982196734vh;
            --randScale: 0.69;
            --randRotate: 148deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -44.23998455558915vw;
            --randY: -71.98577084697575vh;
            --randScale: 0.86;
            --randRotate: 27deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 16.539359756680454vw;
            --randY: -25.64040733123518vh;
            --randScale: 0.5;
            --randRotate: 263deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -42.81822631816128vw;
            --randY: -72.63191241109588vh;
            --randScale: 0.72;
            --randRotate: 254deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 10.24327297697183vw;
            --randY: -29.617377686976965vh;
            --randScale: 0.83;
            --randRotate: 341deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -21.461534683943363vw;
            --randY: -64.22303242595271vh;
            --randScale: 0.63;
            --randRotate: 269deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -29.000670182309452vw;
            --randY: -72.90495886719503vh;
            --randScale: 0.51;
            --randRotate: 308deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -9.85716763958078vw;
            --randY: -24.92707782979997vh;
            --randScale: 0.52;
            --randRotate: 217deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -24.60469197460824vw;
            --randY: -24.10319924861801vh;
            --randScale: 0.88;
            --randRotate: 90deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -3.974957260744503vw;
            --randY: -22.27413076496842vh;
            --randScale: 0.77;
            --randRotate: 196deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 23.62989020614137vw;
            --randY: -34.79663400288253vh;
            --randScale: 0.83;
            --randRotate: 170deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -2.1203031205179173vw;
            --randY: -23.07674582539056vh;
            --randScale: 0.77;
            --randRotate: 87deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 37.48479375325529vw;
            --randY: -68.0814420990171vh;
            --randScale: 0.96;
            --randRotate: 340deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 38.63538479592104vw;
            --randY: -72.87457779759995vh;
            --randScale: 0.62;
            --randRotate: 219deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -20.154262502004606vw;
            --randY: -36.62274528347409vh;
            --randScale: 0.87;
            --randRotate: 194deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -26.458878987250944vw;
            --randY: -69.14425118262047vh;
            --randScale: 0.94;
            --randRotate: 339deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 12.437797674439196vw;
            --randY: -33.30226639006435vh;
            --randScale: 0.57;
            --randRotate: 58deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -32.32561199621415vw;
            --randY: -37.47255038034447vh;
            --randScale: 0.79;
            --randRotate: 317deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -41.761587453941964vw;
            --randY: -69.5112115585386vh;
            --randScale: 0.77;
            --randRotate: 287deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 39.320595741841274vw;
            --randY: -71.50910643973994vh;
            --randScale: 0.66;
            --randRotate: 328deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 28.247437939585794vw;
            --randY: -69.89074155801971vh;
            --randScale: 0.71;
            --randRotate: 16deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -28.083439656201882vw;
            --randY: -67.08813688531819vh;
            --randScale: 0.94;
            --randRotate: 118deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -25.746777661614615vw;
            --randY: -29.6417064697291vh;
            --randScale: 0.61;
            --randRotate: 275deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -15.271489174388783vw;
            --randY: -40.60622437682577vh;
            --randScale: 0.64;
            --randRotate: 329deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -6.651701907721645vw;
            --randY: -19.82829227322391vh;
            --randScale: 0.79;
            --randRotate: 47deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -42.72093453178436vw;
            --randY: -68.625093577391vh;
            --randScale: 0.68;
            --randRotate: 339deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -22.34569279676981vw;
            --randY: -32.481671165736415vh;
            --randScale: 0.7;
            --randRotate: 59deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 8.041979910591792vw;
            --randY: -26.079958273008145vh;
            --randScale: 0.86;
            --randRotate: 254deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -26.337576566125097vw;
            --randY: -61.07849716997531vh;
            --randScale: 0.83;
            --randRotate: 3deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 37.54120223764323vw;
            --randY: -71.34446301037138vh;
            --randScale: 0.66;
            --randRotate: 297deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 24.49726887006129vw;
            --randY: -35.28454792874291vh;
            --randScale: 0.94;
            --randRotate: 251deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -21.899258009511534vw;
            --randY: -59.61862118734149vh;
            --randScale: 0.78;
            --randRotate: 84deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -15.246749480707386vw;
            --randY: -40.58263315821202vh;
            --randScale: 0.81;
            --randRotate: 120deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 24.843493180280404vw;
            --randY: -20.417419355340556vh;
            --randScale: 0.86;
            --randRotate: 78deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 39.57195775843758vw;
            --randY: -60.65072163512581vh;
            --randScale: 0.7;
            --randRotate: 208deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 20.684205468774806vw;
            --randY: -30.306240417304338vh;
            --randScale: 1;
            --randRotate: 118deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 22.62939998817184vw;
            --randY: -29.512481603886442vh;
            --randScale: 0.7;
            --randRotate: 264deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 27.31423586984529vw;
            --randY: -60.86600686468087vh;
            --randScale: 0.75;
            --randRotate: 195deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 36.09203686240407vw;
            --randY: -70.46074108154441vh;
            --randScale: 1;
            --randRotate: 170deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -3.8662191412445424vw;
            --randY: -21.010819157872348vh;
            --randScale: 0.73;
            --randRotate: 252deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 22.96469801116774vw;
            --randY: -68.72341216828855vh;
            --randScale: 0.84;
            --randRotate: 273deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -19.729494517031654vw;
            --randY: -59.43994861187525vh;
            --randScale: 0.53;
            --randRotate: 50deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 24.95729794410417vw;
            --randY: -65.53982666211142vh;
            --randScale: 0.63;
            --randRotate: 28deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -40.96212797431544vw;
            --randY: -66.96690858636873vh;
            --randScale: 0.71;
            --randRotate: 112deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -17.402933861998825vw;
            --randY: -62.87037444929364vh;
            --randScale: 0.58;
            --randRotate: 12deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -5.301196781324371vw;
            --randY: -24.137775875194677vh;
            --randScale: 0.57;
            --randRotate: 222deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 20.43305095015316vw;
            --randY: -36.88317578179814vh;
            --randScale: 0.51;
            --randRotate: 330deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -41.23390572730139vw;
            --randY: -71.68111362606993vh;
            --randScale: 0.83;
            --randRotate: 21deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 2.8833183224422214vw;
            --randY: -23.55575071500094vh;
            --randScale: 0.94;
            --randRotate: 258deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 29.54639470112626vw;
            --randY: -26.941351135305354vh;
            --randScale: 0.66;
            --randRotate: 34deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -32.59030292461125vw;
            --randY: -64.17337741968416vh;
            --randScale: 0.83;
            --randRotate: 341deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 18.94933875132581vw;
            --randY: -36.06754797917062vh;
            --randScale: 0.92;
            --randRotate: 87deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -30.029098315139557vw;
            --randY: -60.787973105434446vh;
            --randScale: 0.62;
            --randRotate: 104deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -30.747246163454278vw;
            --randY: -19.712659371481962vh;
            --randScale: 0.61;
            --randRotate: 267deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 33.50936011535548vw;
            --randY: -71.32174377917974vh;
            --randScale: 0.69;
            --randRotate: 308deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 21.879705857759404vw;
            --randY: -40.46150037260217vh;
            --randScale: 0.54;
            --randRotate: 287deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -26.86955607502195vw;
            --randY: -63.271964304597915vh;
            --randScale: 0.72;
            --randRotate: 328deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -15.636821635803202vw;
            --randY: -38.272492444006765vh;
            --randScale: 0.71;
            --randRotate: 76deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 38.03181342609476vw;
            --randY: -63.94330818327521vh;
            --randScale: 0.84;
            --randRotate: 172deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -43.210759098602395vw;
            --randY: -73.13974161386103vh;
            --randScale: 0.92;
            --randRotate: 215deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 28.947641948013896vw;
            --randY: -67.34514777471847vh;
            --randScale: 0.57;
            --randRotate: 276deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -27.46419841009544vw;
            --randY: -34.25302522663604vh;
            --randScale: 0.96;
            --randRotate: 304deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -35.28068522087131vw;
            --randY: -35.31811224742553vh;
            --randScale: 0.64;
            --randRotate: 245deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 24.75980949914461vw;
            --randY: -71.61324255313413vh;
            --randScale: 0.75;
            --randRotate: 192deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -16.07827310842518vw;
            --randY: -25.59903953073656vh;
            --randScale: 0.85;
            --randRotate: 78deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 28.516646427844464vw;
            --randY: -73.4217617136044vh;
            --randScale: 0.66;
            --randRotate: 129deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 37.45975787543523vw;
            --randY: -52.03061292639368vh;
            --randScale: 0.69;
            --randRotate: 19deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -28.96593640406586vw;
            --randY: -34.437756734247984vh;
            --randScale: 0.53;
            --randRotate: 293deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -16.998323769400514vw;
            --randY: -65.77145840305022vh;
            --randScale: 0.98;
            --randRotate: 131deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: -39.318702368886484vw;
            --randY: -72.51479266003504vh;
            --randScale: 0.64;
            --randRotate: 121deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 18.318409015569188vw;
            --randY: -36.520143199760604vh;
            --randScale: 0.73;
            --randRotate: 112deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 34.05714751499886vw;
            --randY: -53.71707040633649vh;
            --randScale: 0.85;
            --randRotate: 225deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 29.178677958663513vw;
            --randY: -28.860836433615944vh;
            --randScale: 0.81;
            --randRotate: 34deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 34.27672774125159vw;
            --randY: -54.44799980928361vh;
            --randScale: 0.89;
            --randRotate: 241deg;
          "
        ></div>
        <div
          class="Hero_burstImage__izql7"
          style="
            --randX: 11.301112578419946vw;
            --randY: -28.346254826445232vh;
            --randScale: 0.71;
            --randRotate: 294deg;
          "
        ></div>
      </div>
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
  background-color: rgba(38, 38, 38, 1); /* 初始背景色 */
  background-color: rgba(38, 38, 38, 0.8); /* 滾動時背景色 */
}

@media (min-width: 1024px) {
  .Hero_container {
    height: 90vh;
  }
}
.Hero_burstImage__izql7 {
  position: absolute;
  top: 100%;
  left: 50%;
  background-image: url('https://www.anxiousgeneration.com/smile.webp');
  background-size: cover;
  opacity: 0;
  animation: Hero_burstOut__ttAfn 0.5s ease-out 2s forwards;
  z-index: 1;
  height: 24px;
  width: 24px;
}
@media (min-width: 1024px) {
  .Hero_burstImage__izql7 {
    height: 48px;
    width: 48px;
  }
}
</style>
