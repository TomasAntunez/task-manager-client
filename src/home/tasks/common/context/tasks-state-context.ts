import { createContext } from 'react';

import { TasksState } from '../store';


export const TasksStateContext = createContext<TasksState | null>(null);
