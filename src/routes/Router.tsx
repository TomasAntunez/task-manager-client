import { FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';

import { AuthRouter } from '@/auth/routes';
import { ProtectedRoute } from '@/auth/common/components';
import { useAuthServices } from '@/auth/common/hooks';
import { HomeRouter } from '@/home/routes';

import { MainRoutes } from './routes';


export const MainRouter: FC = () => {

  const { isLoading } = useAuthServices();

  if (isLoading) return 'Loading...';

  return (
    <Routes>
      <Route path={ MainRoutes.AUTH + '/*' } element={ <AuthRouter /> } />

      <Route element={ <ProtectedRoute /> }>
        <Route path={ MainRoutes.HOME + '/*' } element={ <HomeRouter /> } />
      </Route>

      <Route path='*' element={ <Navigate to={MainRoutes.HOME} /> } />
    </Routes>
  )
}
