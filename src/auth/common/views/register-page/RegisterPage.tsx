import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';

import { MainRoutes } from '@/routes';
import { AuthRoutes } from '@/auth/routes';

import { useRegisterForm } from './useRegisterForm';


export const RegisterPage: FC = () => {

  const { formik } = useRegisterForm();


  return (
    <>
      <Typography component='h1' variant='h3'>Register</Typography>

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
            name='username'
            type='text'
            label="Username"
            fullWidth
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
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

            <Link to={ `/${ MainRoutes.AUTH }/${ AuthRoutes.LOGIN }` }>
              <Button variant='text'>
                Go To Login
              </Button>
            </Link>

            <Button type='submit'>
              Sign Up
            </Button>
            
          </Box>
        </form>
      </Paper>
    </>
  )
};
