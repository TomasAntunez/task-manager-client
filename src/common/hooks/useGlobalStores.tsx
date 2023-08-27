import { useContext } from 'react';

import { GlobalContext } from '../context';


export const useGlobalStores = () => {
  const context = useContext(GlobalContext);

  if (!context) throw new Error('No GlobalContext');
  
  return context;
};
