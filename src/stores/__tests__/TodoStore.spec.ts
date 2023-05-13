import { describe, it, expect, beforeEach } from 'vitest';
import type { ToDoItem } from '@/types/ToDoItem';
import { createPinia, setActivePinia } from 'pinia';
import { createToDoMock } from '@/components/__tests__/createToDoMock';
import { useTodoStore } from '../TodoStore';

const createTodos = (): ToDoItem[] => [...Array(5).keys()].map(() => createToDoMock());

describe('ToDoStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it('set item as complete', () => {
    const toDos = createTodos();
    const toDoStore = useTodoStore();
    toDoStore.$patch({ toDos });
    toDoStore.setTodoAsComplete(toDos[0].id);
    expect(toDoStore.incompleteToDos).toHaveLength(toDos.length - 1);
  });
  it('set item as incomplete', () => {
    const toDos = createTodos();
    const toDoStore = useTodoStore();
    toDoStore.$patch({ toDos });
    toDoStore.setTodoAsComplete(toDos[0].id);
    toDoStore.setTodoAsIncomplete(toDos[0].id);
    expect(toDoStore.incompleteToDos).toHaveLength(toDos.length);
  });
});
