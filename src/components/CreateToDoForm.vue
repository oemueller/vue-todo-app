<script setup lang="ts">
import { useTodoStore } from '@/stores/TodoStore';
import { ref } from 'vue';

const toDoStore = useTodoStore();

const newTaskTitle = ref('');

const handleCreateTask = () => {
  if (newTaskTitle.value.length < 1) {
    return;
  }
  toDoStore.createTodoItem(newTaskTitle.value);
  newTaskTitle.value = '';
};
</script>
<template>
  <form class="mb-6 flex flex-col sm:flex-row items-end gap-4" @submit.prevent="handleCreateTask">
    <label class="w-full sm:w-auto inline-flex flex-col">
      <span class="text-2xl font-bold mb-4">Create a new Task</span>
      <input
        type="text"
        v-model="newTaskTitle"
        class="text-sm w-full sm:w-[min(350px,35vw)] dark:text-slate-900 bg-slate-50 dark:bg-slate-200"
        placeholder="Task description"
      />
    </label>
    <button
      type="submit"
      class="w-full sm:w-auto text-center sm:text-left text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex gap-1 items-center justify-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4 h-4 text-teal-200"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
      Create task
    </button>
  </form>
</template>
