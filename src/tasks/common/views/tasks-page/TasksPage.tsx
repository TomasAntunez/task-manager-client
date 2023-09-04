import { FC } from 'react';
import { Container, Grid, Box } from '@mui/material';

import { TopBar, TaskForm, TaskList } from './components';


export const TasksPage: FC = () => {
  return (
    <Box width='100%' height='100vh'>
      <TopBar />
      <Container>
        <Grid container>
          <Grid item container xs={6}>
            <TaskForm />
          </Grid>
          <Grid item container xs={6}>
            <TaskList />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
