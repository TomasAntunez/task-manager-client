import { FC } from 'react';
import { Box, Typography } from '@mui/material';

import { useTasksState } from '../../../hooks';
import { Task } from './task';


export const TaskList: FC = () => {

  const { tasks } = useTasksState();

  return (
    <Box
      marginTop={2}
      marginBottom={4}
      marginX={2}
      width='100%'
    >
      {
        (tasks.length !== 0) ? (
          tasks.map( task => (
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              description={task.description}
            />
          ))
        ) : (
          <Typography variant='h5' marginTop={5} align='center'>
            You don't have any task
          </Typography>
        )
      }
    </Box>
  );
}
