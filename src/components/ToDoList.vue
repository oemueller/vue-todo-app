<script setup lang="ts">
import { computed, ref } from 'vue';
import type { ToDoItem } from '@/types/ToDoItem';
import ToDoCard from './ToDoCard.vue';
import IconSearch from './icons/IconSearch.vue';
import ToDoListHeadline from './ToDoListHeadline.vue';
import EmptyState from './EmptyState.vue';

interface Props {
  toDos: ToDoItem[];
}

const props = defineProps<Props>();

const searchTerm = ref();

const filteredToDos = computed(() => {
  if (!searchTerm?.value) {
    return props.toDos;
  }

  return props.toDos.filter((toDo) =>
    toDo.title.toLowerCase().includes(searchTerm.value?.toLowerCase())
  );
});

const searchText = computed(() => {
  if (!searchTerm?.value) {
    return undefined;
  }
  return `Search results for "${searchTerm.value}"`;
});
</script>
<template>
  <div class="p-4 min-h-[50vh]">
    <slot name="top" />
    <ToDoListHeadline :count="filteredToDos.length">
      <template #headline>
        <slot name="headline" />
      </template>
    </ToDoListHeadline>
    <section class="mb-6">
      <label class="inline-flex items-center gap-2 relative mb-2 w-full md:w-auto">
        <span class="sr-only">Search for a ToDo item:</span>
        <input
          type="search"
          v-model="searchTerm"
          class="text-sm w-full sm:w-[min(350px,35vw)] search-label dark:text-slate-900 bg-slate-50 dark:bg-slate-200"
          placeholder="Search for a task"
        />
        <IconSearch class="w-4 h-4 absolute right-2 hidden text-teal-500" />
      </label>
      <p v-if="searchText" class="text-sm">{{ searchText }}</p>
    </section>
    <TransitionGroup name="todo-list" tag="ul" class="grid gap-4 todo-grid">
      <ToDoCard v-for="toDo in filteredToDos" :key="toDo.id" :to-do="toDo" />
    </TransitionGroup>
    <EmptyState v-if="searchTerm !== '' && filteredToDos.length === 0">
      <p>Sorry, no tasks could be found</p>
    </EmptyState>
    <EmptyState v-if="searchTerm === '' && filteredToDos.length === 0">
      <p>No tasks available</p>
    </EmptyState>
  </div>
</template>
<style scoped>
.search-label:placeholder-shown + svg {
  display: block;
}
.todo-grid {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

.todo-list-enter-active,
.todo-list-leave-active {
  transition: all 0.5s ease;
}
.todo-list-enter-from,
.todo-list-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
