<template>
  <Disclosure as="nav" class="bg-black sticky top-0 z-50" v-slot="{ open }">
    <div class="px-2 sm:px-6 lg:px-8 w-full">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block size-6" aria-hidden="true" />
            <XMarkIcon v-else class="block size-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
          <div class="flex shrink-0 items-center">
            <router-link to="/" aria-label="Home" class="text-white font-black text-sm md:text-base"
              ><span class="sr-only hidden">The Anxious Generation</span> Future Together
              我們一起行動</router-link
            >
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-6">
              <div
                class="text-white hover:text-yellow text-sm"
                v-for="item in navigation"
                :key="item.name"
              >
                <router-link :to="item.to" :aria-current="item.current ? 'page' : undefined">{{
                  item.name
                }}</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-75 ease-out"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <DisclosurePanel class="sm:hidden absolute w-full h-lvh bg-black">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <DisclosureButton
            v-for="item in navigation"
            :key="item.name"
            as="li"
            :to="item.to"
            :class="[
              item.current
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'block rounded-md px-3 py-2 text-base font-medium',
            ]"
            :aria-current="item.current ? 'page' : undefined"
            ><router-link :to="item.to" :aria-current="item.current ? 'page' : undefined">{{
              item.name
            }}</router-link></DisclosureButton
          >
        </div>
      </DisclosurePanel>
    </transition>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: '背景說明', to: '/aboutus', current: false },
  { name: '有關書', to: '/aboutbook', current: false },
  { name: '延伸閱讀', to: '/research', current: false },
  { name: '資源連結', to: '/resource', current: false },
  { name: '採取行動', to: '/takeaction', current: false },
]
</script>
