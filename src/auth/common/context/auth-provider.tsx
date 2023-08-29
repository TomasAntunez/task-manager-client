import { FC, useEffect, useReducer } from 'react';

import { userReducer, userInitialState } from '@/user/common/store';

import { authReducer, authInitialState } from '../store';
import { useAuthServices } from '../services';
import { AuthStateContext, AuthStateContextProps } from './auth-state-context';
import { AuthServicesContext } from './auth-services-context';


interface AuthProviderProps {
  children: JSX.Element
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {

  const [ authState, authDispatch ] = useReducer(authReducer, authInitialState);
  const [ userState, userDispatch ] = useReducer(userReducer, userInitialState);
  
  const authServices = useAuthServices(authDispatch, userDispatch);

  const getAuth = authServices.getAuth;

  useEffect( () => {
    getAuth();
  }, [getAuth]);


  const authStateValue: AuthStateContextProps = {
    auth: authState,
    user: userState
  }

  return (
    <AuthStateContext.Provider value={authStateValue}>
      <AuthServicesContext.Provider value={authServices}>
        { children }
      </AuthServicesContext.Provider>
    </AuthStateContext.Provider>
  );
};
