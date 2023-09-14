import { Reducer } from 'react';


import { AlertState } from './alert-state';
import { AlertAction, AlertActionTypes } from './alert-action';


export const alertReducer: Reducer<AlertState, AlertAction> = (state, action) => {

  switch (action.type) {

    case AlertActionTypes.HIDE:
      return {
        ...state,
        open: false
      }

    case AlertActionTypes.SHOW_ERROR:
      return {
        open: true,
        severity: 'error',
        msg: action.payload || 'There was a mistake'
      };

    case AlertActionTypes.SHOW_SUCCESS:
      return {
        open: true,
        severity: 'success',
        msg: action.payload
      }

    default:
      return state;

  }

};
