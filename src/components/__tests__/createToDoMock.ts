import { nanoid } from 'nanoid';
import type { ToDoItem } from '@/types/ToDoItem';

export const createToDoMock = (
  { completed }: { completed: boolean } = { completed: false }
): ToDoItem => ({
  completed,
  id: nanoid(),
  title: 'Mock ToDo',
  userId: 1,
  createdAt: new Date().toISOString()
});
