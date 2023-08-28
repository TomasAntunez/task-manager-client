import { GlobalStores } from '@/common/store';

import { UserState } from './user-state';


const store = GlobalStores.USER;

export enum UserActionTypes {
  CREATE_USER = store + '/create-user',
  REMOVE_USER = store + '/remove-user'
}

export type UserAction =
  | { type: UserActionTypes.CREATE_USER, payload: UserState }
  | { type:UserActionTypes.REMOVE_USER }
