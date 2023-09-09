import { FC, useReducer, useEffect } from 'react';

import { tasksReducer, tasksInitialState } from '../store';
import { useTasksServices } from '../services';
import { TasksStateContext } from './tasks-state-context';
import { TasksServicesContext } from './tasks-services-context';


interface TasksProviderProps {
  children: JSX.Element
}

export const TasksProvider: FC<TasksProviderProps> = ({ children }) => {

  const [ tasksState ] = useReducer(tasksReducer, tasksInitialState);

  const tasksServices = useTasksServices();


  const getTasks = tasksServices.getTasks;

  useEffect( () => {
    getTasks();
  }, [getTasks]);


  return (
    <TasksStateContext.Provider value={tasksState}>
      <TasksServicesContext.Provider value={tasksServices}>
        { children }
      </TasksServicesContext.Provider>
    </TasksStateContext.Provider>
  );
};
