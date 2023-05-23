import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { nanoid } from 'nanoid';
import { fetchTodoItems } from '@/api/fetchTodoItems';
import type { ToDoItem } from '@/types/ToDoItem';

export const useTodoStore = defineStore('todo', () => {
  const toDos = ref<ToDoItem[]>([]);

  async function fetchInitialTodos() {
    try {
      const response = await fetchTodoItems();
      toDos.value = await response.json();
      toDos.value = toDos.value.map((todo) => ({ ...todo, createdAt: new Date().toISOString() }));
    } catch (error) {
      console.error(error);
      alert('could not fetch todo items, please check your internet connection.');
    }
  }

  function getToDoItem(id: ToDoItem['id']): ToDoItem | undefined {
    return toDos.value.find((todo) => todo.id === id);
  }

  function setTodoAsComplete(id: ToDoItem['id']) {
    const toDo = getToDoItem(id);
    if (toDo) toDo.completed = true;
  }

  function setTodoAsIncomplete(id: ToDoItem['id']) {
    const toDo = getToDoItem(id);
    if (toDo) toDo.completed = false;
  }

  function createTodoItem(title: string): ToDoItem {
    const newToDo: ToDoItem = {
      completed: false,
      id: nanoid(),
      title,
      userId: 1,
      createdAt: new Date().toISOString()
    };
    toDos.value = [...toDos.value, newToDo];
    return newToDo;
  }

  function sortByIsoDate(a: ToDoItem, b: ToDoItem) {
    return a.createdAt > b.createdAt ? -1 : a.createdAt < b.createdAt ? 1 : 0;
  }

  const incompleteToDos = computed<ToDoItem[]>(() =>
    toDos.value.sort(sortByIsoDate).filter((todo) => !todo.completed)
  );
  const completedToDos = computed<ToDoItem[]>(() =>
    toDos.value.sort(sortByIsoDate).filter((todo) => todo.completed)
  );

  return {
    toDos,
    fetchInitialTodos,
    incompleteToDos,
    completedToDos,
    setTodoAsComplete,
    setTodoAsIncomplete,
    createTodoItem
  };
});
