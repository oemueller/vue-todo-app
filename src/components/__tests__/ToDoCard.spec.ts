import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { createTestingPinia } from '@pinia/testing';

import { flushPromises, mount } from '@vue/test-utils';
import ToDoCard from '../ToDoCard.vue';

import { createToDoMock } from './createToDoMock';
import { useTodoStore } from '@/stores/TodoStore';

const options = {
  props: { toDo: createToDoMock({ completed: false }) },
  global: {
    plugins: [createTestingPinia({ stubActions: true, createSpy: vi.fn })]
  }
};

describe('ToDoCard', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });
  it('calls setTodoAsComplete store action', async () => {
    const toDoStore = useTodoStore();
    const wrapper = mount(ToDoCard, options);
    const checkbox = wrapper.find<HTMLInputElement>('input[type="checkbox"]');
    checkbox.element.checked = true;
    await checkbox.trigger('change');
    vi.runAllTimers();
    await flushPromises();
    expect(toDoStore.setTodoAsComplete).toHaveBeenCalled();
  });
});
