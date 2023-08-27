import { useGlobalStores } from '@/common/hooks';
import { Stores } from '@/common/store';

export const useAuthStore = () => useGlobalStores()[Stores.AUTH];
