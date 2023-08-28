import { GlobalStores } from '@/common/store';


const store = GlobalStores.AUTH;

export enum AuthActionTypes {
  START_LOADING = store + '/start-loading',
  AUTHENTICATE = store + '/authenticate'
}

export type AuthAction =
  | { type: AuthActionTypes.START_LOADING }
  | { type: AuthActionTypes.AUTHENTICATE }
