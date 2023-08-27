import { useGlobalStores } from '@/common/hooks';
import { GlobalStores } from '@/common/store';

export const useAuthStore = () => useGlobalStores()[GlobalStores.AUTH];
