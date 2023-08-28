import { useReducer } from "react"

import { authReducer } from './auth-reducer';
import { authInitialState } from './auth-state';

export const useAuthReducer = () => useReducer(authReducer, authInitialState);
