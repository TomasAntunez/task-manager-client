import { Dispatch, useCallback, useState } from 'react';

import { UserAction, UserActionTypes } from '@/user/common/store';

import { AuthActionTypes, AuthAction } from '../store';
import { AuthServices, Register, Login, GetAuth } from './auth-services-interface';
import { SetSessionProps } from './auth-props-schemas';
import { registerResponse, getAuthResponse, loginResponse } from './mock';


export const useAuthServices = (
  authDispatch: Dispatch<AuthAction>,
  userDispatch: Dispatch<UserAction>
): AuthServices => {

  const [ isLoading, setIsLoading ] = useState<boolean>(true);


  const setSession = ({ id, email, username }: SetSessionProps) => {
    authDispatch({ type: AuthActionTypes.AUTHENTICATE });
    userDispatch({
      type: UserActionTypes.CREATE_USER,
      payload: { id, email, username }
    });
  };


  const register: Register = async () => {
    setIsLoading(true);
    try {
      const { id, email, username } = registerResponse;
  
      setSession({ id, email, username });
      setIsLoading(false);

      return {};

    } catch (error) {
      setIsLoading(false);
      return { error };
    }
  };


  const login: Login = async () => {
    setIsLoading(true);

    try {
      const { id, email, username } = loginResponse;

      setSession({ id, email, username });
      setIsLoading(false);

      return {};

    } catch (error) {
      setIsLoading(false);
      return { error };
    }
  };
  

  const getAuth: GetAuth = useCallback( async () => {
    setIsLoading(true);

    try {
      const { id, email, username } = getAuthResponse;

      authDispatch({ type: AuthActionTypes.AUTHENTICATE });
      userDispatch({
        type: UserActionTypes.MODIFY_USER,
        payload: { id, email, username }
      });

    } catch (error) {
      authDispatch({ type: AuthActionTypes.REMOVE_AUTH });
    }

    setIsLoading(false);

  }, [authDispatch, userDispatch]);


  return {
    isLoading,
    register,
    login,
    getAuth
  }

};
