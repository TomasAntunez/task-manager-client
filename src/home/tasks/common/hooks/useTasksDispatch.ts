import { useContext } from 'react';

import { TasksDispatchContext } from '../context';


export const useTasksDispatch = () => {
  const context = useContext(TasksDispatchContext);
  if (!context) throw new Error('No TasksDispatchContext');
  return context;
}
