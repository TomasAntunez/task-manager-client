import { useContext } from 'react';

import { AlertDispatchContext } from '../context';


export const useAlertDispatch = () => {
  const context = useContext(AlertDispatchContext);
  if (!context) throw new Error('No AlertDispatchContext');
  return context;
};
