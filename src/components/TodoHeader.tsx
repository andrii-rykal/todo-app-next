import { Box, Button, Typography } from '@mui/material';
import React, { FC } from 'react';

type Props = {
  onAdd: () => void;
};

const TodoHeader: FC<Props> = ({ onAdd }) => {
  return (
    <Box
      component="header"
      sx={{
        p: 2,
        borderBottom: '1px solid black',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        bgcolor: '#e57373',
        boxShadow: 1,
      }}
    >
      <Typography variant="h3" component="h1" sx={{}}>
        Todo App
      </Typography>
      <Button variant="contained" color="primary" onClick={onAdd}>
        Create Todo
      </Button>
    </Box>
  );
};

export default TodoHeader;
