import { createContext } from 'react';


interface TasksStateContextProps {}

export const TasksStateContext = createContext<TasksStateContextProps | null>(null);
