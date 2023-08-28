import { Reducer } from 'react';

import { UserState, userInitialState } from './user-state';
import { UserAction, UserActionTypes } from './user-action';


export const userReducer: Reducer<UserState, UserAction> = (state, action) => {

  switch (action.type) {

    case UserActionTypes.CREATE_USER:
      return action.payload;

    case UserActionTypes.REMOVE_USER:
      return userInitialState;

    default:
      return state;
  }

}
