import { createContext } from 'react';


interface TasksServicesContextProps {}

export const TasksServicesContext = createContext<TasksServicesContextProps | null>(null);
