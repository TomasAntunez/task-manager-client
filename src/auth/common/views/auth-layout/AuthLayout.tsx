import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Grid } from '@mui/material';


export const AuthLayout: FC<{}> = () => {
  return (
    <Container>
      <Grid container
        flexDirection='column'
        alignItems='center'
        paddingTop={4}
      >
        <Outlet />
      </Grid>
    </Container>
  );
};
