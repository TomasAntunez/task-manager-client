import { FC } from 'react';
import { Paper, TextField, Button, Typography } from '@mui/material';

import { FontWeightPalette } from '@/common/config';


export const TaskForm: FC = () => {
  return (
    <Paper sx={{
      position: 'fixed',
      width: '40%',
      paddingY: 4,
      marginTop: '5%'
    }}>
      <form style={{
        display: 'flex',
        flexDirection: 'column',
        width: '85%',
        margin: 'auto'
      }}>
        <TextField label="Title" variant='standard'/>
        <TextField label="Description" multiline rows={3} />

        <Button variant='contained' sx={{ marginTop: 2 }}>
          <Typography fontWeight={FontWeightPalette.BOLD}>
            Create Task
          </Typography>
        </Button>
      </form>
    </Paper>
  );
}
