import { FC, useReducer } from 'react';

import { AuthReducer, authInitialState } from '@/auth/common/store';

import { GlobalContext } from './global-context';


interface GlobalProviderProps {
  children: JSX.Element
}

export const GlobalProvider: FC<GlobalProviderProps> = ({ children }) => {

  const value = {
    authStore: useReducer(AuthReducer, authInitialState)
    // alertProvider: useReducer();
  };

  return (
    <GlobalContext.Provider value={value}>
      { children }
    </GlobalContext.Provider>
  );
};
