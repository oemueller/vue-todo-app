<script setup lang="ts">
import { ref, watch } from 'vue';
import { useTodoStore } from '@/stores/TodoStore';
import type { ToDoItem } from '@/types/ToDoItem';

interface Props {
  toDo: ToDoItem;
}

const props = defineProps<Props>();

const isCompleted = ref(props.toDo.completed);

const toDoStore = useTodoStore();

const isBusy = ref(false);

const timeOut = () => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 150);
  });
};

watch(isCompleted, async (newValue: boolean) => {
  isBusy.value = true;
  if (newValue === true) {
    await timeOut();
    toDoStore.setTodoAsComplete(props.toDo.id);
  } else {
    await timeOut();
    toDoStore.setTodoAsIncomplete(props.toDo.id);
  }
  isBusy.value = false;
});
</script>

<template>
  <li :class="{ 'pointer-events-none opacity-75': isBusy }">
    <div
      class="relative p-6 bg-slate-200 dark:bg-slate-200 dark:text-slate-900 border border-slate-200 rounded-lg shadow hover:bg-slate-100 dark:hover:bg-slate-300 aspect-square flex"
    >
      <label class="flex items-center gap-4">
        <input
          type="checkbox"
          v-model="isCompleted"
          class="after:content-[''] after:absolute after:inset-0 cursor-pointer w-5 h-5 text-teal-500 focus:ring-teal-800"
        />
        <span class="text-base">{{ toDo.title }}</span>
      </label>
    </div>
  </li>
</template>
