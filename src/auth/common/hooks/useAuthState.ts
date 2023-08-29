import { useContext } from 'react';

import { AuthStateContext } from '../context';


export const useAuthState = () => {
  const context = useContext(AuthStateContext);
  if (!context) throw new Error('No AuthStateContext');
  return context;
};
