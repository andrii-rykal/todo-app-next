'use client';

import { TodoResponse } from '@/types/todoResponse';
import { Clear } from '@mui/icons-material';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  ListItem,
  Typography,
} from '@mui/material';
import React, { FC } from 'react';

type Props = {
  todo: TodoResponse;
  onDelete: (id: number) => void;
};

const TodoItem: FC<Props> = ({ todo, onDelete }) => {
  const handleDeleteTodo = async () => {
    onDelete(todo.id);
  };

  return (
    <>
      <ListItem
        sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Checkbox checked={todo.completed} />
          <Typography variant="h6" component="p">
            {todo.title}
          </Typography>
        </Box>
        <Button sx={{ p: 1, color: 'inherit' }} onClick={handleDeleteTodo}>
          <Clear />
        </Button>
      </ListItem>
      <Divider />
    </>
  );
};

export default TodoItem;
