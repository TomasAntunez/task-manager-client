import { createContext } from 'react';

import { AuthState } from '../store';
import { UserState } from '@/user/common/store';


export interface AuthStateContextProps {
  auth: AuthState;
  user: UserState;
}

export const AuthStateContext = createContext<AuthStateContextProps | null>(null);
