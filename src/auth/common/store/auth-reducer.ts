import { Reducer } from 'react';

import { AuthState } from './auth-state';
import { AuthAction, AuthActionTypes } from './auth-action';


export const authReducer: Reducer<AuthState, AuthAction> = (state, action) => {

  switch (action.type) {

    case AuthActionTypes.AUTHENTICATE:
      return {
        ...state,
        isAuthenticated: true
      };

    case AuthActionTypes.REMOVE_AUTH:
      return {
        ...state,
        isAuthenticated: false
      }

    default:
      return state;
  }
  
}
