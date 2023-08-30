import { createContext, Dispatch } from 'react';

import { AlertAction } from '../../store';


export const AlertDispatchContext = createContext<Dispatch<AlertAction> | null>(null);
