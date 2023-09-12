import { useContext } from 'react';

import { TasksServicesContext } from '../context';


export const useTasksServices = () => {
  const context = useContext(TasksServicesContext);
  if (!context) throw new Error('No TasksServicesContext');
  return context;
}
