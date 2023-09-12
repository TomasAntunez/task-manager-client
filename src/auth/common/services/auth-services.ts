import { Dispatch, useCallback, useState } from 'react';

import { UserAction, UserActionTypes } from '@/home/user/common/store';

import { AuthActionTypes, AuthAction } from '../store';
import { AuthServices, Register, Login, Logout, GetAuth } from './auth-services-interface';
import { SetSessionParams } from './auth-params-schemas';
import { registerResponse, getAuthResponse, loginResponse } from './mock';


export const useAuthServices = (
  authDispatch: Dispatch<AuthAction>,
  userDispatch: Dispatch<UserAction>
): AuthServices => {

  const [ isLoading, setIsLoading ] = useState<boolean>(true);


  const setSession = ({ id, email, username }: SetSessionParams) => {
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

    } catch (error) {
      setIsLoading(false);
      return error;
    }
  };


  const login: Login = async () => {
    setIsLoading(true);

    try {
      const { id, email, username } = loginResponse;

      setSession({ id, email, username });
      setIsLoading(false);

    } catch (error) {
      setIsLoading(false);
      return error;
    }
  };


  const logout: Logout = () => {
    authDispatch({ type: AuthActionTypes.REMOVE_AUTH });
    userDispatch({ type: UserActionTypes.REMOVE_USER });
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
    logout,
    getAuth
  }

};
