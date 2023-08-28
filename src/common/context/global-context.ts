import { Dispatch, createContext } from 'react';

import { AuthAction, AuthState } from '@/auth/common/store';
import { UserState, UserAction } from '@/user/common/store';

import { GlobalStores } from '../store';


export interface GlobalContextProps {
  [GlobalStores.AUTH]: {
    state: AuthState,
    dispatch: Dispatch<AuthAction>
  },
  [GlobalStores.USER]: {
    state: UserState,
    dispatch: Dispatch<UserAction>
  }
}

export const GlobalContext = createContext<GlobalContextProps | null>(null);
