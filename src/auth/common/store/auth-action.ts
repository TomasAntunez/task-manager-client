
export enum AuthActionTypes {
  AUTHENTICATE = 'auth/authenticate',
  REMOVE_AUTH = 'auth/remove-auth'
}

export type AuthAction =
  | { type: AuthActionTypes.AUTHENTICATE }
  | { type: AuthActionTypes.REMOVE_AUTH }
