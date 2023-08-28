import { Reducer } from 'react';

import { AuthState } from './auth-state';
import { AuthAction, AuthActionTypes } from './auth-action';


export const authReducer: Reducer<AuthState, AuthAction> = (state, action) => {

  switch (action.type) {

    case AuthActionTypes.START_LOADING:
      return {
        ...state,
        isLoading: true
      };

    case AuthActionTypes.AUTHENTICATE:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true
      };

    default:
      return state;
  }
  
}
