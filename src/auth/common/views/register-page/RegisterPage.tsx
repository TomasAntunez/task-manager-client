import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';

import { MainRoutes } from '@/routes';
import { AuthRoutes } from '@/auth/routes';


export const RegisterPage: FC<{}> = () => {

  return (
    <>
      <Typography component='h1' variant='h3'>Register</Typography>

      <Paper sx={{
        maxWidth: 450,
        paddingX: 4,
        paddingY: 3,
        marginTop: 5
      }}>
        <form>
          <TextField size='medium' type='text' label="Email" fullWidth />
          <TextField type='text' label="Username" fullWidth />
          <TextField type='password' label="Password" fullWidth />

          <Box display='flex' justifyContent='space-between' marginTop={1}>

            <Link to={ `/${ MainRoutes.AUTH }/${ AuthRoutes.LOGIN }` }>
              <Button variant='text'>
                Go To Login
              </Button>
            </Link>

            <Button>
              Sign Up
            </Button>
            
          </Box>
        </form>
      </Paper>
    </>
  )
};
