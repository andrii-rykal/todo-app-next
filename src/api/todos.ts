import { TodoResponse } from '@/types/TodoResponse';
import { client } from './httpClient';

export const getTodos = (limit?: number): Promise<{ data: TodoResponse[] }> => {
  if (limit) {
    return client.get(`/todos?_limit=${limit}`);
  }
  return client.get(`/todos`);
};

export const deleteTodo = (id: number): Promise<void> => {
  return client.delete(`/todos/${id}`);
};

export const createTodo = (
  newTodo: Omit<TodoResponse, 'id'>
): Promise<{ data: TodoResponse }> => {
  return client.post('/todos', newTodo);
};
