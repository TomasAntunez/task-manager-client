import { FC, useState } from 'react';

import { TasksStateContext } from './tasks-state-context';
import { TasksServicesContext } from './tasks-services-context';


interface TasksProviderProps {
  children: JSX.Element
}

export const TasksProvider: FC<TasksProviderProps> = ({ children }) => {

  const [ taskState ] = useState();


  return (
    <TasksStateContext.Provider value={{taskState}}>
      <TasksServicesContext.Provider value={{taskState}}>
        { children }
      </TasksServicesContext.Provider>
    </TasksStateContext.Provider>
  );
};
