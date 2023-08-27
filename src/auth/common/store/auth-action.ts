import { GlobalStores } from '@/common/store';


const store = GlobalStores.AUTH;

export enum AuthActionsTypes {
  START_LOADING = store + '/start-loading',
  AUTHENTICATE = store + '/authenticate'
}

export type AuthAction =
  | { type: AuthActionsTypes.START_LOADING }
  | { type: AuthActionsTypes.AUTHENTICATE }
