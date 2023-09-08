import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { TasksProvider } from '../tasks/common/context';
import { TasksPage } from '../tasks/common/views';

import { HomeRoutes } from './home-routes';


export const HomeRouter: FC = () => {
  return (
    <TasksProvider>
      <Routes>
        <Route path={`/${ HomeRoutes.TASKS }`} element={<TasksPage />} />

        <Route path={'*'} element={<Navigate to={`${ HomeRoutes.TASKS }`} />} />
      </Routes>
    </TasksProvider>
  );
}
