import { createContext, Dispatch } from 'react';

import { TasksAction } from '../store';


export const TasksDispatchContext = createContext<Dispatch<TasksAction> | null>(null);
