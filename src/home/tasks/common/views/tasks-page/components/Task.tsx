import { FC } from 'react';
import { Card, CardContent, Divider, CardActions, Typography, Button, Box } from '@mui/material';

import { FontWeightPalette } from '@/common/config';


export const Task: FC = () => {
  return (
    <Card sx={{ marginTop: 3 }}>
      <CardContent>
        <Typography align='center' fontWeight={FontWeightPalette.BOLD} marginBottom={1}>
          Title
        </Typography>

        <Divider />

        <Typography align='justify' paddingX={1} paddingTop={2}>
          Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description 
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
