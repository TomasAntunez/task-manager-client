import { UserState } from './user-state';


export enum UserActionTypes {
  CREATE_USER = 'user/create-user',
  MODIFY_USER = 'user/modify-user',
  REMOVE_USER = 'user/remove-user'
}

export type UserAction =
  | { type: UserActionTypes.CREATE_USER, payload: UserState }
  | { type: UserActionTypes.MODIFY_USER, payload: Partial<UserState> }
  | { type: UserActionTypes.REMOVE_USER }
