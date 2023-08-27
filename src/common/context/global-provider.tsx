import { FC, useReducer } from 'react';

import { AuthReducer, authInitialState } from '@/auth/common/store';

import { GlobalContext } from './global-context';
import { GlobalStores } from '../store';


interface GlobalProviderProps {
  children: JSX.Element
}

export const GlobalProvider: FC<GlobalProviderProps> = ({ children }) => {

  const stores = {
    [GlobalStores.AUTH]: useReducer(AuthReducer, authInitialState),
  };

  return (
    <GlobalContext.Provider value={stores}>
      { children }
    </GlobalContext.Provider>
  );
};
