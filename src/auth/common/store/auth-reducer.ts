import { Reducer } from 'react';

import { AuthState } from './auth-state';
import { AuthAction, AuthActionsTypes } from './auth-action';


export const AuthReducer: Reducer<AuthState, AuthAction> = (state, action) => {

  switch (action.type) {

    case AuthActionsTypes.START_LOADING:
      return {
        ...state,
        isLoading: true
      };

    case AuthActionsTypes.AUTHENTICATE:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true
      };

    default:
      return state;
  }
  
}
