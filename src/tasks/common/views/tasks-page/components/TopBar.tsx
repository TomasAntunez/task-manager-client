import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

import { MainRoutes } from '@/routes';
import { FontWeightPalette } from '@/common/config';
import { AuthRoutes } from '@/auth/routes';
import { useAuthServices } from '@/auth/common/hooks';



export const TopBar: FC = () => {

  const navigate = useNavigate();
  const { logout } = useAuthServices();

  const signOff = () => {
    logout();
    navigate(`/${ MainRoutes.AUTH }/${ AuthRoutes.LOGIN }`);
  };


  return (
    <AppBar position='fixed'>
      <Toolbar>
        <Typography
          variant='h6'
          component='h2'
          fontWeight={FontWeightPalette.BOLD}
          flexGrow={1}
        >
          Task Manager
        </Typography>

        <Button sx={{ marginRight: 3 }} variant='text'>My Profile</Button>

        <Button onClick={signOff} variant='text'>Sign Off</Button>
      </Toolbar>
    </AppBar>
  );
}
