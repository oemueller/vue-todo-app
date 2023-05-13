<script setup lang="ts">
import CreateToDoForm from '@/components/CreateToDoForm.vue';
import ToDoList from '@/components/ToDoList.vue';

import { useTodoStore } from '@/stores/TodoStore';
import { storeToRefs } from 'pinia';

const toDoStore = useTodoStore();
const { incompleteToDos } = storeToRefs(toDoStore);
</script>

<template>
  <main>
    <ToDoList :to-dos="incompleteToDos">
      <template #top>
        <CreateToDoForm />
        <hr class="mb-8 border-1 border-slate-200 dark:border-slate-600" />
      </template>
      <template #headline> Your open tasks </template>
    </ToDoList>
  </main>
</template>
