import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import ToDoList from './../ToDoList.vue';
import { createToDoMock } from './createToDoMock';
import { createTestingPinia } from '@pinia/testing';
import type { ToDoItem } from '@/types/ToDoItem';

const toDos: ToDoItem[] = [...Array(5).keys()].map(() => createToDoMock());

const options = {
  props: { toDos },
  global: {
    plugins: [createTestingPinia({ stubActions: true, createSpy: vi.fn })]
  }
};

describe('ToDoList', () => {
  it('renders list of ToDos', () => {
    const wrapper = mount(ToDoList as any, options);
    expect(wrapper.findAllComponents({ name: 'ToDoCard' })).toHaveLength(toDos.length);
  });
});
