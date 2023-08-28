import { useGlobalStores } from '@/common/hooks';
import { GlobalStores } from '@/common/store';

export const useUserStore = () => useGlobalStores()[GlobalStores.USER];
