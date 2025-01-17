<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const headerContainer = ref(null)
const dropdownVisible = ref(false)

const handleScroll = () => {
  const scrollTop = window.scrollY
  const maxScroll = 500 // 最大滾動距離
  const opacity = Math.min(1, scrollTop / maxScroll)
  const windowWidth = window.innerWidth

  if (headerContainer.value) {
    if (windowWidth >= 1440) {
      headerContainer.value.style.backgroundColor = `rgba(38, 38, 38, ${opacity})`
    } else if (windowWidth < 768) {
      headerContainer.value.style.backgroundColor = 'black'
    }
  }
}

const toggleDropdown = () => {
  dropdownVisible.value = !dropdownVisible.value
}

const handleClickOutside = (event) => {
  if (headerContainer.value && !headerContainer.value.contains(event.target)) {
    dropdownVisible.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
})
const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

const navigation = [
  { name: '背景說明', to: '/aboutus', current: false },
  { name: '有關書', to: '/aboutbook', current: false },
  { name: '延伸閱讀', to: '/research', current: false },
  { name: '資源連結', to: '/resource', current: false },
]
</script>
<template>
  <header
    ref="headerContainer"
    class="py-2 lg:py-5 mx-auto flex flex-row justify-between sticky top-0 z-50 w-ful bg-black"
  >
    <div class="flex w-full items-center justify-between px-2 xs:px-4 lg:px-4 gap-4 lg:gap-8">
      <a href="/" aria-label="Home" class="text-white font-black text-sm md:text-base">
        <span class="sr-only hidden">The Anxious Generation</span>
        Future Together 我們一起行動
      </a>
      <div class="flex justify-between items-center gap-3 xs:gap-4">
        <div class="lg:flex justify-between items-center gap-3 xs:gap-4 hidden">
          <ul class="justify-between lg:flex gap-6">
            <li class="text-white hover:text-yellow" v-for="item in navigation" :key="item.name">
              <router-link :to="item.to" :aria-current="item.current ? 'page' : undefined">{{
                item.name
              }}</router-link>
            </li>
          </ul>
        </div>
        <div class="lg:relative inline-block text-left">
          <button
            aria-expanded="false"
            aria-controls="dropdown-menu"
            class="min-w-[80px] xxs:min-w-[115px] inline-flex justify-between items-center px-2 py-3 lg:p-2 text-xs xxs:text-sm font-medium text-black bg-white rounded-md hover:bg-yellow gap-1 xs:gap-2"
            @click="toggleDropdown"
          >
            採取行動
            <div :style="{ transform: dropdownVisible ? 'rotate(180deg)' : 'none' }">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" fill="none">
                <path
                  stroke="#111"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6 6-6"
                ></path>
              </svg>
            </div>
          </button>
          <div
            id="dropdown-menu"
            class="z-[999999] p-4 lg:origin-top-right absolute right-0 mt-2 w-full lg:w-[600px] lg:rounded-md shadow-lg bg-yellow text-black ring-1 ring-black ring-opacity-5 focus:outline-none"
            tabindex="-1"
            role="menu"
            aria-orientation="vertical"
            :style="{
              opacity: dropdownVisible ? 1 : 0,
              transform: dropdownVisible ? 'scale(1)' : 'scale(0.95)',
              display: dropdownVisible ? 'block' : 'none',
            }"
          >
            <div class="py-1 grid lg:grid-cols-2 gap-4 p-4">
              <div class="space-y-2">
                <p class="font-bold">How can we....</p>
                <a
                  class="flex items-center p-2 text-sm text-black hover:bg-gray-100"
                  role="menuitem"
                  tabindex="0"
                  href="/phone-free-schools"
                  ><svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="mr-2 h-5 w-5"
                  >
                    <path
                      d="M17.2 5v8.61l2 2V3c0-1.1-.9-2-2-2h-10c-.71 0-1.33.37-1.68.93L8.59 5h8.61zM1.69 3.76L5.2 7.27V21c0 1.1.9 2 2 2h10c1.02 0 1.85-.77 1.98-1.75l1.72 1.72 1.41-1.41L3.1 2.35 1.69 3.76zM7.2 9.27L16.93 19H7.2V9.27z"
                      fill="#000"
                    ></path></svg
                  >How can we make schools phone-free?</a
                >
              </div>
              <div class="space-y-2">
                <p class="font-bold">Actions for ...</p>
                <a
                  class="flex p-2 text-sm text-black hover:bg-gray-100"
                  role="menuitem"
                  tabindex="0"
                  href="/take-action#parents"
                  ><svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="mr-2 h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 010-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      fill="#111"
                    ></path></svg
                  >Parents</a
                ><a
                  class="flex p-2 text-sm text-black hover:bg-gray-100"
                  role="menuitem"
                  tabindex="0"
                  href="/take-action#schools"
                  ><svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="mr-2 h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 010-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      fill="#111"
                    ></path></svg
                  >Educators</a
                ><a
                  class="flex p-2 text-sm text-black hover:bg-gray-100"
                  role="menuitem"
                  tabindex="0"
                  href="/take-action#genz"
                  ><svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="mr-2 h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 010-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      fill="#111"
                    ></path></svg
                  >Gen Z</a
                ><a
                  class="flex p-2 text-sm text-black hover:bg-gray-100"
                  role="menuitem"
                  tabindex="0"
                  href="/take-action#legislators"
                  ><svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="mr-2 h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 010-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      fill="#111"
                    ></path></svg
                  >Legislators</a
                ><a
                  class="flex p-2 text-sm text-black hover:bg-gray-100"
                  role="menuitem"
                  tabindex="0"
                  href="/take-action#everyone"
                  ><svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="mr-2 h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 010-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      fill="#111"
                    ></path></svg
                  >Everyone</a
                >
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          class="inline-flex items-center lg:hidden"
          aria-label="Menu"
          @click="toggleMenu"
        >
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 0h20v2H0V0zm0 6h20v2H0V6zm20 6H0v2h20v-2z"
              fill="#fff"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>
