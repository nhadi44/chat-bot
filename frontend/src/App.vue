<script setup>
import ButtonChat from "./components/chat/ButtonChat.vue";
import Chat from "./components/chat/Chat.vue";
import {ref} from "vue";

const showChatStatus = ref(false);

function showChat() {
  showChatStatus.value = !showChatStatus.value;
  // get class chat_content
  const chatContent = document.querySelector('.chat__content');
  // add style to chat_content
  if (showChatStatus.value) {
    chatContent.classList.add('chat__content-show');
  } else {
    chatContent.classList.remove('chat__content-show');
  }
}

</script>

<template>
  <div class="h-screen flex items-center justify-center relative">
    <h1 class="test">Chat Bot Prototype</h1>
  </div>

  <div class="absolute right-0 bottom-0 -translate-x-7 -translate-y-20">
    <chat
        class="chat__content"/>
  </div>
  <div class="absolute right-0 bottom-0 -translate-x-7 -translate-y-4 group">
    <button-chat class="group-hover:rotate-180 transition-all duration-100 ease-in-out" @click="showChat"/>
  </div>
</template>