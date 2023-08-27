import { Dispatch, createContext } from 'react';

import { AuthAction, AuthState } from '@/auth/common/store';

import { GlobalStores } from '../store';


export interface GlobalContextProps {
  [GlobalStores.AUTH]: [AuthState, Dispatch<AuthAction>]
}

export const GlobalContext = createContext<GlobalContextProps | null>(null);
