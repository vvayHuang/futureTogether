<script setup lang="ts">
import BtnBlack from './BtnBlack.vue'
</script>

<template>
  <div
    id="newsletter"
    class="overflow-x-hidden w-full newsletter bg-cover bg-yellow-pixels py-8 lg:py-16 text-center text-black"
  >
    <h2 class="pb-4 font-bold text-2xl">一起行動</h2>
    <p class="pb-8 max-w-xl mx-auto px-4">
      註冊後，您將偶爾收到我們的電子郵件，可以優先報名相關分享會及活動。
      我們絕不會向第三方分享或出售您的信息。我們將使用此郵件列表向運動成員
      提供最新參考資訊，並在必要時請大家一起行動。
    </p>
    <form id="tag-newsletter" method="post" data-hs-cf-bound="true">
      <div class="grid grid-cols-2 gap-4 justify-center max-w-lg mx-auto text-left px-4">
        <div>
          <label class="block" for="firstname">姓</label
          ><input
            class="p-2 border w-full"
            type="text"
            id="firstname"
            required=""
            aria-required="true"
            placeholder="First Name"
            name="firstname"
            value=""
          />
        </div>
        <div>
          <label class="block" for="lastname">名</label
          ><input
            class="p-2 border w-full"
            type="text"
            id="lastname"
            required=""
            aria-required="true"
            placeholder="Last Name"
            name="lastname"
            value=""
          />
        </div>
        <div class="col-span-2">
          <label class="block" for="email">電子信箱</label
          ><input
            class="p-2 border w-full"
            type="email"
            id="email"
            required=""
            aria-required="true"
            placeholder="Email Address"
            name="email"
            value=""
          />
        </div>
        <div>
          <label class="block" for="zip">郵遞區號</label
          ><input
            class="p-2 border w-full"
            type="text"
            id="zip"
            required=""
            aria-required="true"
            placeholder="Zip Code"
            name="zip"
            value=""
          />
        </div>
        <div>
          <label class="block" for="persona">你的職業</label
          ><select name="persona" id="persona" class="p-2 border w-full">
            <option value="" disabled="" hidden="" selected="">請選擇</option>
            <option value="parent">雙親</option>
            <option value="educator">教育者</option>
            <option value="legislator">立法者</option>
            <option value="gen_z">Z世代</option>
            <option value="other">其他</option>
          </select>
        </div>
      </div>
    </form>
    <BtnBlack class="mt-8">送出</BtnBlack>
  </div>
</template>

<style scoped>
.bg-yellow-pixels {
  background-image: url('https://www.anxiousgeneration.com/yellow-pixels.webp');
}
</style>
