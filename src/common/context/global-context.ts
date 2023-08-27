import { createContext, Dispatch } from 'react';

import { AuthAction, AuthState } from '@/auth/common/store';


export interface GlobalContextProps {
  authStore: [AuthState, Dispatch<AuthAction>]
}

export const GlobalContext = createContext<GlobalContextProps | null>(null);
