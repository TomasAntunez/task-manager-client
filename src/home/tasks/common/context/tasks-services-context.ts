import { createContext } from 'react';

import { TasksServices } from '../services';


export const TasksServicesContext = createContext<TasksServices | null>(null);
