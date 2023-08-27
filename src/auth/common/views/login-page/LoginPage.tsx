import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';

import { MainRoutes } from '@/routes';
import { AuthRoutes } from '@/auth/routes';


export const LoginPage: FC<{}> = () => {

  return (
    <>
      <Typography component='h1' variant='h3'>Login</Typography>

      <Paper sx={{
        maxWidth: 450,
        paddingX: 4,
        paddingY: 3,
        marginTop: 5
      }}>
        <form>
          <TextField type='text' label="Username" fullWidth />
          <TextField type='password' label="Password" fullWidth />

          <Box display='flex' justifyContent='space-between' marginTop={1}>

            <Link to={ `/${ MainRoutes.AUTH }/${ AuthRoutes.REGISTER }` }>
              <Button variant='text'>
                Go To Register
              </Button>
            </Link>

            <Button>
              Sign In
            </Button>
            
          </Box>
        </form>
      </Paper>
    </>
  )
};
