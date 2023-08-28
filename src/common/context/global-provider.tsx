import { FC } from 'react';

import { useAuthReducer } from '@/auth/common/store';
import { useUserReducer } from '@/user/common/store';

import { GlobalContext, GlobalContextProps } from './global-context';
import { GlobalStores } from '../store';


interface GlobalProviderProps {
  children: JSX.Element
}

export const GlobalProvider: FC<GlobalProviderProps> = ({ children }) => {

  const [ authState, authDispatch ] = useAuthReducer();
  const [ userState, userDispatch ] = useUserReducer();


  const stores: GlobalContextProps = {
    [GlobalStores.AUTH]: {
      state: authState,
      dispatch: authDispatch
    },
    [GlobalStores.USER]: {
      state: userState,
      dispatch: userDispatch
    }
  };

  return (
    <GlobalContext.Provider value={stores}>
      { children }
    </GlobalContext.Provider>
  );
};
