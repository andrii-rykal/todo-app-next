import React, { FC, useState } from 'react';
import TodoItem from './TodoItem';
import { List, TextField } from '@mui/material';
import { TodoResponse } from '@/types/TodoResponse';

type Props = {
  todos: TodoResponse[];
  onDelete: (id: number) => void;
  onSave: (title: string) => void;
  isAdding: boolean;
};

const TodoList: FC<Props> = ({
  todos,
  onDelete,
  onSave,
  isAdding,
}) => {
  const [newTitle, setNewTitle] = useState('');

  const handleBlur = () => {
    onSave(newTitle);
    setNewTitle('');
  };

  return (
    <>
      {isAdding && (
        <TextField
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={e => e.key === 'Enter' && handleBlur()}
        placeholder="Add new todo"
        fullWidth
          autoFocus
          
      />
      )}

      <List sx={{ p: 0, width: '100%', bgcolor: '#ffebee' }}>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onDelete={onDelete}
          />
        ))}
      </List>
    </>
  );
};

export default TodoList;
