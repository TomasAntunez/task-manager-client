import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';

import { MainRoutes } from '@/routes';
import { AuthRoutes } from '@/auth/routes';

import { useLoginForm } from './useLoginForm';


export const LoginPage: FC = () => {

  const { formik } = useLoginForm();


  return (
    <>
      <Typography component='h1' variant='h3'>Login</Typography>

      <Paper sx={{
        maxWidth: 450,
        paddingX: 4,
        paddingY: 3,
        marginTop: 5
      }}>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            name='email'
            type='text'
            label="Email"
            fullWidth
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            name='password'
            type='password'
            label="Password"
            fullWidth
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          <Box display='flex' justifyContent='space-between' marginTop={1}>

            <Link to={ `/${ MainRoutes.AUTH }/${ AuthRoutes.REGISTER }` }>
              <Button variant='text'>
                Go To Register
              </Button>
            </Link>

            <Button type='submit'>
              Sign In
            </Button>
            
          </Box>
        </form>
      </Paper>
    </>
  )
};
