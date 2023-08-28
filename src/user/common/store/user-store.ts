import { useReducer } from 'react';

import { userReducer } from './user-reducer';
import { userInitialState } from './user-state';


export const useUserReducer = () => useReducer(userReducer, userInitialState);
