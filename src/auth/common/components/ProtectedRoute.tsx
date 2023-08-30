import { FC } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

import { MainRoutes } from '@/routes';
import { AuthRoutes } from '@/auth/routes';

import { useAuthState } from '../hooks';


export const ProtectedRoute: FC = () => {

  const { auth: { isAuthenticated } } = useAuthState();

  return (
    isAuthenticated
      ? <Outlet />
      : <Navigate to={`/${ MainRoutes.AUTH }/${ AuthRoutes.LOGIN }`} />
  );
};
