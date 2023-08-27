import { useGlobalContext } from '@/common/hooks';


export const useAuth = () => {
  return useGlobalContext().authStore;
};
