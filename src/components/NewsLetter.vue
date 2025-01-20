<script setup>
import BtnBlack from './BtnBlack.vue'
import { reactive } from 'vue'

// 表單資料
const formData = reactive({
  name: '',
  email: '',
  persona: '',
})

let isSubmitting = false

// 提交表單的處理函數
const submitForm = () => {
  if (isSubmitting) return // 防止重複提交
  isSubmitting = true

  if (formData.name && formData.persona) {
    const googleFormUrl =
      'https://docs.google.com/forms/u/0/d/e/1FAIpQLScqjQ-OKep1vj3196c5ZkfLNb3Con4Hkt6mLagEsqLUp1eEbA/formResponse'

    // 確保不重複加載 jQuery
    if (!window.$) {
      const script = document.createElement('script')
      script.src = 'https://code.jquery.com/jquery-3.6.4.min.js'
      script.onload = () => sendForm(googleFormUrl)
      document.head.appendChild(script)
    } else {
      sendForm(googleFormUrl)
    }
  } else {
    alert('Please fill out the required fields.')
    isSubmitting = false
  }
}

// 實際發送表單的函數
const sendForm = (url) => {
  $.ajax({
    url: url,
    crossDomain: true,
    data: {
      'entry.2110889308': formData.name,
      'entry.1286466906': formData.email,
      'entry.500979022': formData.persona,
    },
    type: 'POST',
    complete: () => {
      // 清空表單
      formData.name = ''
      formData.email = ''
      formData.persona = ''
      window.location.replace('index.html')
      isSubmitting = false
    },
  })
}
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
    <form id="google-form">
      <div class="grid grid-cols-2 gap-4 justify-center max-w-xl mx-auto text-left px-4">
        <div>
          <label class="block" for="name">姓名</label>
          <input
            class="p-2 border w-full"
            type="text"
            id="name"
            v-model="formData.name"
            required
            placeholder="姓名"
          />
        </div>
        <div>
          <label class="block" for="email">電子信箱</label>
          <input
            class="p-2 border w-full"
            type="email"
            id="email"
            v-model="formData.email"
            required
            placeholder="你的信箱"
          />
        </div>
        <div>
          <label class="block" for="persona">你的職業</label>
          <select id="persona" class="p-2 border w-full" v-model="formData.persona">
            <option value="" disabled hidden>請選擇</option>
            <option value="雙親">雙親</option>
            <option value="教育者">教育者</option>
            <option value="立法者">立法者</option>
            <option value="Z世代">Z世代</option>
            <option value="其他">其他</option>
          </select>
        </div>
      </div>
    </form>
    <BtnBlack class="mt-8" @click="submitForm">送出</BtnBlack>
  </div>
</template>

<style scoped>
.bg-yellow-pixels {
  background-image: url('https://www.anxiousgeneration.com/yellow-pixels.webp');
}
</style>
