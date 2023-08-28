import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { AuthLayout, LoginPage, RegisterPage } from '../common/views';

import { AuthRoutes } from './auth-routes';


export const AuthRouter: FC = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path={ AuthRoutes.LOGIN } element={<LoginPage />} />
        <Route path={ AuthRoutes.REGISTER } element={<RegisterPage />} />
      </Route>

      <Route path='*' element={<Navigate to={ AuthRoutes.LOGIN }/> } />
    </Routes>
  );
};
