<script setup lang="ts">
import { useTodoStore } from './stores/TodoStore';
import { onMounted } from 'vue';
import AppHeader from './components/AppHeader.vue';
import IconSupport from './components/icons/IconSupport.vue';

const toDoStore = useTodoStore();

onMounted(() => {
  toDoStore.fetchInitialTodos();
});
</script>

<template>
  <AppHeader />
  <div class="container mx-auto min-h-[calc(100vh-200px)] mb-10">
    <RouterView />
  </div>
  <footer class="bg-slate-900 dark:bg-slate-950">
    <div class="container mx-auto p-4 pb-40">
      <p class="text-slate-100 text-sm m-auto">
        Made with Vue.js and <IconSupport class="inline-flex mx-1" /> by
        <a href="https://oemueller.de">oemueller.de, 2023</a>
      </p>
    </div>
  </footer>
</template>
