import { FC } from 'react';
import { Card, CardContent, Divider, CardActions, Typography, Button, Box } from '@mui/material';

import { FontWeightPalette } from '@/common/config';


interface TaskProps {
  id: string;
  title: string;
  description: string;
}

export const Task: FC<TaskProps> = ({ title, description }) => {
  return (
    <Card sx={{ marginTop: 3 }}>
      <CardContent>
        <Typography align='center' fontWeight={FontWeightPalette.BOLD} marginBottom={1}>
          { title }
        </Typography>

        <Divider />

        <Typography align='justify' paddingX={1} paddingTop={2}>
          { description }
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button size='small' color='success' variant='contained'>
          <Typography variant='body2'>Done</Typography>
        </Button>

        <Box>
          <Button sx={{ marginRight: 3 }} size='small' variant='contained'>
            <Typography variant='body2'>Edit</Typography>
          </Button>
          <Button size='small' color='error' variant='contained'>
            <Typography variant='body2'>Remove</Typography>
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}
