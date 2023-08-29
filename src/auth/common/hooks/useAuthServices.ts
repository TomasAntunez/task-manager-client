import { useContext } from 'react';

import { AuthServicesContext } from '../context';


export const useAuthServices = () => {
  const context = useContext(AuthServicesContext);
  if (!context) throw new Error('No AuthServicesContext');
  return context;
}
