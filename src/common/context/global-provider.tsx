import { FC, useReducer } from 'react';

import { AuthReducer, authInitialState } from '@/auth/common/store';

import { GlobalContext } from './global-context';
import { Stores } from '../store';


interface GlobalProviderProps {
  children: JSX.Element
}

export const GlobalProvider: FC<GlobalProviderProps> = ({ children }) => {

  const stores = {
    [Stores.AUTH]: useReducer(AuthReducer, authInitialState),
  };

  return (
    <GlobalContext.Provider value={stores}>
      { children }
    </GlobalContext.Provider>
  );
};
