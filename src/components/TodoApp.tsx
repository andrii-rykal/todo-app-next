'use client';

import React, { useEffect, useState } from 'react';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import { Box } from '@mui/material';
import { createTodo, deleteTodo, getTodos } from '@/api/todos';
import { TodoResponse } from '@/types/TodoResponse';

const TodoApp = () => {
  const [todos, setTodos] = useState<TodoResponse[]>([]);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const { data } = await getTodos(10);
        setTodos(data);
      } catch (error) {
        console.error('Failed to fetch todos:', error);
      }
    };

    fetchTodos();
  }, []);

  const handleDeleteTodo = async (id: number) => {
    const prevTodos = [...todos];
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);

    try {
      await deleteTodo(id);
    } catch (error) {
      console.error('Failed to delete todo:', error);
      setTodos(prevTodos);
    }
  };

  const handleAddClick = () => setIsAdding(true);

  const handleSaveNewTodo = async (title: string) => {
    setIsAdding(false);
    if (!title.trim()) return;

    try {
      const { data } = await createTodo({ userId: 1, title, completed: false });
      setTodos([data, ...todos]);
    } catch (error) {
      console.error('Failed to create todo:', error);
    }
  };

  return (
    <Box
      component="section"
      sx={{ border: '1px solid grey', maxWidth: 500, mt: 5 }}
      className="mx-auto"
    >
      <TodoHeader onAdd={handleAddClick} />
      <TodoList
        todos={todos}
        onDelete={handleDeleteTodo}
        isAdding={isAdding}
        onSave={handleSaveNewTodo}
      />
    </Box>
  );
};

export default TodoApp;
