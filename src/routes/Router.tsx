import { FC } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { AuthRouter } from '@/auth/routes';
import { ProtectedRoute } from '@/auth/common/components';
import { useAuthServices } from '@/auth/common/hooks';
import { TasksPage } from '@/tasks/common/views';

import { MainRoutes } from './routes';


export const MainRouter: FC = () => {

  const { isLoading } = useAuthServices();

  if (isLoading) return 'Loading...';

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ MainRoutes.AUTH + '/*' } element={ <AuthRouter /> } />

        <Route element={ <ProtectedRoute /> }>
          <Route path={ MainRoutes.TASKS } element={ <TasksPage /> } />
        </Route>

        <Route path='*' element={ <Navigate to={MainRoutes.TASKS} /> } />
      </Routes>
    </BrowserRouter>
  )
}
