import { FC, useReducer } from 'react'

import { AlertComponent } from '../../components';
import { alertReducer, alertInitialState, AlertActionTypes } from '../../store';
import { AlertDispatchContext } from './alert-dispatch-context';


interface AlertProviderProps {
  children: JSX.Element
}

export const AlertProvider: FC<AlertProviderProps> = ({ children }) => {

  const [ alertState, alertDispatch ] = useReducer(alertReducer, alertInitialState);

  const handleClose = () => {
    alertDispatch({ type: AlertActionTypes.HIDE })
  };


  return (
    <AlertDispatchContext.Provider value={alertDispatch}>
      <AlertComponent
        open={alertState.open}
        msg={alertState.msg}
        severity={alertState.severity}
        handleClose={handleClose}
      />
      { children }
    </AlertDispatchContext.Provider>
  )
};
