import { FC } from 'react';
import { Paper, TextField, Button, Typography } from '@mui/material';

import { FontWeightPalette } from '@/common/config';

import { useTaskForm } from './useTaskForm';


export const TaskForm: FC = () => {

  const { state, handleChange, handleSubmit } = useTaskForm();


  return (
    <Paper sx={{
      position: 'fixed',
      width: '40%',
      paddingY: 4,
      marginTop: '5%'
    }}>
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        width: '85%',
        margin: 'auto'
      }}>
        <TextField
          name='title'
          label="Title"
          variant='standard'
          value={state.title}
          onChange={handleChange}
        />
        <TextField
          name='description'
          label="Description"
          multiline
          rows={3}
          value={state.description}
          onChange={handleChange}
        />

        <Button type='submit' variant='contained' sx={{ marginTop: 2 }}>
          <Typography fontWeight={FontWeightPalette.BOLD}>
            Create Task
          </Typography>
        </Button>
      </form>
    </Paper>
  );
}
