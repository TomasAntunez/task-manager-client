import { createContext } from 'react';

import { UserState } from '@/user/common/store';

import { AuthState } from '../store';


export interface AuthStateContextProps {
  auth: AuthState;
  user: UserState;
}

export const AuthStateContext = createContext<AuthStateContextProps | null>(null);
