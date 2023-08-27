import { Dispatch, createContext } from 'react';

import { AuthAction, AuthState } from '@/auth/common/store';

import { Stores } from '../store';


export interface GlobalContextProps {
  [Stores.AUTH]: [AuthState, Dispatch<AuthAction>]
}

export const GlobalContext = createContext<GlobalContextProps | null>(null);
