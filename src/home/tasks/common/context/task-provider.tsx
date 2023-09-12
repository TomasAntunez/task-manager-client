import { FC, useReducer, useEffect } from 'react';

import { tasksReducer, tasksInitialState } from '../store';
import { useTasksServices } from '../services';
import { TasksStateContext } from './tasks-state-context';
import { TasksDispatchContext } from './tasks-dispatch-context';
import { TasksServicesContext } from './tasks-services-context';


interface TasksProviderProps {
  children: JSX.Element
}

export const TasksProvider: FC<TasksProviderProps> = ({ children }) => {

  const [ tasksState, tasksDispatch ] = useReducer(tasksReducer, tasksInitialState);

  const tasksServices = useTasksServices(tasksDispatch);


  const getTasks = tasksServices.getTasks;

  useEffect( () => {
    getTasks();
  }, [getTasks]);


  return (
    <TasksStateContext.Provider value={tasksState}>
      <TasksDispatchContext.Provider value={tasksDispatch}>
        <TasksServicesContext.Provider value={tasksServices}>
          { children }
        </TasksServicesContext.Provider>
      </TasksDispatchContext.Provider>
    </TasksStateContext.Provider>
  );
};
