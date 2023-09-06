import { FC } from 'react';
import { Box } from '@mui/material';

import { Task } from './Task';


export const TaskList: FC = () => {

  const tasks = [1, 2, 3, 4, 5, 6];

  return (
    <Box
      marginTop={2}
      marginBottom={4}
      marginX={2}
      width='100%'
    >
      {
        (tasks.length !== 0) &&
          tasks.map( task => (
            <Task key={task} />
          ))
      }
    </Box>
  );
}
