import { FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';

import { AuthRouter } from '@/auth/routes';
import { TasksPage } from '@/tasks/common/views';

import { MainRoutes } from './routes';


export const MainRouter: FC<{}> = () => {
  return (
    <Routes>
      <Route path={ MainRoutes.AUTH + '/*' } element={ <AuthRouter /> } />
      <Route path={ MainRoutes.TASKS } element={ <TasksPage /> } />

      <Route path='*' element={ <Navigate to={MainRoutes.TASKS} /> } />
    </Routes>
  )
}
