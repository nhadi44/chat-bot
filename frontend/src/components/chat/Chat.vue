<template>
  <section class="chat__wrapper">
    <div class="chat__header">
      <img src="/images/robot.png" alt="robot-avatar" class="chat__header-avatar">
      <div>
        <h1 class="chat__header-title">Chat Header</h1>
        <h2 class="chat__header-subtitle">Online</h2>
      </div>
    </div>
    <div class="chat__body">
      <p class="chat__bot-response">dadasd</p>
      <p class="chat__user-response">dadasd</p>
    </div>
    <div class="chat__user-answer">
      <input type="text" placeholder="Masukan jawaban anda" class="chat__user-input">
      <button class="chat__btn-submit">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/>
        </svg>
      </button>
    </div>
  </section>
</template>
<script setup>
</script>