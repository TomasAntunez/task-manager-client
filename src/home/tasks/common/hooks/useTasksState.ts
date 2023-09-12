import { useContext } from 'react';

import { TasksStateContext } from '../context';


export const useTasksState = () => {
  const context = useContext(TasksStateContext);
  if (!context) throw new Error('No TasksStateContext');
  return context;
}
