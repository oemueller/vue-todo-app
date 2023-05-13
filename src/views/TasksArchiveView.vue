<script setup lang="ts">
import ToDoList from '@/components/ToDoList.vue';

import { useTodoStore } from '@/stores/TodoStore';
import { storeToRefs } from 'pinia';

const toDoStore = useTodoStore();
const { completedToDos } = storeToRefs(toDoStore);
</script>

<template>
  <main>
    <ToDoList :to-dos="completedToDos">
      <template #headline> Your completed tasks </template>
    </ToDoList>
  </main>
</template>
